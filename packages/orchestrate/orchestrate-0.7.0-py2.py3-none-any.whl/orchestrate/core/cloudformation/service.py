import boto3
import botocore
import six

from orchestrate.common import safe_format
from orchestrate.core.exceptions import OrchestrateException
from orchestrate.core.services.aws_base import AwsService


US_EAST_1 = 'us-east-1'
US_WEST_2 = 'us-west-2'
SUPPORTED_REGIONS = (US_EAST_1, US_WEST_2)

# TODO(patrick): These AMIs correspond to Kubernetes version 1.14
# It appears to work for versions 1.14-1.16, but it's a bit sketchy.
# We should pick AMIs that match the kubernetes version
AMI_MAP = {
  # (region, gpu_support): ami_id,
  (US_EAST_1, False): 'ami-05e621d4ba5b28dcc',
  (US_EAST_1, True): 'ami-04ac5ea8ad53f0718',
  (US_WEST_2, False): 'ami-0486134a23d903f10',
  (US_WEST_2, True): 'ami-02b0649372044be55',
}


class FailedEksStackCreationError(OrchestrateException):
  def __init__(self, stack_name, stack_events):
    super(FailedEksStackCreationError, self).__init__(safe_format('Failed to create EKS stack: {}', stack_name))
    self.stack_name = stack_name
    self.stack_events = stack_events


class AwsCloudFormationService(AwsService):
  def __init__(self, services, aws_services, **kwargs):
    super(AwsCloudFormationService, self).__init__(services, aws_services)
    self._client = boto3.client('cloudformation', **kwargs)
    self._cloudformation = boto3.resource('cloudformation', **kwargs)

  @property
  def client(self):
    return self._client

  @property
  def cloudformation(self):
    return self._cloudformation

  @property
  def region(self):
    return boto3.session.Session().region_name

  def eks_vpc_stack_name(self, cluster_name):
    return safe_format('{}-eks-vpc-stack', cluster_name)

  def create_eks_vpc_stack(self, cluster_name):
    return self.cloudformation.create_stack(
      StackName=self.eks_vpc_stack_name(cluster_name),
      TemplateURL='https://amazon-eks.s3-us-west-2.amazonaws.com/cloudformation/2018-08-30/amazon-eks-vpc-sample.yaml',
    )

  def delete_eks_vpc_stack(self, cluster_name):
    self.describe_eks_vpc_stack(cluster_name).delete()

  def describe_eks_vpc_stack(self, cluster_name):
    return self.cloudformation.Stack(self.eks_vpc_stack_name(cluster_name))

  def ensure_eks_vpc_stack(self, cluster_name):
    try:
      self.create_eks_vpc_stack(cluster_name)
    except self.client.exceptions.AlreadyExistsException:
      pass

    self.wait_for_stack_create_complete(self.eks_vpc_stack_name(cluster_name))
    return self.describe_eks_vpc_stack(cluster_name)

  def ensure_eks_vpc_stack_deleted(self, cluster_name):
    try:
      stack = self.describe_eks_vpc_stack(cluster_name)
      if stack.stack_status == 'CREATE_IN_PROGRESS':
        self.wait_for_stack_create_complete(stack.name)
    except (botocore.exceptions.WaiterError, botocore.exceptions.ClientError):
      pass

    self.delete_eks_vpc_stack(cluster_name)
    self.client.get_waiter('stack_delete_complete').wait(StackName=stack.name)

  def eks_worker_stack_name(self, cluster_name, gpu):
    return safe_format(
      '{}-gpu-worker-stack' if gpu else '{}-cpu-worker-stack',
      cluster_name
    )

  def get_ami_id(self, gpu):
    region = self.region
    if region not in SUPPORTED_REGIONS:
      raise Exception(safe_format(
        "The region {} is not currently supported."
        " Please switch to one of the following regions: {}",
        region,
        ', '.join(SUPPORTED_REGIONS),
      ))
    gpu = bool(gpu)
    return AMI_MAP[(region, gpu)]

  def create_eks_worker_stack(
    self,
    cluster_name,
    security_groups,
    vpc_id,
    subnet_ids,
    max_nodes,
    min_nodes,
    instance_type,
    key_name,
    gpu,
  ):
    parameters = dict(
      ClusterName=cluster_name,
      ClusterControlPlaneSecurityGroup=','.join(security_groups),
      NodeGroupName='gpu-worker' if gpu else 'cpu-worker',
      NodeAutoScalingGroupMinSize=str(min_nodes),
      NodeAutoScalingGroupMaxSize=str(max_nodes),
      NodeInstanceType=instance_type,
      NodeImageId=self.get_ami_id(gpu),
      KeyName=key_name,  # TODO: generate for user
      VpcId=vpc_id,
      Subnets=','.join(subnet_ids),
    )

    return self.cloudformation.create_stack(
      StackName=self.eks_worker_stack_name(cluster_name, gpu),
      TemplateURL='https://amazon-eks.s3-us-west-2.amazonaws.com/cloudformation/2018-08-30/amazon-eks-nodegroup.yaml',
      Parameters=[
        dict(
          ParameterKey=k,
          ParameterValue=v,
        )
        for (k, v)
        in parameters.items()
      ],
      Capabilities=[
          'CAPABILITY_IAM',
      ],
    )

  def delete_eks_worker_stack(self, cluster_name, gpu):
    self.describe_eks_worker_stack(cluster_name, gpu).delete()

  def describe_eks_worker_stack(self, cluster_name, gpu):
    return self.cloudformation.Stack(self.eks_worker_stack_name(cluster_name, gpu))

  def ensure_eks_worker_stack(
    self,
    cluster_name,
    security_groups,
    vpc_id,
    subnet_ids,
    max_nodes,
    min_nodes,
    instance_type,
    key_name,
    gpu,
  ):
    try:
      stack = self.create_eks_worker_stack(
        cluster_name=cluster_name,
        security_groups=security_groups,
        vpc_id=vpc_id,
        subnet_ids=subnet_ids,
        max_nodes=max_nodes,
        min_nodes=min_nodes,
        instance_type=instance_type,
        key_name=key_name,
        gpu=gpu,
      )
    except self.client.exceptions.AlreadyExistsException:
      stack = self.describe_eks_worker_stack(
        cluster_name=cluster_name,
        gpu=gpu,
      )

    stack.reload()
    return stack

  def wait_for_stack_create_complete(self, stack_name):
    try:
      self.client.get_waiter('stack_create_complete').wait(StackName=stack_name)
    except botocore.exceptions.WaiterError as e:
      stack_events = self.client.describe_stack_events(StackName=stack_name)['StackEvents']
      six.raise_from(
        FailedEksStackCreationError(stack_name, stack_events),
        e,
      )

  def ensure_eks_worker_stack_deleted(self, cluster_name, gpu):
    try:
      stack = self.describe_eks_worker_stack(cluster_name, gpu)
      if stack.stack_status == 'CREATE_IN_PROGRESS':
        self.wait_for_stack_create_complete(stack.name)
    except (botocore.exceptions.WaiterError, botocore.exceptions.ClientError):
      pass

    self.delete_eks_worker_stack(cluster_name, gpu)
    self.client.get_waiter('stack_delete_complete').wait(StackName=stack.name)

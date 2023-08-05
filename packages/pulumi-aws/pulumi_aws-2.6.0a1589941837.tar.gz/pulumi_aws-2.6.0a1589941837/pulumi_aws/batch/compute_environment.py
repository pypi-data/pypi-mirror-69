# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class ComputeEnvironment(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) of the compute environment.
    """
    compute_environment_name: pulumi.Output[str]
    """
    The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
    """
    compute_environment_name_prefix: pulumi.Output[str]
    """
    Creates a unique compute environment name beginning with the specified prefix. Conflicts with `compute_environment_name`.
    """
    compute_resources: pulumi.Output[dict]
    """
    Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.

      * `allocation_strategy` (`str`) - The allocation strategy to use for the compute resource in case not enough instances of the best fitting instance type can be allocated. Valid items are `BEST_FIT_PROGRESSIVE`, `SPOT_CAPACITY_OPTIMIZED` or `BEST_FIT`. Defaults to `BEST_FIT`. See [AWS docs](https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html) for details.
      * `bidPercentage` (`float`) - Integer of minimum percentage that a Spot Instance price must be when compared with the On-Demand price for that instance type before instances are launched. For example, if your bid percentage is 20% (`20`), then the Spot price must be below 20% of the current On-Demand price for that EC2 instance. This parameter is required for SPOT compute environments.
      * `desiredVcpus` (`float`) - The desired number of EC2 vCPUS in the compute environment.
      * `ec2KeyPair` (`str`) - The EC2 key pair that is used for instances launched in the compute environment.
      * `image_id` (`str`) - The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.
      * `instanceRole` (`str`) - The Amazon ECS instance role applied to Amazon EC2 instances in a compute environment.
      * `instance_types` (`list`) - A list of instance types that may be launched.
      * `launch_template` (`dict`) - The launch template to use for your compute resources. See details below.
        * `launchTemplateId` (`str`) - ID of the launch template. You must specify either the launch template ID or launch template name in the request, but not both.
        * `launchTemplateName` (`str`) - Name of the launch template.
        * `version` (`str`) - The version number of the launch template. Default: The default version of the launch template.

      * `maxVcpus` (`float`) - The maximum number of EC2 vCPUs that an environment can reach.
      * `minVcpus` (`float`) - The minimum number of EC2 vCPUs that an environment should maintain.
      * `security_group_ids` (`list`) - A list of EC2 security group that are associated with instances launched in the compute environment.
      * `spotIamFleetRole` (`str`) - The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment. This parameter is required for SPOT compute environments.
      * `subnets` (`list`) - A list of VPC subnets into which the compute resources are launched.
      * `tags` (`dict`) - Key-value pair tags to be applied to resources that are launched in the compute environment.
      * `type` (`str`) - The type of compute environment. Valid items are `EC2` or `SPOT`.
    """
    ecs_cluster_arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.
    """
    service_role: pulumi.Output[str]
    """
    The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
    """
    state: pulumi.Output[str]
    """
    The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
    """
    status: pulumi.Output[str]
    """
    The current status of the compute environment (for example, CREATING or VALID).
    """
    status_reason: pulumi.Output[str]
    """
    A short, human-readable string to provide additional details about the current status of the compute environment.
    """
    type: pulumi.Output[str]
    """
    The type of compute environment. Valid items are `EC2` or `SPOT`.
    """
    def __init__(__self__, resource_name, opts=None, compute_environment_name=None, compute_environment_name_prefix=None, compute_resources=None, service_role=None, state=None, type=None, __props__=None, __name__=None, __opts__=None):
        """
        Creates a AWS Batch compute environment. Compute environments contain the Amazon ECS container instances that are used to run containerized batch jobs.

        For information about AWS Batch, see [What is AWS Batch?](http://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html) .
        For information about compute environment, see [Compute Environments](http://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) .

        > **Note:** To prevent a race condition during environment deletion, make sure to set `depends_on` to the related `iam.RolePolicyAttachment`;
        otherwise, the policy may be destroyed too soon and the compute environment will then get stuck in the `DELETING` state, see [Troubleshooting AWS Batch](http://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html) .

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        ecs_instance_role_role = aws.iam.Role("ecsInstanceRoleRole", assume_role_policy=\"\"\"{
            "Version": "2012-10-17",
            "Statement": [
        	{
        	    "Action": "sts:AssumeRole",
        	    "Effect": "Allow",
        	    "Principal": {
        		"Service": "ec2.amazonaws.com"
        	    }
        	}
            ]
        }

        \"\"\")
        ecs_instance_role_role_policy_attachment = aws.iam.RolePolicyAttachment("ecsInstanceRoleRolePolicyAttachment",
            policy_arn="arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role",
            role=ecs_instance_role_role.name)
        ecs_instance_role_instance_profile = aws.iam.InstanceProfile("ecsInstanceRoleInstanceProfile", role=ecs_instance_role_role.name)
        aws_batch_service_role_role = aws.iam.Role("awsBatchServiceRoleRole", assume_role_policy=\"\"\"{
            "Version": "2012-10-17",
            "Statement": [
        	{
        	    "Action": "sts:AssumeRole",
        	    "Effect": "Allow",
        	    "Principal": {
        		"Service": "batch.amazonaws.com"
        	    }
        	}
            ]
        }

        \"\"\")
        aws_batch_service_role_role_policy_attachment = aws.iam.RolePolicyAttachment("awsBatchServiceRoleRolePolicyAttachment",
            policy_arn="arn:aws:iam::aws:policy/service-role/AWSBatchServiceRole",
            role=aws_batch_service_role_role.name)
        sample_security_group = aws.ec2.SecurityGroup("sampleSecurityGroup", egress=[{
            "cidrBlocks": ["0.0.0.0/0"],
            "fromPort": 0,
            "protocol": "-1",
            "toPort": 0,
        }])
        sample_vpc = aws.ec2.Vpc("sampleVpc", cidr_block="10.1.0.0/16")
        sample_subnet = aws.ec2.Subnet("sampleSubnet",
            cidr_block="10.1.1.0/24",
            vpc_id=sample_vpc.id)
        sample_compute_environment = aws.batch.ComputeEnvironment("sampleComputeEnvironment",
            compute_environment_name="sample",
            compute_resources={
                "instanceRole": ecs_instance_role_instance_profile.arn,
                "instanceType": ["c4.large"],
                "maxVcpus": 16,
                "minVcpus": 0,
                "securityGroupIds": [sample_security_group.id],
                "subnets": [sample_subnet.id],
                "type": "EC2",
            },
            service_role=aws_batch_service_role_role.arn,
            type="MANAGED")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] compute_environment_name: The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
        :param pulumi.Input[str] compute_environment_name_prefix: Creates a unique compute environment name beginning with the specified prefix. Conflicts with `compute_environment_name`.
        :param pulumi.Input[dict] compute_resources: Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
        :param pulumi.Input[str] service_role: The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
        :param pulumi.Input[str] state: The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
        :param pulumi.Input[str] type: The type of compute environment. Valid items are `EC2` or `SPOT`.

        The **compute_resources** object supports the following:

          * `allocation_strategy` (`pulumi.Input[str]`) - The allocation strategy to use for the compute resource in case not enough instances of the best fitting instance type can be allocated. Valid items are `BEST_FIT_PROGRESSIVE`, `SPOT_CAPACITY_OPTIMIZED` or `BEST_FIT`. Defaults to `BEST_FIT`. See [AWS docs](https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html) for details.
          * `bidPercentage` (`pulumi.Input[float]`) - Integer of minimum percentage that a Spot Instance price must be when compared with the On-Demand price for that instance type before instances are launched. For example, if your bid percentage is 20% (`20`), then the Spot price must be below 20% of the current On-Demand price for that EC2 instance. This parameter is required for SPOT compute environments.
          * `desiredVcpus` (`pulumi.Input[float]`) - The desired number of EC2 vCPUS in the compute environment.
          * `ec2KeyPair` (`pulumi.Input[str]`) - The EC2 key pair that is used for instances launched in the compute environment.
          * `image_id` (`pulumi.Input[str]`) - The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.
          * `instanceRole` (`pulumi.Input[str]`) - The Amazon ECS instance role applied to Amazon EC2 instances in a compute environment.
          * `instance_types` (`pulumi.Input[list]`) - A list of instance types that may be launched.
          * `launch_template` (`pulumi.Input[dict]`) - The launch template to use for your compute resources. See details below.
            * `launchTemplateId` (`pulumi.Input[str]`) - ID of the launch template. You must specify either the launch template ID or launch template name in the request, but not both.
            * `launchTemplateName` (`pulumi.Input[str]`) - Name of the launch template.
            * `version` (`pulumi.Input[str]`) - The version number of the launch template. Default: The default version of the launch template.

          * `maxVcpus` (`pulumi.Input[float]`) - The maximum number of EC2 vCPUs that an environment can reach.
          * `minVcpus` (`pulumi.Input[float]`) - The minimum number of EC2 vCPUs that an environment should maintain.
          * `security_group_ids` (`pulumi.Input[list]`) - A list of EC2 security group that are associated with instances launched in the compute environment.
          * `spotIamFleetRole` (`pulumi.Input[str]`) - The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment. This parameter is required for SPOT compute environments.
          * `subnets` (`pulumi.Input[list]`) - A list of VPC subnets into which the compute resources are launched.
          * `tags` (`pulumi.Input[dict]`) - Key-value pair tags to be applied to resources that are launched in the compute environment.
          * `type` (`pulumi.Input[str]`) - The type of compute environment. Valid items are `EC2` or `SPOT`.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['compute_environment_name'] = compute_environment_name
            __props__['compute_environment_name_prefix'] = compute_environment_name_prefix
            __props__['compute_resources'] = compute_resources
            if service_role is None:
                raise TypeError("Missing required property 'service_role'")
            __props__['service_role'] = service_role
            __props__['state'] = state
            if type is None:
                raise TypeError("Missing required property 'type'")
            __props__['type'] = type
            __props__['arn'] = None
            __props__['ecs_cluster_arn'] = None
            __props__['status'] = None
            __props__['status_reason'] = None
        super(ComputeEnvironment, __self__).__init__(
            'aws:batch/computeEnvironment:ComputeEnvironment',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, compute_environment_name=None, compute_environment_name_prefix=None, compute_resources=None, ecs_cluster_arn=None, service_role=None, state=None, status=None, status_reason=None, type=None):
        """
        Get an existing ComputeEnvironment resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) of the compute environment.
        :param pulumi.Input[str] compute_environment_name: The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
        :param pulumi.Input[str] compute_environment_name_prefix: Creates a unique compute environment name beginning with the specified prefix. Conflicts with `compute_environment_name`.
        :param pulumi.Input[dict] compute_resources: Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
        :param pulumi.Input[str] ecs_cluster_arn: The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.
        :param pulumi.Input[str] service_role: The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
        :param pulumi.Input[str] state: The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
        :param pulumi.Input[str] status: The current status of the compute environment (for example, CREATING or VALID).
        :param pulumi.Input[str] status_reason: A short, human-readable string to provide additional details about the current status of the compute environment.
        :param pulumi.Input[str] type: The type of compute environment. Valid items are `EC2` or `SPOT`.

        The **compute_resources** object supports the following:

          * `allocation_strategy` (`pulumi.Input[str]`) - The allocation strategy to use for the compute resource in case not enough instances of the best fitting instance type can be allocated. Valid items are `BEST_FIT_PROGRESSIVE`, `SPOT_CAPACITY_OPTIMIZED` or `BEST_FIT`. Defaults to `BEST_FIT`. See [AWS docs](https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html) for details.
          * `bidPercentage` (`pulumi.Input[float]`) - Integer of minimum percentage that a Spot Instance price must be when compared with the On-Demand price for that instance type before instances are launched. For example, if your bid percentage is 20% (`20`), then the Spot price must be below 20% of the current On-Demand price for that EC2 instance. This parameter is required for SPOT compute environments.
          * `desiredVcpus` (`pulumi.Input[float]`) - The desired number of EC2 vCPUS in the compute environment.
          * `ec2KeyPair` (`pulumi.Input[str]`) - The EC2 key pair that is used for instances launched in the compute environment.
          * `image_id` (`pulumi.Input[str]`) - The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.
          * `instanceRole` (`pulumi.Input[str]`) - The Amazon ECS instance role applied to Amazon EC2 instances in a compute environment.
          * `instance_types` (`pulumi.Input[list]`) - A list of instance types that may be launched.
          * `launch_template` (`pulumi.Input[dict]`) - The launch template to use for your compute resources. See details below.
            * `launchTemplateId` (`pulumi.Input[str]`) - ID of the launch template. You must specify either the launch template ID or launch template name in the request, but not both.
            * `launchTemplateName` (`pulumi.Input[str]`) - Name of the launch template.
            * `version` (`pulumi.Input[str]`) - The version number of the launch template. Default: The default version of the launch template.

          * `maxVcpus` (`pulumi.Input[float]`) - The maximum number of EC2 vCPUs that an environment can reach.
          * `minVcpus` (`pulumi.Input[float]`) - The minimum number of EC2 vCPUs that an environment should maintain.
          * `security_group_ids` (`pulumi.Input[list]`) - A list of EC2 security group that are associated with instances launched in the compute environment.
          * `spotIamFleetRole` (`pulumi.Input[str]`) - The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment. This parameter is required for SPOT compute environments.
          * `subnets` (`pulumi.Input[list]`) - A list of VPC subnets into which the compute resources are launched.
          * `tags` (`pulumi.Input[dict]`) - Key-value pair tags to be applied to resources that are launched in the compute environment.
          * `type` (`pulumi.Input[str]`) - The type of compute environment. Valid items are `EC2` or `SPOT`.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["arn"] = arn
        __props__["compute_environment_name"] = compute_environment_name
        __props__["compute_environment_name_prefix"] = compute_environment_name_prefix
        __props__["compute_resources"] = compute_resources
        __props__["ecs_cluster_arn"] = ecs_cluster_arn
        __props__["service_role"] = service_role
        __props__["state"] = state
        __props__["status"] = status
        __props__["status_reason"] = status_reason
        __props__["type"] = type
        return ComputeEnvironment(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class NodejsAppLayer(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name(ARN) of the layer.
    """
    auto_assign_elastic_ips: pulumi.Output[bool]
    """
    Whether to automatically assign an elastic IP address to the layer's instances.
    """
    auto_assign_public_ips: pulumi.Output[bool]
    """
    For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
    """
    auto_healing: pulumi.Output[bool]
    """
    Whether to enable auto-healing for the layer.
    """
    custom_configure_recipes: pulumi.Output[list]
    custom_deploy_recipes: pulumi.Output[list]
    custom_instance_profile_arn: pulumi.Output[str]
    """
    The ARN of an IAM profile that will be used for the layer's instances.
    """
    custom_json: pulumi.Output[str]
    """
    Custom JSON attributes to apply to the layer.
    """
    custom_security_group_ids: pulumi.Output[list]
    """
    Ids for a set of security groups to apply to the layer's instances.
    """
    custom_setup_recipes: pulumi.Output[list]
    custom_shutdown_recipes: pulumi.Output[list]
    custom_undeploy_recipes: pulumi.Output[list]
    drain_elb_on_shutdown: pulumi.Output[bool]
    """
    Whether to enable Elastic Load Balancing connection draining.
    """
    ebs_volumes: pulumi.Output[list]
    """
    `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.

      * `encrypted` (`bool`)
      * `iops` (`float`) - For PIOPS volumes, the IOPS per disk.
      * `mountPoint` (`str`) - The path to mount the EBS volume on the layer's instances.
      * `numberOfDisks` (`float`) - The number of disks to use for the EBS volume.
      * `raidLevel` (`str`) - The RAID level to use for the volume.
      * `size` (`float`) - The size of the volume in gigabytes.
      * `type` (`str`) - The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
    """
    elastic_load_balancer: pulumi.Output[str]
    """
    Name of an Elastic Load Balancer to attach to this layer
    """
    install_updates_on_boot: pulumi.Output[bool]
    """
    Whether to install OS and package updates on each instance when it boots.
    """
    instance_shutdown_timeout: pulumi.Output[float]
    """
    The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
    """
    name: pulumi.Output[str]
    """
    A human-readable name for the layer.
    """
    nodejs_version: pulumi.Output[str]
    """
    The version of NodeJS to use. Defaults to "0.10.38".
    """
    stack_id: pulumi.Output[str]
    """
    The id of the stack the layer will belong to.
    """
    system_packages: pulumi.Output[list]
    """
    Names of a set of system packages to install on the layer's instances.
    """
    tags: pulumi.Output[dict]
    """
    A map of tags to assign to the resource.
    """
    use_ebs_optimized_instances: pulumi.Output[bool]
    """
    Whether to use EBS-optimized instances.
    """
    def __init__(__self__, resource_name, opts=None, auto_assign_elastic_ips=None, auto_assign_public_ips=None, auto_healing=None, custom_configure_recipes=None, custom_deploy_recipes=None, custom_instance_profile_arn=None, custom_json=None, custom_security_group_ids=None, custom_setup_recipes=None, custom_shutdown_recipes=None, custom_undeploy_recipes=None, drain_elb_on_shutdown=None, ebs_volumes=None, elastic_load_balancer=None, install_updates_on_boot=None, instance_shutdown_timeout=None, name=None, nodejs_version=None, stack_id=None, system_packages=None, tags=None, use_ebs_optimized_instances=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an OpsWorks NodeJS application layer resource.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        app = aws.opsworks.NodejsAppLayer("app", stack_id=aws_opsworks_stack["main"]["id"])
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] auto_assign_elastic_ips: Whether to automatically assign an elastic IP address to the layer's instances.
        :param pulumi.Input[bool] auto_assign_public_ips: For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
        :param pulumi.Input[bool] auto_healing: Whether to enable auto-healing for the layer.
        :param pulumi.Input[str] custom_instance_profile_arn: The ARN of an IAM profile that will be used for the layer's instances.
        :param pulumi.Input[str] custom_json: Custom JSON attributes to apply to the layer.
        :param pulumi.Input[list] custom_security_group_ids: Ids for a set of security groups to apply to the layer's instances.
        :param pulumi.Input[bool] drain_elb_on_shutdown: Whether to enable Elastic Load Balancing connection draining.
        :param pulumi.Input[list] ebs_volumes: `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
        :param pulumi.Input[str] elastic_load_balancer: Name of an Elastic Load Balancer to attach to this layer
        :param pulumi.Input[bool] install_updates_on_boot: Whether to install OS and package updates on each instance when it boots.
        :param pulumi.Input[float] instance_shutdown_timeout: The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
        :param pulumi.Input[str] name: A human-readable name for the layer.
        :param pulumi.Input[str] nodejs_version: The version of NodeJS to use. Defaults to "0.10.38".
        :param pulumi.Input[str] stack_id: The id of the stack the layer will belong to.
        :param pulumi.Input[list] system_packages: Names of a set of system packages to install on the layer's instances.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.
        :param pulumi.Input[bool] use_ebs_optimized_instances: Whether to use EBS-optimized instances.

        The **ebs_volumes** object supports the following:

          * `encrypted` (`pulumi.Input[bool]`)
          * `iops` (`pulumi.Input[float]`) - For PIOPS volumes, the IOPS per disk.
          * `mountPoint` (`pulumi.Input[str]`) - The path to mount the EBS volume on the layer's instances.
          * `numberOfDisks` (`pulumi.Input[float]`) - The number of disks to use for the EBS volume.
          * `raidLevel` (`pulumi.Input[str]`) - The RAID level to use for the volume.
          * `size` (`pulumi.Input[float]`) - The size of the volume in gigabytes.
          * `type` (`pulumi.Input[str]`) - The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
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

            __props__['auto_assign_elastic_ips'] = auto_assign_elastic_ips
            __props__['auto_assign_public_ips'] = auto_assign_public_ips
            __props__['auto_healing'] = auto_healing
            __props__['custom_configure_recipes'] = custom_configure_recipes
            __props__['custom_deploy_recipes'] = custom_deploy_recipes
            __props__['custom_instance_profile_arn'] = custom_instance_profile_arn
            __props__['custom_json'] = custom_json
            __props__['custom_security_group_ids'] = custom_security_group_ids
            __props__['custom_setup_recipes'] = custom_setup_recipes
            __props__['custom_shutdown_recipes'] = custom_shutdown_recipes
            __props__['custom_undeploy_recipes'] = custom_undeploy_recipes
            __props__['drain_elb_on_shutdown'] = drain_elb_on_shutdown
            __props__['ebs_volumes'] = ebs_volumes
            __props__['elastic_load_balancer'] = elastic_load_balancer
            __props__['install_updates_on_boot'] = install_updates_on_boot
            __props__['instance_shutdown_timeout'] = instance_shutdown_timeout
            __props__['name'] = name
            __props__['nodejs_version'] = nodejs_version
            if stack_id is None:
                raise TypeError("Missing required property 'stack_id'")
            __props__['stack_id'] = stack_id
            __props__['system_packages'] = system_packages
            __props__['tags'] = tags
            __props__['use_ebs_optimized_instances'] = use_ebs_optimized_instances
            __props__['arn'] = None
        super(NodejsAppLayer, __self__).__init__(
            'aws:opsworks/nodejsAppLayer:NodejsAppLayer',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, auto_assign_elastic_ips=None, auto_assign_public_ips=None, auto_healing=None, custom_configure_recipes=None, custom_deploy_recipes=None, custom_instance_profile_arn=None, custom_json=None, custom_security_group_ids=None, custom_setup_recipes=None, custom_shutdown_recipes=None, custom_undeploy_recipes=None, drain_elb_on_shutdown=None, ebs_volumes=None, elastic_load_balancer=None, install_updates_on_boot=None, instance_shutdown_timeout=None, name=None, nodejs_version=None, stack_id=None, system_packages=None, tags=None, use_ebs_optimized_instances=None):
        """
        Get an existing NodejsAppLayer resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The Amazon Resource Name(ARN) of the layer.
        :param pulumi.Input[bool] auto_assign_elastic_ips: Whether to automatically assign an elastic IP address to the layer's instances.
        :param pulumi.Input[bool] auto_assign_public_ips: For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
        :param pulumi.Input[bool] auto_healing: Whether to enable auto-healing for the layer.
        :param pulumi.Input[str] custom_instance_profile_arn: The ARN of an IAM profile that will be used for the layer's instances.
        :param pulumi.Input[str] custom_json: Custom JSON attributes to apply to the layer.
        :param pulumi.Input[list] custom_security_group_ids: Ids for a set of security groups to apply to the layer's instances.
        :param pulumi.Input[bool] drain_elb_on_shutdown: Whether to enable Elastic Load Balancing connection draining.
        :param pulumi.Input[list] ebs_volumes: `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
        :param pulumi.Input[str] elastic_load_balancer: Name of an Elastic Load Balancer to attach to this layer
        :param pulumi.Input[bool] install_updates_on_boot: Whether to install OS and package updates on each instance when it boots.
        :param pulumi.Input[float] instance_shutdown_timeout: The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
        :param pulumi.Input[str] name: A human-readable name for the layer.
        :param pulumi.Input[str] nodejs_version: The version of NodeJS to use. Defaults to "0.10.38".
        :param pulumi.Input[str] stack_id: The id of the stack the layer will belong to.
        :param pulumi.Input[list] system_packages: Names of a set of system packages to install on the layer's instances.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.
        :param pulumi.Input[bool] use_ebs_optimized_instances: Whether to use EBS-optimized instances.

        The **ebs_volumes** object supports the following:

          * `encrypted` (`pulumi.Input[bool]`)
          * `iops` (`pulumi.Input[float]`) - For PIOPS volumes, the IOPS per disk.
          * `mountPoint` (`pulumi.Input[str]`) - The path to mount the EBS volume on the layer's instances.
          * `numberOfDisks` (`pulumi.Input[float]`) - The number of disks to use for the EBS volume.
          * `raidLevel` (`pulumi.Input[str]`) - The RAID level to use for the volume.
          * `size` (`pulumi.Input[float]`) - The size of the volume in gigabytes.
          * `type` (`pulumi.Input[str]`) - The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["arn"] = arn
        __props__["auto_assign_elastic_ips"] = auto_assign_elastic_ips
        __props__["auto_assign_public_ips"] = auto_assign_public_ips
        __props__["auto_healing"] = auto_healing
        __props__["custom_configure_recipes"] = custom_configure_recipes
        __props__["custom_deploy_recipes"] = custom_deploy_recipes
        __props__["custom_instance_profile_arn"] = custom_instance_profile_arn
        __props__["custom_json"] = custom_json
        __props__["custom_security_group_ids"] = custom_security_group_ids
        __props__["custom_setup_recipes"] = custom_setup_recipes
        __props__["custom_shutdown_recipes"] = custom_shutdown_recipes
        __props__["custom_undeploy_recipes"] = custom_undeploy_recipes
        __props__["drain_elb_on_shutdown"] = drain_elb_on_shutdown
        __props__["ebs_volumes"] = ebs_volumes
        __props__["elastic_load_balancer"] = elastic_load_balancer
        __props__["install_updates_on_boot"] = install_updates_on_boot
        __props__["instance_shutdown_timeout"] = instance_shutdown_timeout
        __props__["name"] = name
        __props__["nodejs_version"] = nodejs_version
        __props__["stack_id"] = stack_id
        __props__["system_packages"] = system_packages
        __props__["tags"] = tags
        __props__["use_ebs_optimized_instances"] = use_ebs_optimized_instances
        return NodejsAppLayer(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


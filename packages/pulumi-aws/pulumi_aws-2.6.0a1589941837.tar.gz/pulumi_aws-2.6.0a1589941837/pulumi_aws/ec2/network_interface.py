# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class NetworkInterface(pulumi.CustomResource):
    attachments: pulumi.Output[list]
    """
    Block to define the attachment of the ENI. Documented below.

      * `attachment_id` (`str`)
      * `device_index` (`float`) - Integer to define the devices index.
      * `instance` (`str`) - ID of the instance to attach to.
    """
    description: pulumi.Output[str]
    """
    A description for the network interface.
    """
    mac_address: pulumi.Output[str]
    """
    The MAC address of the network interface.
    """
    outpost_arn: pulumi.Output[str]
    private_dns_name: pulumi.Output[str]
    """
    The private DNS name of the network interface (IPv4).
    """
    private_ip: pulumi.Output[str]
    private_ips: pulumi.Output[list]
    """
    List of private IPs to assign to the ENI.
    """
    private_ips_count: pulumi.Output[float]
    """
    Number of secondary private IPs to assign to the ENI. The total number of private IPs will be 1 + private_ips_count, as a primary private IP will be assiged to an ENI by default. 
    """
    security_groups: pulumi.Output[list]
    """
    List of security group IDs to assign to the ENI.
    """
    source_dest_check: pulumi.Output[bool]
    """
    Whether to enable source destination checking for the ENI. Default true.
    """
    subnet_id: pulumi.Output[str]
    """
    Subnet ID to create the ENI in.
    """
    tags: pulumi.Output[dict]
    """
    A map of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, attachments=None, description=None, private_ip=None, private_ips=None, private_ips_count=None, security_groups=None, source_dest_check=None, subnet_id=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an Elastic network interface (ENI) resource.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        test = aws.ec2.NetworkInterface("test",
            attachments=[{
                "deviceIndex": 1,
                "instance": aws_instance["test"]["id"],
            }],
            private_ips=["10.0.0.50"],
            security_groups=[aws_security_group["web"]["id"]],
            subnet_id=aws_subnet["public_a"]["id"])
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] attachments: Block to define the attachment of the ENI. Documented below.
        :param pulumi.Input[str] description: A description for the network interface.
        :param pulumi.Input[list] private_ips: List of private IPs to assign to the ENI.
        :param pulumi.Input[float] private_ips_count: Number of secondary private IPs to assign to the ENI. The total number of private IPs will be 1 + private_ips_count, as a primary private IP will be assiged to an ENI by default. 
        :param pulumi.Input[list] security_groups: List of security group IDs to assign to the ENI.
        :param pulumi.Input[bool] source_dest_check: Whether to enable source destination checking for the ENI. Default true.
        :param pulumi.Input[str] subnet_id: Subnet ID to create the ENI in.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.

        The **attachments** object supports the following:

          * `attachment_id` (`pulumi.Input[str]`)
          * `device_index` (`pulumi.Input[float]`) - Integer to define the devices index.
          * `instance` (`pulumi.Input[str]`) - ID of the instance to attach to.
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

            __props__['attachments'] = attachments
            __props__['description'] = description
            __props__['private_ip'] = private_ip
            __props__['private_ips'] = private_ips
            __props__['private_ips_count'] = private_ips_count
            __props__['security_groups'] = security_groups
            __props__['source_dest_check'] = source_dest_check
            if subnet_id is None:
                raise TypeError("Missing required property 'subnet_id'")
            __props__['subnet_id'] = subnet_id
            __props__['tags'] = tags
            __props__['mac_address'] = None
            __props__['outpost_arn'] = None
            __props__['private_dns_name'] = None
        super(NetworkInterface, __self__).__init__(
            'aws:ec2/networkInterface:NetworkInterface',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, attachments=None, description=None, mac_address=None, outpost_arn=None, private_dns_name=None, private_ip=None, private_ips=None, private_ips_count=None, security_groups=None, source_dest_check=None, subnet_id=None, tags=None):
        """
        Get an existing NetworkInterface resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] attachments: Block to define the attachment of the ENI. Documented below.
        :param pulumi.Input[str] description: A description for the network interface.
        :param pulumi.Input[str] mac_address: The MAC address of the network interface.
        :param pulumi.Input[str] private_dns_name: The private DNS name of the network interface (IPv4).
        :param pulumi.Input[list] private_ips: List of private IPs to assign to the ENI.
        :param pulumi.Input[float] private_ips_count: Number of secondary private IPs to assign to the ENI. The total number of private IPs will be 1 + private_ips_count, as a primary private IP will be assiged to an ENI by default. 
        :param pulumi.Input[list] security_groups: List of security group IDs to assign to the ENI.
        :param pulumi.Input[bool] source_dest_check: Whether to enable source destination checking for the ENI. Default true.
        :param pulumi.Input[str] subnet_id: Subnet ID to create the ENI in.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.

        The **attachments** object supports the following:

          * `attachment_id` (`pulumi.Input[str]`)
          * `device_index` (`pulumi.Input[float]`) - Integer to define the devices index.
          * `instance` (`pulumi.Input[str]`) - ID of the instance to attach to.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["attachments"] = attachments
        __props__["description"] = description
        __props__["mac_address"] = mac_address
        __props__["outpost_arn"] = outpost_arn
        __props__["private_dns_name"] = private_dns_name
        __props__["private_ip"] = private_ip
        __props__["private_ips"] = private_ips
        __props__["private_ips_count"] = private_ips_count
        __props__["security_groups"] = security_groups
        __props__["source_dest_check"] = source_dest_check
        __props__["subnet_id"] = subnet_id
        __props__["tags"] = tags
        return NetworkInterface(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Directory(pulumi.CustomResource):
    alias: pulumi.Output[str]
    """
    The directory alias.
    """
    customer_user_name: pulumi.Output[str]
    """
    The user name for the service account.
    """
    directory_id: pulumi.Output[str]
    """
    The directory identifier for registration in WorkSpaces service.
    """
    directory_name: pulumi.Output[str]
    """
    The name of the directory.
    """
    directory_type: pulumi.Output[str]
    """
    The directory type.
    """
    dns_ip_addresses: pulumi.Output[list]
    """
    The IP addresses of the DNS servers for the directory.
    """
    iam_role_id: pulumi.Output[str]
    """
    The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
    """
    ip_group_ids: pulumi.Output[list]
    """
    The identifiers of the IP access control groups associated with the directory.
    """
    registration_code: pulumi.Output[str]
    """
    The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
    """
    self_service_permissions: pulumi.Output[dict]
    """
    The permissions to enable or disable self-service capabilities.

      * `changeComputeType` (`bool`) - Whether WorkSpaces directory users can change the compute type (bundle) for their workspace. Default `false`.
      * `increaseVolumeSize` (`bool`) - Whether WorkSpaces directory users can increase the volume size of the drives on their workspace. Default `false`.
      * `rebuildWorkspace` (`bool`) - Whether WorkSpaces directory users can rebuild the operating system of a workspace to its original state. Default `false`.
      * `restartWorkspace` (`bool`) - Whether WorkSpaces directory users can restart their workspace. Default `true`.
      * `switchRunningMode` (`bool`) - Whether WorkSpaces directory users can switch the running mode of their workspace. Default `false`.
    """
    subnet_ids: pulumi.Output[list]
    """
    The identifiers of the subnets where the directory resides.
    """
    tags: pulumi.Output[dict]
    """
    A map of tags assigned to the WorkSpaces directory.
    """
    workspace_security_group_id: pulumi.Output[str]
    """
    The identifier of the security group that is assigned to new WorkSpaces.
    """
    def __init__(__self__, resource_name, opts=None, directory_id=None, self_service_permissions=None, subnet_ids=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a directory registration in AWS WorkSpaces Service

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        main_vpc = aws.ec2.Vpc("mainVpc", cidr_block="10.0.0.0/16")
        private_a = aws.ec2.Subnet("private-a",
            availability_zone="us-east-1a",
            cidr_block="10.0.0.0/24",
            vpc_id=main_vpc.id)
        private_b = aws.ec2.Subnet("private-b",
            availability_zone="us-east-1b",
            cidr_block="10.0.1.0/24",
            vpc_id=main_vpc.id)
        main_directory = aws.directoryservice.Directory("mainDirectory",
            password="#S1ncerely",
            size="Small",
            vpc_settings={
                "subnetIds": [
                    private_a.id,
                    private_b.id,
                ],
                "vpcId": main_vpc.id,
            })
        main_workspaces_directory_directory = aws.workspaces.Directory("mainWorkspaces/directoryDirectory",
            directory_id=main_directory.id,
            self_service_permissions={
                "increaseVolumeSize": True,
                "rebuildWorkspace": True,
            })
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] directory_id: The directory identifier for registration in WorkSpaces service.
        :param pulumi.Input[dict] self_service_permissions: The permissions to enable or disable self-service capabilities.
        :param pulumi.Input[list] subnet_ids: The identifiers of the subnets where the directory resides.
        :param pulumi.Input[dict] tags: A map of tags assigned to the WorkSpaces directory.

        The **self_service_permissions** object supports the following:

          * `changeComputeType` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can change the compute type (bundle) for their workspace. Default `false`.
          * `increaseVolumeSize` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can increase the volume size of the drives on their workspace. Default `false`.
          * `rebuildWorkspace` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can rebuild the operating system of a workspace to its original state. Default `false`.
          * `restartWorkspace` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can restart their workspace. Default `true`.
          * `switchRunningMode` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can switch the running mode of their workspace. Default `false`.
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

            if directory_id is None:
                raise TypeError("Missing required property 'directory_id'")
            __props__['directory_id'] = directory_id
            __props__['self_service_permissions'] = self_service_permissions
            __props__['subnet_ids'] = subnet_ids
            __props__['tags'] = tags
            __props__['alias'] = None
            __props__['customer_user_name'] = None
            __props__['directory_name'] = None
            __props__['directory_type'] = None
            __props__['dns_ip_addresses'] = None
            __props__['iam_role_id'] = None
            __props__['ip_group_ids'] = None
            __props__['registration_code'] = None
            __props__['workspace_security_group_id'] = None
        super(Directory, __self__).__init__(
            'aws:workspaces/directory:Directory',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, alias=None, customer_user_name=None, directory_id=None, directory_name=None, directory_type=None, dns_ip_addresses=None, iam_role_id=None, ip_group_ids=None, registration_code=None, self_service_permissions=None, subnet_ids=None, tags=None, workspace_security_group_id=None):
        """
        Get an existing Directory resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] alias: The directory alias.
        :param pulumi.Input[str] customer_user_name: The user name for the service account.
        :param pulumi.Input[str] directory_id: The directory identifier for registration in WorkSpaces service.
        :param pulumi.Input[str] directory_name: The name of the directory.
        :param pulumi.Input[str] directory_type: The directory type.
        :param pulumi.Input[list] dns_ip_addresses: The IP addresses of the DNS servers for the directory.
        :param pulumi.Input[str] iam_role_id: The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
        :param pulumi.Input[list] ip_group_ids: The identifiers of the IP access control groups associated with the directory.
        :param pulumi.Input[str] registration_code: The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
        :param pulumi.Input[dict] self_service_permissions: The permissions to enable or disable self-service capabilities.
        :param pulumi.Input[list] subnet_ids: The identifiers of the subnets where the directory resides.
        :param pulumi.Input[dict] tags: A map of tags assigned to the WorkSpaces directory.
        :param pulumi.Input[str] workspace_security_group_id: The identifier of the security group that is assigned to new WorkSpaces.

        The **self_service_permissions** object supports the following:

          * `changeComputeType` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can change the compute type (bundle) for their workspace. Default `false`.
          * `increaseVolumeSize` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can increase the volume size of the drives on their workspace. Default `false`.
          * `rebuildWorkspace` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can rebuild the operating system of a workspace to its original state. Default `false`.
          * `restartWorkspace` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can restart their workspace. Default `true`.
          * `switchRunningMode` (`pulumi.Input[bool]`) - Whether WorkSpaces directory users can switch the running mode of their workspace. Default `false`.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["alias"] = alias
        __props__["customer_user_name"] = customer_user_name
        __props__["directory_id"] = directory_id
        __props__["directory_name"] = directory_name
        __props__["directory_type"] = directory_type
        __props__["dns_ip_addresses"] = dns_ip_addresses
        __props__["iam_role_id"] = iam_role_id
        __props__["ip_group_ids"] = ip_group_ids
        __props__["registration_code"] = registration_code
        __props__["self_service_permissions"] = self_service_permissions
        __props__["subnet_ids"] = subnet_ids
        __props__["tags"] = tags
        __props__["workspace_security_group_id"] = workspace_security_group_id
        return Directory(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


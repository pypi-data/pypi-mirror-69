# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Mesh(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the service mesh.
    """
    created_date: pulumi.Output[str]
    """
    The creation date of the service mesh.
    """
    last_updated_date: pulumi.Output[str]
    """
    The last update date of the service mesh.
    """
    name: pulumi.Output[str]
    """
    The name to use for the service mesh.
    """
    spec: pulumi.Output[dict]
    """
    The service mesh specification to apply.

      * `egressFilter` (`dict`) - The egress filter rules for the service mesh.
        * `type` (`str`) - The egress filter type. By default, the type is `DROP_ALL`.
          Valid values are `ALLOW_ALL` and `DROP_ALL`.
    """
    tags: pulumi.Output[dict]
    """
    A map of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, name=None, spec=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an AWS App Mesh service mesh resource.

        ## Example Usage

        ### Basic

        ```python
        import pulumi
        import pulumi_aws as aws

        simple = aws.appmesh.Mesh("simple")
        ```

        ### Egress Filter

        ```python
        import pulumi
        import pulumi_aws as aws

        simple = aws.appmesh.Mesh("simple", spec={
            "egressFilter": {
                "type": "ALLOW_ALL",
            },
        })
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name to use for the service mesh.
        :param pulumi.Input[dict] spec: The service mesh specification to apply.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.

        The **spec** object supports the following:

          * `egressFilter` (`pulumi.Input[dict]`) - The egress filter rules for the service mesh.
            * `type` (`pulumi.Input[str]`) - The egress filter type. By default, the type is `DROP_ALL`.
              Valid values are `ALLOW_ALL` and `DROP_ALL`.
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

            __props__['name'] = name
            __props__['spec'] = spec
            __props__['tags'] = tags
            __props__['arn'] = None
            __props__['created_date'] = None
            __props__['last_updated_date'] = None
        super(Mesh, __self__).__init__(
            'aws:appmesh/mesh:Mesh',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, created_date=None, last_updated_date=None, name=None, spec=None, tags=None):
        """
        Get an existing Mesh resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The ARN of the service mesh.
        :param pulumi.Input[str] created_date: The creation date of the service mesh.
        :param pulumi.Input[str] last_updated_date: The last update date of the service mesh.
        :param pulumi.Input[str] name: The name to use for the service mesh.
        :param pulumi.Input[dict] spec: The service mesh specification to apply.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.

        The **spec** object supports the following:

          * `egressFilter` (`pulumi.Input[dict]`) - The egress filter rules for the service mesh.
            * `type` (`pulumi.Input[str]`) - The egress filter type. By default, the type is `DROP_ALL`.
              Valid values are `ALLOW_ALL` and `DROP_ALL`.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["arn"] = arn
        __props__["created_date"] = created_date
        __props__["last_updated_date"] = last_updated_date
        __props__["name"] = name
        __props__["spec"] = spec
        __props__["tags"] = tags
        return Mesh(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


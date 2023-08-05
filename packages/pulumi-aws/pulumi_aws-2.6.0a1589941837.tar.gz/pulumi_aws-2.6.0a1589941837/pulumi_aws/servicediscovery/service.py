# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Service(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the service.
    """
    description: pulumi.Output[str]
    """
    The description of the service.
    """
    dns_config: pulumi.Output[dict]
    """
    A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.

      * `dnsRecords` (`list`) - An array that contains one DnsRecord object for each resource record set.
        * `ttl` (`float`) - The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.
        * `type` (`str`) - The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP

      * `namespace_id` (`str`) - The ID of the namespace to use for DNS configuration.
      * `routingPolicy` (`str`) - The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED
    """
    health_check_config: pulumi.Output[dict]
    """
    A complex type that contains settings for an optional health check. Only for Public DNS namespaces.

      * `failure_threshold` (`float`) - The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.
      * `resource_path` (`str`) - The path that you want Route 53 to request when performing health checks. Route 53 automatically adds the DNS name for the service. If you don't specify a value, the default value is /.
      * `type` (`str`) - The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP
    """
    health_check_custom_config: pulumi.Output[dict]
    """
    A complex type that contains settings for ECS managed health checks.

      * `failure_threshold` (`float`) - The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.
    """
    name: pulumi.Output[str]
    """
    The name of the service.
    """
    namespace_id: pulumi.Output[str]
    """
    The ID of the namespace to use for DNS configuration.
    """
    def __init__(__self__, resource_name, opts=None, description=None, dns_config=None, health_check_config=None, health_check_custom_config=None, name=None, namespace_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Service Discovery Service resource.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        example_vpc = aws.ec2.Vpc("exampleVpc",
            cidr_block="10.0.0.0/16",
            enable_dns_hostnames=True,
            enable_dns_support=True)
        example_private_dns_namespace = aws.servicediscovery.PrivateDnsNamespace("examplePrivateDnsNamespace",
            description="example",
            vpc=example_vpc.id)
        example_service = aws.servicediscovery.Service("exampleService",
            dns_config={
                "dnsRecords": [{
                    "ttl": 10,
                    "type": "A",
                }],
                "namespaceId": example_private_dns_namespace.id,
                "routingPolicy": "MULTIVALUE",
            },
            health_check_custom_config={
                "failureThreshold": 1,
            })
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the service.
        :param pulumi.Input[dict] dns_config: A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
        :param pulumi.Input[dict] health_check_config: A complex type that contains settings for an optional health check. Only for Public DNS namespaces.
        :param pulumi.Input[dict] health_check_custom_config: A complex type that contains settings for ECS managed health checks.
        :param pulumi.Input[str] name: The name of the service.
        :param pulumi.Input[str] namespace_id: The ID of the namespace to use for DNS configuration.

        The **dns_config** object supports the following:

          * `dnsRecords` (`pulumi.Input[list]`) - An array that contains one DnsRecord object for each resource record set.
            * `ttl` (`pulumi.Input[float]`) - The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.
            * `type` (`pulumi.Input[str]`) - The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP

          * `namespace_id` (`pulumi.Input[str]`) - The ID of the namespace to use for DNS configuration.
          * `routingPolicy` (`pulumi.Input[str]`) - The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED

        The **health_check_config** object supports the following:

          * `failure_threshold` (`pulumi.Input[float]`) - The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.
          * `resource_path` (`pulumi.Input[str]`) - The path that you want Route 53 to request when performing health checks. Route 53 automatically adds the DNS name for the service. If you don't specify a value, the default value is /.
          * `type` (`pulumi.Input[str]`) - The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP

        The **health_check_custom_config** object supports the following:

          * `failure_threshold` (`pulumi.Input[float]`) - The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.
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

            __props__['description'] = description
            __props__['dns_config'] = dns_config
            __props__['health_check_config'] = health_check_config
            __props__['health_check_custom_config'] = health_check_custom_config
            __props__['name'] = name
            __props__['namespace_id'] = namespace_id
            __props__['arn'] = None
        super(Service, __self__).__init__(
            'aws:servicediscovery/service:Service',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, description=None, dns_config=None, health_check_config=None, health_check_custom_config=None, name=None, namespace_id=None):
        """
        Get an existing Service resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The ARN of the service.
        :param pulumi.Input[str] description: The description of the service.
        :param pulumi.Input[dict] dns_config: A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
        :param pulumi.Input[dict] health_check_config: A complex type that contains settings for an optional health check. Only for Public DNS namespaces.
        :param pulumi.Input[dict] health_check_custom_config: A complex type that contains settings for ECS managed health checks.
        :param pulumi.Input[str] name: The name of the service.
        :param pulumi.Input[str] namespace_id: The ID of the namespace to use for DNS configuration.

        The **dns_config** object supports the following:

          * `dnsRecords` (`pulumi.Input[list]`) - An array that contains one DnsRecord object for each resource record set.
            * `ttl` (`pulumi.Input[float]`) - The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.
            * `type` (`pulumi.Input[str]`) - The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP

          * `namespace_id` (`pulumi.Input[str]`) - The ID of the namespace to use for DNS configuration.
          * `routingPolicy` (`pulumi.Input[str]`) - The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED

        The **health_check_config** object supports the following:

          * `failure_threshold` (`pulumi.Input[float]`) - The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.
          * `resource_path` (`pulumi.Input[str]`) - The path that you want Route 53 to request when performing health checks. Route 53 automatically adds the DNS name for the service. If you don't specify a value, the default value is /.
          * `type` (`pulumi.Input[str]`) - The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP

        The **health_check_custom_config** object supports the following:

          * `failure_threshold` (`pulumi.Input[float]`) - The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["arn"] = arn
        __props__["description"] = description
        __props__["dns_config"] = dns_config
        __props__["health_check_config"] = health_check_config
        __props__["health_check_custom_config"] = health_check_custom_config
        __props__["name"] = name
        __props__["namespace_id"] = namespace_id
        return Service(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Api(pulumi.CustomResource):
    api_endpoint: pulumi.Output[str]
    """
    The URI of the API, of the form `{api-id}.execute-api.{region}.amazonaws.com`.
    """
    api_key_selection_expression: pulumi.Output[str]
    """
    An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
    Valid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.
    Applicable for WebSocket APIs.
    """
    arn: pulumi.Output[str]
    """
    The ARN of the API.
    """
    cors_configuration: pulumi.Output[dict]
    """
    The cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.

      * `allowCredentials` (`bool`) - Whether credentials are included in the CORS request.
      * `allowHeaders` (`list`) - The set of allowed HTTP headers.
      * `allowMethods` (`list`) - The set of allowed HTTP methods.
      * `allowOrigins` (`list`) - The set of allowed origins.
      * `exposeHeaders` (`list`) - The set of exposed HTTP headers.
      * `maxAge` (`float`) - The number of seconds that the browser should cache preflight request results.
    """
    credentials_arn: pulumi.Output[str]
    """
    Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.
    """
    description: pulumi.Output[str]
    """
    The description of the API.
    """
    execution_arn: pulumi.Output[str]
    """
    The ARN prefix to be used in an [`lambda.Permission`](https://www.terraform.io/docs/providers/aws/r/lambda_permission.html)'s `source_arn` attribute
    or in an [`iam.Policy`](https://www.terraform.io/docs/providers/aws/r/iam_policy.html) to authorize access to the [`@connections` API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html).
    See the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-control-access-iam.html) for details.
    """
    name: pulumi.Output[str]
    """
    The name of the API.
    """
    protocol_type: pulumi.Output[str]
    """
    The API protocol. Valid values: `HTTP`, `WEBSOCKET`.
    """
    route_key: pulumi.Output[str]
    """
    Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.
    """
    route_selection_expression: pulumi.Output[str]
    """
    The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.
    Defaults to `$request.method $request.path`.
    """
    tags: pulumi.Output[dict]
    """
    A map of tags to assign to the API.
    """
    target: pulumi.Output[str]
    """
    Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.
    For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.
    The type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.
    """
    version: pulumi.Output[str]
    """
    A version identifier for the API.
    """
    def __init__(__self__, resource_name, opts=None, api_key_selection_expression=None, cors_configuration=None, credentials_arn=None, description=None, name=None, protocol_type=None, route_key=None, route_selection_expression=None, tags=None, target=None, version=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an Amazon API Gateway Version 2 API.

        > **Note:** Amazon API Gateway Version 2 resources are used for creating and deploying WebSocket and HTTP APIs. To create and deploy REST APIs, use Amazon API Gateway Version 1.

        ## Example Usage

        ### Basic WebSocket API

        ```python
        import pulumi
        import pulumi_aws as aws

        example = aws.apigatewayv2.Api("example",
            protocol_type="WEBSOCKET",
            route_selection_expression="$$request.body.action")
        ```

        ### Basic HTTP API

        ```python
        import pulumi
        import pulumi_aws as aws

        example = aws.apigatewayv2.Api("example", protocol_type="HTTP")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_key_selection_expression: An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
               Valid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.
               Applicable for WebSocket APIs.
        :param pulumi.Input[dict] cors_configuration: The cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.
        :param pulumi.Input[str] credentials_arn: Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.
        :param pulumi.Input[str] description: The description of the API.
        :param pulumi.Input[str] name: The name of the API.
        :param pulumi.Input[str] protocol_type: The API protocol. Valid values: `HTTP`, `WEBSOCKET`.
        :param pulumi.Input[str] route_key: Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.
        :param pulumi.Input[str] route_selection_expression: The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.
               Defaults to `$request.method $request.path`.
        :param pulumi.Input[dict] tags: A map of tags to assign to the API.
        :param pulumi.Input[str] target: Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.
               For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.
               The type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.
        :param pulumi.Input[str] version: A version identifier for the API.

        The **cors_configuration** object supports the following:

          * `allowCredentials` (`pulumi.Input[bool]`) - Whether credentials are included in the CORS request.
          * `allowHeaders` (`pulumi.Input[list]`) - The set of allowed HTTP headers.
          * `allowMethods` (`pulumi.Input[list]`) - The set of allowed HTTP methods.
          * `allowOrigins` (`pulumi.Input[list]`) - The set of allowed origins.
          * `exposeHeaders` (`pulumi.Input[list]`) - The set of exposed HTTP headers.
          * `maxAge` (`pulumi.Input[float]`) - The number of seconds that the browser should cache preflight request results.
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

            __props__['api_key_selection_expression'] = api_key_selection_expression
            __props__['cors_configuration'] = cors_configuration
            __props__['credentials_arn'] = credentials_arn
            __props__['description'] = description
            __props__['name'] = name
            if protocol_type is None:
                raise TypeError("Missing required property 'protocol_type'")
            __props__['protocol_type'] = protocol_type
            __props__['route_key'] = route_key
            __props__['route_selection_expression'] = route_selection_expression
            __props__['tags'] = tags
            __props__['target'] = target
            __props__['version'] = version
            __props__['api_endpoint'] = None
            __props__['arn'] = None
            __props__['execution_arn'] = None
        super(Api, __self__).__init__(
            'aws:apigatewayv2/api:Api',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, api_endpoint=None, api_key_selection_expression=None, arn=None, cors_configuration=None, credentials_arn=None, description=None, execution_arn=None, name=None, protocol_type=None, route_key=None, route_selection_expression=None, tags=None, target=None, version=None):
        """
        Get an existing Api resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_endpoint: The URI of the API, of the form `{api-id}.execute-api.{region}.amazonaws.com`.
        :param pulumi.Input[str] api_key_selection_expression: An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
               Valid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.
               Applicable for WebSocket APIs.
        :param pulumi.Input[str] arn: The ARN of the API.
        :param pulumi.Input[dict] cors_configuration: The cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.
        :param pulumi.Input[str] credentials_arn: Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.
        :param pulumi.Input[str] description: The description of the API.
        :param pulumi.Input[str] execution_arn: The ARN prefix to be used in an [`lambda.Permission`](https://www.terraform.io/docs/providers/aws/r/lambda_permission.html)'s `source_arn` attribute
               or in an [`iam.Policy`](https://www.terraform.io/docs/providers/aws/r/iam_policy.html) to authorize access to the [`@connections` API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html).
               See the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-control-access-iam.html) for details.
        :param pulumi.Input[str] name: The name of the API.
        :param pulumi.Input[str] protocol_type: The API protocol. Valid values: `HTTP`, `WEBSOCKET`.
        :param pulumi.Input[str] route_key: Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.
        :param pulumi.Input[str] route_selection_expression: The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.
               Defaults to `$request.method $request.path`.
        :param pulumi.Input[dict] tags: A map of tags to assign to the API.
        :param pulumi.Input[str] target: Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.
               For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.
               The type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.
        :param pulumi.Input[str] version: A version identifier for the API.

        The **cors_configuration** object supports the following:

          * `allowCredentials` (`pulumi.Input[bool]`) - Whether credentials are included in the CORS request.
          * `allowHeaders` (`pulumi.Input[list]`) - The set of allowed HTTP headers.
          * `allowMethods` (`pulumi.Input[list]`) - The set of allowed HTTP methods.
          * `allowOrigins` (`pulumi.Input[list]`) - The set of allowed origins.
          * `exposeHeaders` (`pulumi.Input[list]`) - The set of exposed HTTP headers.
          * `maxAge` (`pulumi.Input[float]`) - The number of seconds that the browser should cache preflight request results.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["api_endpoint"] = api_endpoint
        __props__["api_key_selection_expression"] = api_key_selection_expression
        __props__["arn"] = arn
        __props__["cors_configuration"] = cors_configuration
        __props__["credentials_arn"] = credentials_arn
        __props__["description"] = description
        __props__["execution_arn"] = execution_arn
        __props__["name"] = name
        __props__["protocol_type"] = protocol_type
        __props__["route_key"] = route_key
        __props__["route_selection_expression"] = route_selection_expression
        __props__["tags"] = tags
        __props__["target"] = target
        __props__["version"] = version
        return Api(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


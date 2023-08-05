# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Deployment(pulumi.CustomResource):
    created_date: pulumi.Output[str]
    """
    The creation date of the deployment
    """
    description: pulumi.Output[str]
    """
    The description of the deployment
    """
    execution_arn: pulumi.Output[str]
    """
    The execution ARN to be used in `lambda_permission` resource's `source_arn`
    when allowing API Gateway to invoke a Lambda function,
    e.g. `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j/prod`
    """
    invoke_url: pulumi.Output[str]
    """
    The URL to invoke the API pointing to the stage,
    e.g. `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/prod`
    """
    rest_api: pulumi.Output[str]
    """
    The ID of the associated REST API
    """
    stage_description: pulumi.Output[str]
    """
    The description of the stage
    """
    stage_name: pulumi.Output[str]
    """
    The name of the stage. If the specified stage already exists, it will be updated to point to the new deployment. If the stage does not exist, a new one will be created and point to this deployment.
    """
    triggers: pulumi.Output[dict]
    """
    A map of arbitrary keys and values that, when changed, will trigger a redeployment.
    """
    variables: pulumi.Output[dict]
    """
    A map that defines variables for the stage
    """
    def __init__(__self__, resource_name, opts=None, description=None, rest_api=None, stage_description=None, stage_name=None, triggers=None, variables=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an API Gateway REST Deployment.

        > **Note:** This resource depends on having at least one `apigateway.Integration` created in the REST API, which 
        itself has other dependencies. To avoid race conditions when all resources are being created together, you need to add 
        implicit resource references via the `triggers` argument or explicit resource references using the 
        [resource `dependsOn` meta-argument](https://www.pulumi.com/docs/intro/concepts/programming-model/#dependson).

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        my_demo_api = aws.apigateway.RestApi("myDemoAPI", description="This is my API for demonstration purposes")
        my_demo_resource = aws.apigateway.Resource("myDemoResource",
            rest_api=my_demo_api.id,
            parent_id=my_demo_api.root_resource_id,
            path_part="test")
        my_demo_method = aws.apigateway.Method("myDemoMethod",
            rest_api=my_demo_api.id,
            resource_id=my_demo_resource.id,
            http_method="GET",
            authorization="NONE")
        my_demo_integration = aws.apigateway.Integration("myDemoIntegration",
            rest_api=my_demo_api.id,
            resource_id=my_demo_resource.id,
            http_method=my_demo_method.http_method,
            type="MOCK")
        my_demo_deployment = aws.apigateway.Deployment("myDemoDeployment",
            rest_api=my_demo_api.id,
            stage_name="test",
            variables={
                "answer": "42",
            })
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the deployment
        :param pulumi.Input[dict] rest_api: The ID of the associated REST API
        :param pulumi.Input[str] stage_description: The description of the stage
        :param pulumi.Input[str] stage_name: The name of the stage. If the specified stage already exists, it will be updated to point to the new deployment. If the stage does not exist, a new one will be created and point to this deployment.
        :param pulumi.Input[dict] triggers: A map of arbitrary keys and values that, when changed, will trigger a redeployment.
        :param pulumi.Input[dict] variables: A map that defines variables for the stage
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
            if rest_api is None:
                raise TypeError("Missing required property 'rest_api'")
            __props__['rest_api'] = rest_api
            __props__['stage_description'] = stage_description
            __props__['stage_name'] = stage_name
            __props__['triggers'] = triggers
            __props__['variables'] = variables
            __props__['created_date'] = None
            __props__['execution_arn'] = None
            __props__['invoke_url'] = None
        super(Deployment, __self__).__init__(
            'aws:apigateway/deployment:Deployment',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, created_date=None, description=None, execution_arn=None, invoke_url=None, rest_api=None, stage_description=None, stage_name=None, triggers=None, variables=None):
        """
        Get an existing Deployment resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] created_date: The creation date of the deployment
        :param pulumi.Input[str] description: The description of the deployment
        :param pulumi.Input[str] execution_arn: The execution ARN to be used in `lambda_permission` resource's `source_arn`
               when allowing API Gateway to invoke a Lambda function,
               e.g. `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j/prod`
        :param pulumi.Input[str] invoke_url: The URL to invoke the API pointing to the stage,
               e.g. `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/prod`
        :param pulumi.Input[dict] rest_api: The ID of the associated REST API
        :param pulumi.Input[str] stage_description: The description of the stage
        :param pulumi.Input[str] stage_name: The name of the stage. If the specified stage already exists, it will be updated to point to the new deployment. If the stage does not exist, a new one will be created and point to this deployment.
        :param pulumi.Input[dict] triggers: A map of arbitrary keys and values that, when changed, will trigger a redeployment.
        :param pulumi.Input[dict] variables: A map that defines variables for the stage
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["created_date"] = created_date
        __props__["description"] = description
        __props__["execution_arn"] = execution_arn
        __props__["invoke_url"] = invoke_url
        __props__["rest_api"] = rest_api
        __props__["stage_description"] = stage_description
        __props__["stage_name"] = stage_name
        __props__["triggers"] = triggers
        __props__["variables"] = variables
        return Deployment(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


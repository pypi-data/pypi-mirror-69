# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class ConfigurationAggregator(pulumi.CustomResource):
    account_aggregation_source: pulumi.Output[dict]
    """
    The account(s) to aggregate config data from as documented below.

      * `accountIds` (`list`) - List of 12-digit account IDs of the account(s) being aggregated.
      * `allRegions` (`bool`) - If true, aggregate existing AWS Config regions and future regions.
      * `regions` (`list`) - List of source regions being aggregated.
    """
    arn: pulumi.Output[str]
    """
    The ARN of the aggregator
    """
    name: pulumi.Output[str]
    """
    The name of the configuration aggregator.
    """
    organization_aggregation_source: pulumi.Output[dict]
    """
    The organization to aggregate config data from as documented below.

      * `allRegions` (`bool`) - If true, aggregate existing AWS Config regions and future regions.
      * `regions` (`list`) - List of source regions being aggregated.
      * `role_arn` (`str`) - ARN of the IAM role used to retrieve AWS Organization details associated with the aggregator account.
    """
    tags: pulumi.Output[dict]
    """
    A map of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, account_aggregation_source=None, name=None, organization_aggregation_source=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an AWS Config Configuration Aggregator

        ## Example Usage

        ### Account Based Aggregation

        ```python
        import pulumi
        import pulumi_aws as aws

        account = aws.cfg.ConfigurationAggregator("account", account_aggregation_source={
            "accountIds": ["123456789012"],
            "regions": ["us-west-2"],
        })
        ```

        ### Organization Based Aggregation

        ```python
        import pulumi
        import pulumi_aws as aws

        organization_role = aws.iam.Role("organizationRole", assume_role_policy=\"\"\"{
          "Version": "2012-10-17",
          "Statement": [
            {
              "Sid": "",
              "Effect": "Allow",
              "Principal": {
                "Service": "config.amazonaws.com"
              },
              "Action": "sts:AssumeRole"
            }
          ]
        }

        \"\"\")
        organization_configuration_aggregator = aws.cfg.ConfigurationAggregator("organizationConfigurationAggregator", organization_aggregation_source={
            "allRegions": True,
            "roleArn": organization_role.arn,
        })
        organization_role_policy_attachment = aws.iam.RolePolicyAttachment("organizationRolePolicyAttachment",
            policy_arn="arn:aws:iam::aws:policy/service-role/AWSConfigRoleForOrganizations",
            role=organization_role.name)
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] account_aggregation_source: The account(s) to aggregate config data from as documented below.
        :param pulumi.Input[str] name: The name of the configuration aggregator.
        :param pulumi.Input[dict] organization_aggregation_source: The organization to aggregate config data from as documented below.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.

        The **account_aggregation_source** object supports the following:

          * `accountIds` (`pulumi.Input[list]`) - List of 12-digit account IDs of the account(s) being aggregated.
          * `allRegions` (`pulumi.Input[bool]`) - If true, aggregate existing AWS Config regions and future regions.
          * `regions` (`pulumi.Input[list]`) - List of source regions being aggregated.

        The **organization_aggregation_source** object supports the following:

          * `allRegions` (`pulumi.Input[bool]`) - If true, aggregate existing AWS Config regions and future regions.
          * `regions` (`pulumi.Input[list]`) - List of source regions being aggregated.
          * `role_arn` (`pulumi.Input[str]`) - ARN of the IAM role used to retrieve AWS Organization details associated with the aggregator account.
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

            __props__['account_aggregation_source'] = account_aggregation_source
            __props__['name'] = name
            __props__['organization_aggregation_source'] = organization_aggregation_source
            __props__['tags'] = tags
            __props__['arn'] = None
        super(ConfigurationAggregator, __self__).__init__(
            'aws:cfg/configurationAggregator:ConfigurationAggregator',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, account_aggregation_source=None, arn=None, name=None, organization_aggregation_source=None, tags=None):
        """
        Get an existing ConfigurationAggregator resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] account_aggregation_source: The account(s) to aggregate config data from as documented below.
        :param pulumi.Input[str] arn: The ARN of the aggregator
        :param pulumi.Input[str] name: The name of the configuration aggregator.
        :param pulumi.Input[dict] organization_aggregation_source: The organization to aggregate config data from as documented below.
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.

        The **account_aggregation_source** object supports the following:

          * `accountIds` (`pulumi.Input[list]`) - List of 12-digit account IDs of the account(s) being aggregated.
          * `allRegions` (`pulumi.Input[bool]`) - If true, aggregate existing AWS Config regions and future regions.
          * `regions` (`pulumi.Input[list]`) - List of source regions being aggregated.

        The **organization_aggregation_source** object supports the following:

          * `allRegions` (`pulumi.Input[bool]`) - If true, aggregate existing AWS Config regions and future regions.
          * `regions` (`pulumi.Input[list]`) - List of source regions being aggregated.
          * `role_arn` (`pulumi.Input[str]`) - ARN of the IAM role used to retrieve AWS Organization details associated with the aggregator account.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["account_aggregation_source"] = account_aggregation_source
        __props__["arn"] = arn
        __props__["name"] = name
        __props__["organization_aggregation_source"] = organization_aggregation_source
        __props__["tags"] = tags
        return ConfigurationAggregator(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


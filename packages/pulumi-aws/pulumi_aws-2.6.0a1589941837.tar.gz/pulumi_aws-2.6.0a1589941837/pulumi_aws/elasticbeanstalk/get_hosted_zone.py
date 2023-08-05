# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetHostedZoneResult:
    """
    A collection of values returned by getHostedZone.
    """
    def __init__(__self__, id=None, region=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if region and not isinstance(region, str):
            raise TypeError("Expected argument 'region' to be a str")
        __self__.region = region
        """
        The region of the hosted zone.
        """
class AwaitableGetHostedZoneResult(GetHostedZoneResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetHostedZoneResult(
            id=self.id,
            region=self.region)

def get_hosted_zone(region=None,opts=None):
    """
    Use this data source to get the ID of an [elastic beanstalk hosted zone](http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region).

    ## Example Usage



    ```python
    import pulumi
    import pulumi_aws as aws

    current = aws.elasticbeanstalk.get_hosted_zone()
    ```



    :param str region: The region you'd like the zone for. By default, fetches the current region.
    """
    __args__ = dict()


    __args__['region'] = region
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('aws:elasticbeanstalk/getHostedZone:getHostedZone', __args__, opts=opts).value

    return AwaitableGetHostedZoneResult(
        id=__ret__.get('id'),
        region=__ret__.get('region'))

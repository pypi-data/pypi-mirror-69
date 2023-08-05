# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Instance(pulumi.CustomResource):
    dns_security: pulumi.Output[str]
    """
    DNS security level. Valid values: `no`, `basic`, `advanced`.
    """
    domain_numbers: pulumi.Output[str]
    """
    Number of domain names bound.
    """
    period: pulumi.Output[float]
    """
    Creating a pre-paid instance, it must be set, the unit is month, please enter an integer multiple of 12 for annually paid products.
    """
    renew_period: pulumi.Output[float]
    """
    Automatic renewal period, the unit is month. When setting RenewalStatus to AutoRenewal, it must be set.
    """
    renewal_status: pulumi.Output[str]
    """
    Automatic renewal status. Valid values: `AutoRenewal`, `ManualRenewal`, default to `ManualRenewal`.
    """
    version_code: pulumi.Output[str]
    """
    Paid package version. Valid values: `version_personal`, `version_enterprise_basic`, `version_enterprise_advanced`.
    """
    version_name: pulumi.Output[str]
    """
    Paid package version name.
    """
    def __init__(__self__, resource_name, opts=None, dns_security=None, domain_numbers=None, period=None, renew_period=None, renewal_status=None, version_code=None, __props__=None, __name__=None, __opts__=None):
        """
        Create an DNS Instance resource.

        > **NOTE:** Available in v1.80.0+.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        this = alicloud.dns.Instance("this",
            dns_security="no",
            domain_numbers="2",
            period=1,
            renew_period=1,
            renewal_status="ManualRenewal",
            version_code="version_personal")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] dns_security: DNS security level. Valid values: `no`, `basic`, `advanced`.
        :param pulumi.Input[str] domain_numbers: Number of domain names bound.
        :param pulumi.Input[float] period: Creating a pre-paid instance, it must be set, the unit is month, please enter an integer multiple of 12 for annually paid products.
        :param pulumi.Input[float] renew_period: Automatic renewal period, the unit is month. When setting RenewalStatus to AutoRenewal, it must be set.
        :param pulumi.Input[str] renewal_status: Automatic renewal status. Valid values: `AutoRenewal`, `ManualRenewal`, default to `ManualRenewal`.
        :param pulumi.Input[str] version_code: Paid package version. Valid values: `version_personal`, `version_enterprise_basic`, `version_enterprise_advanced`.
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

            if dns_security is None:
                raise TypeError("Missing required property 'dns_security'")
            __props__['dns_security'] = dns_security
            if domain_numbers is None:
                raise TypeError("Missing required property 'domain_numbers'")
            __props__['domain_numbers'] = domain_numbers
            __props__['period'] = period
            __props__['renew_period'] = renew_period
            __props__['renewal_status'] = renewal_status
            if version_code is None:
                raise TypeError("Missing required property 'version_code'")
            __props__['version_code'] = version_code
            __props__['version_name'] = None
        super(Instance, __self__).__init__(
            'alicloud:dns/instance:Instance',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, dns_security=None, domain_numbers=None, period=None, renew_period=None, renewal_status=None, version_code=None, version_name=None):
        """
        Get an existing Instance resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] dns_security: DNS security level. Valid values: `no`, `basic`, `advanced`.
        :param pulumi.Input[str] domain_numbers: Number of domain names bound.
        :param pulumi.Input[float] period: Creating a pre-paid instance, it must be set, the unit is month, please enter an integer multiple of 12 for annually paid products.
        :param pulumi.Input[float] renew_period: Automatic renewal period, the unit is month. When setting RenewalStatus to AutoRenewal, it must be set.
        :param pulumi.Input[str] renewal_status: Automatic renewal status. Valid values: `AutoRenewal`, `ManualRenewal`, default to `ManualRenewal`.
        :param pulumi.Input[str] version_code: Paid package version. Valid values: `version_personal`, `version_enterprise_basic`, `version_enterprise_advanced`.
        :param pulumi.Input[str] version_name: Paid package version name.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["dns_security"] = dns_security
        __props__["domain_numbers"] = domain_numbers
        __props__["period"] = period
        __props__["renew_period"] = renew_period
        __props__["renewal_status"] = renewal_status
        __props__["version_code"] = version_code
        __props__["version_name"] = version_name
        return Instance(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


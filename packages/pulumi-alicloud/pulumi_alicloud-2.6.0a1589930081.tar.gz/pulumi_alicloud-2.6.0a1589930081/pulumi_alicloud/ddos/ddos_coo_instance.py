# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class DdosCooInstance(pulumi.CustomResource):
    bandwidth: pulumi.Output[str]
    """
    Elastic defend bandwidth of the instance. This value must be larger than the base defend bandwidth. Valid values: 30, 60, 100, 300, 400, 500, 600. The unit is Gbps. Only support upgrade.
    """
    base_bandwidth: pulumi.Output[str]
    """
    Base defend bandwidth of the instance. Valid values: 30, 60, 100, 300, 400, 500, 600. The unit is Gbps. Only support upgrade.
    """
    domain_count: pulumi.Output[str]
    """
    Domain retransmission rule count of the instance. At least 50. Increase 5 per step, such as 55, 60, 65. Only support upgrade.
    """
    name: pulumi.Output[str]
    """
    Name of the instance. This name can have a string of 1 to 63 characters.
    """
    period: pulumi.Output[float]
    """
    The duration that you will buy Ddoscoo instance (in month). Valid values: [1~9], 12, 24, 36. Default to 1. At present, the provider does not support modify "period".
    """
    port_count: pulumi.Output[str]
    """
    Port retransmission rule count of the instance. At least 50. Increase 5 per step, such as 55, 60, 65. Only support upgrade.
    """
    service_bandwidth: pulumi.Output[str]
    """
    Business bandwidth of the instance. At leaset 100. Increased 100 per step, such as 100, 200, 300. The unit is Mbps. Only support upgrade.
    """
    def __init__(__self__, resource_name, opts=None, bandwidth=None, base_bandwidth=None, domain_count=None, name=None, period=None, port_count=None, service_bandwidth=None, __props__=None, __name__=None, __opts__=None):
        """
        BGP-Line Anti-DDoS instance resource. "Ddoscoo" is the short term of this product. See [What is Anti-DDoS Pro](https://www.alibabacloud.com/help/doc-detail/69319.htm).

        > **NOTE:** The product region only support cn-hangzhou.

        > **NOTE:** The endpoint of bssopenapi used only support "business.aliyuncs.com" at present.

        > **NOTE:** Available in 1.37.0+ .

        ## Example Usage



        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        new_instance = alicloud.ddos.DdosCooInstance("newInstance",
            bandwidth="30",
            base_bandwidth="30",
            domain_count="50",
            period="1",
            port_count="50",
            service_bandwidth="100")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] bandwidth: Elastic defend bandwidth of the instance. This value must be larger than the base defend bandwidth. Valid values: 30, 60, 100, 300, 400, 500, 600. The unit is Gbps. Only support upgrade.
        :param pulumi.Input[str] base_bandwidth: Base defend bandwidth of the instance. Valid values: 30, 60, 100, 300, 400, 500, 600. The unit is Gbps. Only support upgrade.
        :param pulumi.Input[str] domain_count: Domain retransmission rule count of the instance. At least 50. Increase 5 per step, such as 55, 60, 65. Only support upgrade.
        :param pulumi.Input[str] name: Name of the instance. This name can have a string of 1 to 63 characters.
        :param pulumi.Input[float] period: The duration that you will buy Ddoscoo instance (in month). Valid values: [1~9], 12, 24, 36. Default to 1. At present, the provider does not support modify "period".
        :param pulumi.Input[str] port_count: Port retransmission rule count of the instance. At least 50. Increase 5 per step, such as 55, 60, 65. Only support upgrade.
        :param pulumi.Input[str] service_bandwidth: Business bandwidth of the instance. At leaset 100. Increased 100 per step, such as 100, 200, 300. The unit is Mbps. Only support upgrade.
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

            if bandwidth is None:
                raise TypeError("Missing required property 'bandwidth'")
            __props__['bandwidth'] = bandwidth
            if base_bandwidth is None:
                raise TypeError("Missing required property 'base_bandwidth'")
            __props__['base_bandwidth'] = base_bandwidth
            if domain_count is None:
                raise TypeError("Missing required property 'domain_count'")
            __props__['domain_count'] = domain_count
            __props__['name'] = name
            __props__['period'] = period
            if port_count is None:
                raise TypeError("Missing required property 'port_count'")
            __props__['port_count'] = port_count
            if service_bandwidth is None:
                raise TypeError("Missing required property 'service_bandwidth'")
            __props__['service_bandwidth'] = service_bandwidth
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="alicloud:dns/ddosCooInstance:DdosCooInstance")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(DdosCooInstance, __self__).__init__(
            'alicloud:ddos/ddosCooInstance:DdosCooInstance',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, bandwidth=None, base_bandwidth=None, domain_count=None, name=None, period=None, port_count=None, service_bandwidth=None):
        """
        Get an existing DdosCooInstance resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] bandwidth: Elastic defend bandwidth of the instance. This value must be larger than the base defend bandwidth. Valid values: 30, 60, 100, 300, 400, 500, 600. The unit is Gbps. Only support upgrade.
        :param pulumi.Input[str] base_bandwidth: Base defend bandwidth of the instance. Valid values: 30, 60, 100, 300, 400, 500, 600. The unit is Gbps. Only support upgrade.
        :param pulumi.Input[str] domain_count: Domain retransmission rule count of the instance. At least 50. Increase 5 per step, such as 55, 60, 65. Only support upgrade.
        :param pulumi.Input[str] name: Name of the instance. This name can have a string of 1 to 63 characters.
        :param pulumi.Input[float] period: The duration that you will buy Ddoscoo instance (in month). Valid values: [1~9], 12, 24, 36. Default to 1. At present, the provider does not support modify "period".
        :param pulumi.Input[str] port_count: Port retransmission rule count of the instance. At least 50. Increase 5 per step, such as 55, 60, 65. Only support upgrade.
        :param pulumi.Input[str] service_bandwidth: Business bandwidth of the instance. At leaset 100. Increased 100 per step, such as 100, 200, 300. The unit is Mbps. Only support upgrade.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["bandwidth"] = bandwidth
        __props__["base_bandwidth"] = base_bandwidth
        __props__["domain_count"] = domain_count
        __props__["name"] = name
        __props__["period"] = period
        __props__["port_count"] = port_count
        __props__["service_bandwidth"] = service_bandwidth
        return DdosCooInstance(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


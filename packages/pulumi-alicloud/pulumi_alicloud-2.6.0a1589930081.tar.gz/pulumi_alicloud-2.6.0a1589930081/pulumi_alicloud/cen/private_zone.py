# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class PrivateZone(pulumi.CustomResource):
    access_region_id: pulumi.Output[str]
    """
    The access region. The access region is the region of the cloud resource that accesses the PrivateZone service through CEN.
    """
    cen_id: pulumi.Output[str]
    """
    The ID of the CEN instance.
    """
    host_region_id: pulumi.Output[str]
    """
    The service region. The service region is the target region of the PrivateZone service to be accessed through CEN. 
    """
    host_vpc_id: pulumi.Output[str]
    """
    The VPC that belongs to the service region.
    """
    status: pulumi.Output[str]
    """
    The status of the PrivateZone service. Valid values: ["Creating", "Active", "Deleting"].
    """
    def __init__(__self__, resource_name, opts=None, access_region_id=None, cen_id=None, host_region_id=None, host_vpc_id=None, __props__=None, __name__=None, __opts__=None):
        """
        This topic describes how to configure PrivateZone access. 
        PrivateZone is a VPC-based resolution and management service for private domain names. 
        After you set a PrivateZone access, the Cloud Connect Network (CCN) and Virtual Border Router (VBR) attached to a CEN instance can access the PrivateZone service through CEN.

        For information about CEN Private Zone and how to use it, see [Manage CEN Private Zone](https://www.alibabacloud.com/help/en/doc-detail/106693.htm).

        > **NOTE:** Available in 1.83.0+

        ## Example Usage



        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        default_instance = alicloud.cen.Instance("defaultInstance")
        default_network = alicloud.vpc.Network("defaultNetwork", cidr_block="172.16.0.0/12")
        default_instance_attachment = alicloud.cen.InstanceAttachment("defaultInstanceAttachment",
            child_instance_id=default_network.id,
            child_instance_region_id="cn-hangzhou",
            instance_id=default_instance.id)
        default_private_zone = alicloud.cen.PrivateZone("defaultPrivateZone",
            access_region_id="cn-hangzhou",
            cen_id=default_instance.id,
            host_region_id="cn-hangzhou",
            host_vpc_id=default_network.id)
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] access_region_id: The access region. The access region is the region of the cloud resource that accesses the PrivateZone service through CEN.
        :param pulumi.Input[str] cen_id: The ID of the CEN instance.
        :param pulumi.Input[str] host_region_id: The service region. The service region is the target region of the PrivateZone service to be accessed through CEN. 
        :param pulumi.Input[str] host_vpc_id: The VPC that belongs to the service region.
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

            if access_region_id is None:
                raise TypeError("Missing required property 'access_region_id'")
            __props__['access_region_id'] = access_region_id
            if cen_id is None:
                raise TypeError("Missing required property 'cen_id'")
            __props__['cen_id'] = cen_id
            if host_region_id is None:
                raise TypeError("Missing required property 'host_region_id'")
            __props__['host_region_id'] = host_region_id
            if host_vpc_id is None:
                raise TypeError("Missing required property 'host_vpc_id'")
            __props__['host_vpc_id'] = host_vpc_id
            __props__['status'] = None
        super(PrivateZone, __self__).__init__(
            'alicloud:cen/privateZone:PrivateZone',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, access_region_id=None, cen_id=None, host_region_id=None, host_vpc_id=None, status=None):
        """
        Get an existing PrivateZone resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] access_region_id: The access region. The access region is the region of the cloud resource that accesses the PrivateZone service through CEN.
        :param pulumi.Input[str] cen_id: The ID of the CEN instance.
        :param pulumi.Input[str] host_region_id: The service region. The service region is the target region of the PrivateZone service to be accessed through CEN. 
        :param pulumi.Input[str] host_vpc_id: The VPC that belongs to the service region.
        :param pulumi.Input[str] status: The status of the PrivateZone service. Valid values: ["Creating", "Active", "Deleting"].
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["access_region_id"] = access_region_id
        __props__["cen_id"] = cen_id
        __props__["host_region_id"] = host_region_id
        __props__["host_vpc_id"] = host_vpc_id
        __props__["status"] = status
        return PrivateZone(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


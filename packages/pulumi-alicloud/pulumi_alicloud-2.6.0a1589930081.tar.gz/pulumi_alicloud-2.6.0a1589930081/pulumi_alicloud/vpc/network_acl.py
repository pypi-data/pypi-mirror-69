# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class NetworkAcl(pulumi.CustomResource):
    description: pulumi.Output[str]
    """
    The description of the network acl instance.
    """
    name: pulumi.Output[str]
    """
    The name of the network acl.
    """
    vpc_id: pulumi.Output[str]
    """
    The vpc_id of the network acl, the field can't be changed.
    """
    def __init__(__self__, resource_name, opts=None, description=None, name=None, vpc_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a network acl resource to add network acls.

        > **NOTE:** Available in 1.43.0+. Currently, the resource are only available in Hongkong(cn-hongkong), India(ap-south-1), and Indonesia(ap-southeast-1) regions.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        default_network = alicloud.vpc.Network("defaultNetwork", cidr_block="172.16.0.0/12")
        default_network_acl = alicloud.vpc.NetworkAcl("defaultNetworkAcl",
            description="network_acl",
            vpc_id=default_network.id)
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the network acl instance.
        :param pulumi.Input[str] name: The name of the network acl.
        :param pulumi.Input[str] vpc_id: The vpc_id of the network acl, the field can't be changed.
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
            __props__['name'] = name
            if vpc_id is None:
                raise TypeError("Missing required property 'vpc_id'")
            __props__['vpc_id'] = vpc_id
        super(NetworkAcl, __self__).__init__(
            'alicloud:vpc/networkAcl:NetworkAcl',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, description=None, name=None, vpc_id=None):
        """
        Get an existing NetworkAcl resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the network acl instance.
        :param pulumi.Input[str] name: The name of the network acl.
        :param pulumi.Input[str] vpc_id: The vpc_id of the network acl, the field can't be changed.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["description"] = description
        __props__["name"] = name
        __props__["vpc_id"] = vpc_id
        return NetworkAcl(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


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
    description: pulumi.Output[str]
    """
    Description of the DRDS instance, This description can have a string of 2 to 256 characters.
    """
    instance_charge_type: pulumi.Output[str]
    """
    Valid values are `PrePaid`, `PostPaid`, Default to `PostPaid`.
    """
    instance_series: pulumi.Output[str]
    """
    User-defined DRDS instance node spec. Value range:
    - `drds.sn1.4c8g` for DRDS instance Starter version;
    - `drds.sn1.8c16g` for DRDS instance Standard edition;
    - `drds.sn1.16c32g` for DRDS instance Enterprise Edition;
    - `drds.sn1.32c64g` for DRDS instance Extreme Edition;
    """
    specification: pulumi.Output[str]
    """
    User-defined DRDS instance specification. Value range:
    - `drds.sn1.4c8g` for DRDS instance Starter version;
    - value range : `drds.sn1.4c8g.8c16g`, `drds.sn1.4c8g.16c32g`, `drds.sn1.4c8g.32c64g`, `drds.sn1.4c8g.64c128g`
    - `drds.sn1.8c16g` for DRDS instance Standard edition;
    - value range : `drds.sn1.8c16g.16c32g`, `drds.sn1.8c16g.32c64g`, `drds.sn1.8c16g.64c128g`
    - `drds.sn1.16c32g` for DRDS instance Enterprise Edition;
    - value range : `drds.sn1.16c32g.32c64g`, `drds.sn1.16c32g.64c128g`
    - `drds.sn1.32c64g` for DRDS instance Extreme Edition;
    - value range : `drds.sn1.32c64g.128c256g`
    """
    vswitch_id: pulumi.Output[str]
    """
    The VSwitch ID to launch in.
    """
    zone_id: pulumi.Output[str]
    """
    The Zone to launch the DRDS instance.
    """
    def __init__(__self__, resource_name, opts=None, description=None, instance_charge_type=None, instance_series=None, specification=None, vswitch_id=None, zone_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Distributed Relational Database Service (DRDS) is a lightweight (stateless), flexible, stable, and efficient middleware product independently developed by Alibaba Group to resolve scalability issues with single-host relational databases.
        With its compatibility with MySQL protocols and syntaxes, DRDS enables database/table sharding, smooth scaling, configuration upgrade/downgrade,
        transparent read/write splitting, and distributed transactions, providing O&M capabilities for distributed databases throughout their entire lifecycle.

        For information about DRDS and how to use it, see [What is DRDS](https://www.alibabacloud.com/help/doc-detail/29659.htm).

        > **NOTE:** At present, DRDS instance only can be supported in the regions: cn-shenzhen, cn-beijing, cn-hangzhou, cn-hongkong, cn-qingdao.

        > **NOTE:** Currently, this resource only support `Domestic Site Account`.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        default = alicloud.drds.Instance("default",
            description="drds instance",
            instance_charge_type="PostPaid",
            instance_series="drds.sn1.4c8g",
            specification="drds.sn1.4c8g.8C16G",
            vswitch_id="vsw-bp1jlu3swk8rq2yoi40ey",
            zone_id="cn-hangzhou-e")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: Description of the DRDS instance, This description can have a string of 2 to 256 characters.
        :param pulumi.Input[str] instance_charge_type: Valid values are `PrePaid`, `PostPaid`, Default to `PostPaid`.
        :param pulumi.Input[str] instance_series: User-defined DRDS instance node spec. Value range:
               - `drds.sn1.4c8g` for DRDS instance Starter version;
               - `drds.sn1.8c16g` for DRDS instance Standard edition;
               - `drds.sn1.16c32g` for DRDS instance Enterprise Edition;
               - `drds.sn1.32c64g` for DRDS instance Extreme Edition;
        :param pulumi.Input[str] specification: User-defined DRDS instance specification. Value range:
               - `drds.sn1.4c8g` for DRDS instance Starter version;
               - value range : `drds.sn1.4c8g.8c16g`, `drds.sn1.4c8g.16c32g`, `drds.sn1.4c8g.32c64g`, `drds.sn1.4c8g.64c128g`
               - `drds.sn1.8c16g` for DRDS instance Standard edition;
               - value range : `drds.sn1.8c16g.16c32g`, `drds.sn1.8c16g.32c64g`, `drds.sn1.8c16g.64c128g`
               - `drds.sn1.16c32g` for DRDS instance Enterprise Edition;
               - value range : `drds.sn1.16c32g.32c64g`, `drds.sn1.16c32g.64c128g`
               - `drds.sn1.32c64g` for DRDS instance Extreme Edition;
               - value range : `drds.sn1.32c64g.128c256g`
        :param pulumi.Input[str] vswitch_id: The VSwitch ID to launch in.
        :param pulumi.Input[str] zone_id: The Zone to launch the DRDS instance.
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

            if description is None:
                raise TypeError("Missing required property 'description'")
            __props__['description'] = description
            __props__['instance_charge_type'] = instance_charge_type
            if instance_series is None:
                raise TypeError("Missing required property 'instance_series'")
            __props__['instance_series'] = instance_series
            if specification is None:
                raise TypeError("Missing required property 'specification'")
            __props__['specification'] = specification
            __props__['vswitch_id'] = vswitch_id
            __props__['zone_id'] = zone_id
        super(Instance, __self__).__init__(
            'alicloud:drds/instance:Instance',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, description=None, instance_charge_type=None, instance_series=None, specification=None, vswitch_id=None, zone_id=None):
        """
        Get an existing Instance resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: Description of the DRDS instance, This description can have a string of 2 to 256 characters.
        :param pulumi.Input[str] instance_charge_type: Valid values are `PrePaid`, `PostPaid`, Default to `PostPaid`.
        :param pulumi.Input[str] instance_series: User-defined DRDS instance node spec. Value range:
               - `drds.sn1.4c8g` for DRDS instance Starter version;
               - `drds.sn1.8c16g` for DRDS instance Standard edition;
               - `drds.sn1.16c32g` for DRDS instance Enterprise Edition;
               - `drds.sn1.32c64g` for DRDS instance Extreme Edition;
        :param pulumi.Input[str] specification: User-defined DRDS instance specification. Value range:
               - `drds.sn1.4c8g` for DRDS instance Starter version;
               - value range : `drds.sn1.4c8g.8c16g`, `drds.sn1.4c8g.16c32g`, `drds.sn1.4c8g.32c64g`, `drds.sn1.4c8g.64c128g`
               - `drds.sn1.8c16g` for DRDS instance Standard edition;
               - value range : `drds.sn1.8c16g.16c32g`, `drds.sn1.8c16g.32c64g`, `drds.sn1.8c16g.64c128g`
               - `drds.sn1.16c32g` for DRDS instance Enterprise Edition;
               - value range : `drds.sn1.16c32g.32c64g`, `drds.sn1.16c32g.64c128g`
               - `drds.sn1.32c64g` for DRDS instance Extreme Edition;
               - value range : `drds.sn1.32c64g.128c256g`
        :param pulumi.Input[str] vswitch_id: The VSwitch ID to launch in.
        :param pulumi.Input[str] zone_id: The Zone to launch the DRDS instance.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["description"] = description
        __props__["instance_charge_type"] = instance_charge_type
        __props__["instance_series"] = instance_series
        __props__["specification"] = specification
        __props__["vswitch_id"] = vswitch_id
        __props__["zone_id"] = zone_id
        return Instance(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


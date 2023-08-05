# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Swarm(pulumi.CustomResource):
    agent_version: pulumi.Output[str]
    """
    The nodes agent version.
    """
    cidr_block: pulumi.Output[str]
    """
    The CIDR block for the Container. It can not be same as the CIDR used by the VPC.
    Valid value:
    - 192.168.0.0/16
    - 172.19-30.0.0/16
    - 10.0.0.0/16
    """
    disk_category: pulumi.Output[str]
    """
    The data disk category of ECS instance node. Its valid value are `cloud`, `cloud_ssd`, `cloud_essd`, `ephemeral_essd` and `cloud_efficiency`. Default to `cloud_efficiency`.
    """
    disk_size: pulumi.Output[float]
    """
    The data disk size of ECS instance node. Its valid value is 20~32768 GB. Default to 20.
    """
    image_id: pulumi.Output[str]
    """
    The image ID of ECS instance node used. Default to System automate allocated.
    """
    instance_type: pulumi.Output[str]
    """
    The type of ECS instance node.
    """
    is_outdated: pulumi.Output[bool]
    """
    Whether to use outdated instance type. Default to false.
    """
    name: pulumi.Output[str]
    """
    The container cluster's name. It is the only in one Alicloud account.
    """
    name_prefix: pulumi.Output[str]
    need_slb: pulumi.Output[bool]
    """
    Whether to create the default simple routing Server Load Balancer instance for the cluster. The default value is true.
    """
    node_number: pulumi.Output[float]
    """
    The ECS node number of the container cluster. Its value choices are 1~50, and default to 1.
    """
    nodes: pulumi.Output[list]
    """
    List of cluster nodes. It contains several attributes to `Block Nodes`.

      * `eip` (`str`) - The Elastic IP address of node.
      * `id` (`str`) - ID of the node.
      * `name` (`str`) - The container cluster's name. It is the only in one Alicloud account.
      * `private_ip` (`str`) - The private IP address of node.
      * `status` (`str`) - The node current status. It is different with instance status.
    """
    password: pulumi.Output[str]
    """
    The password of ECS instance node.
    """
    release_eip: pulumi.Output[bool]
    """
    Whether to release EIP after creating swarm cluster successfully. Default to false.
    """
    security_group_id: pulumi.Output[str]
    """
    The ID of security group where the current cluster worker node is located.
    """
    size: pulumi.Output[float]
    """
    Field 'size' has been deprecated from provider version 1.9.1. New field 'node_number' replaces it.
    """
    slb_id: pulumi.Output[str]
    """
    The ID of load balancer where the current cluster worker node is located.
    """
    vpc_id: pulumi.Output[str]
    """
    The ID of VPC where the current cluster is located.
    """
    vswitch_id: pulumi.Output[str]
    """
    The password of ECS instance node. If it is not specified, the container cluster's network mode will be `Classic`.
    """
    def __init__(__self__, resource_name, opts=None, cidr_block=None, disk_category=None, disk_size=None, image_id=None, instance_type=None, is_outdated=None, name=None, name_prefix=None, need_slb=None, node_number=None, password=None, release_eip=None, size=None, vswitch_id=None, __props__=None, __name__=None, __opts__=None):
        """
        > **DEPRECATED:** This resource manages swarm cluster, which is being deprecated and will be replaced by Kubernetes cluster.

        This resource will help you to manager a Swarm Cluster.

        > **NOTE:** Swarm cluster only supports VPC network and you can specify a VPC network by filed `vswitch_id`.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        my_cluster = alicloud.cs.Swarm("myCluster",
            cidr_block="172.18.0.0/24",
            disk_category="cloud_efficiency",
            disk_size=20,
            image_id=var["image_id"],
            instance_type="ecs.n4.small",
            node_number=2,
            password="Yourpassword1234",
            vswitch_id=var["vswitch_id"])
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cidr_block: The CIDR block for the Container. It can not be same as the CIDR used by the VPC.
               Valid value:
               - 192.168.0.0/16
               - 172.19-30.0.0/16
               - 10.0.0.0/16
        :param pulumi.Input[str] disk_category: The data disk category of ECS instance node. Its valid value are `cloud`, `cloud_ssd`, `cloud_essd`, `ephemeral_essd` and `cloud_efficiency`. Default to `cloud_efficiency`.
        :param pulumi.Input[float] disk_size: The data disk size of ECS instance node. Its valid value is 20~32768 GB. Default to 20.
        :param pulumi.Input[str] image_id: The image ID of ECS instance node used. Default to System automate allocated.
        :param pulumi.Input[str] instance_type: The type of ECS instance node.
        :param pulumi.Input[bool] is_outdated: Whether to use outdated instance type. Default to false.
        :param pulumi.Input[str] name: The container cluster's name. It is the only in one Alicloud account.
        :param pulumi.Input[bool] need_slb: Whether to create the default simple routing Server Load Balancer instance for the cluster. The default value is true.
        :param pulumi.Input[float] node_number: The ECS node number of the container cluster. Its value choices are 1~50, and default to 1.
        :param pulumi.Input[str] password: The password of ECS instance node.
        :param pulumi.Input[bool] release_eip: Whether to release EIP after creating swarm cluster successfully. Default to false.
        :param pulumi.Input[float] size: Field 'size' has been deprecated from provider version 1.9.1. New field 'node_number' replaces it.
        :param pulumi.Input[str] vswitch_id: The password of ECS instance node. If it is not specified, the container cluster's network mode will be `Classic`.
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

            if cidr_block is None:
                raise TypeError("Missing required property 'cidr_block'")
            __props__['cidr_block'] = cidr_block
            __props__['disk_category'] = disk_category
            __props__['disk_size'] = disk_size
            __props__['image_id'] = image_id
            if instance_type is None:
                raise TypeError("Missing required property 'instance_type'")
            __props__['instance_type'] = instance_type
            __props__['is_outdated'] = is_outdated
            __props__['name'] = name
            __props__['name_prefix'] = name_prefix
            __props__['need_slb'] = need_slb
            __props__['node_number'] = node_number
            if password is None:
                raise TypeError("Missing required property 'password'")
            __props__['password'] = password
            __props__['release_eip'] = release_eip
            __props__['size'] = size
            if vswitch_id is None:
                raise TypeError("Missing required property 'vswitch_id'")
            __props__['vswitch_id'] = vswitch_id
            __props__['agent_version'] = None
            __props__['nodes'] = None
            __props__['security_group_id'] = None
            __props__['slb_id'] = None
            __props__['vpc_id'] = None
        super(Swarm, __self__).__init__(
            'alicloud:cs/swarm:Swarm',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, agent_version=None, cidr_block=None, disk_category=None, disk_size=None, image_id=None, instance_type=None, is_outdated=None, name=None, name_prefix=None, need_slb=None, node_number=None, nodes=None, password=None, release_eip=None, security_group_id=None, size=None, slb_id=None, vpc_id=None, vswitch_id=None):
        """
        Get an existing Swarm resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] agent_version: The nodes agent version.
        :param pulumi.Input[str] cidr_block: The CIDR block for the Container. It can not be same as the CIDR used by the VPC.
               Valid value:
               - 192.168.0.0/16
               - 172.19-30.0.0/16
               - 10.0.0.0/16
        :param pulumi.Input[str] disk_category: The data disk category of ECS instance node. Its valid value are `cloud`, `cloud_ssd`, `cloud_essd`, `ephemeral_essd` and `cloud_efficiency`. Default to `cloud_efficiency`.
        :param pulumi.Input[float] disk_size: The data disk size of ECS instance node. Its valid value is 20~32768 GB. Default to 20.
        :param pulumi.Input[str] image_id: The image ID of ECS instance node used. Default to System automate allocated.
        :param pulumi.Input[str] instance_type: The type of ECS instance node.
        :param pulumi.Input[bool] is_outdated: Whether to use outdated instance type. Default to false.
        :param pulumi.Input[str] name: The container cluster's name. It is the only in one Alicloud account.
        :param pulumi.Input[bool] need_slb: Whether to create the default simple routing Server Load Balancer instance for the cluster. The default value is true.
        :param pulumi.Input[float] node_number: The ECS node number of the container cluster. Its value choices are 1~50, and default to 1.
        :param pulumi.Input[list] nodes: List of cluster nodes. It contains several attributes to `Block Nodes`.
        :param pulumi.Input[str] password: The password of ECS instance node.
        :param pulumi.Input[bool] release_eip: Whether to release EIP after creating swarm cluster successfully. Default to false.
        :param pulumi.Input[str] security_group_id: The ID of security group where the current cluster worker node is located.
        :param pulumi.Input[float] size: Field 'size' has been deprecated from provider version 1.9.1. New field 'node_number' replaces it.
        :param pulumi.Input[str] slb_id: The ID of load balancer where the current cluster worker node is located.
        :param pulumi.Input[str] vpc_id: The ID of VPC where the current cluster is located.
        :param pulumi.Input[str] vswitch_id: The password of ECS instance node. If it is not specified, the container cluster's network mode will be `Classic`.

        The **nodes** object supports the following:

          * `eip` (`pulumi.Input[str]`) - The Elastic IP address of node.
          * `id` (`pulumi.Input[str]`) - ID of the node.
          * `name` (`pulumi.Input[str]`) - The container cluster's name. It is the only in one Alicloud account.
          * `private_ip` (`pulumi.Input[str]`) - The private IP address of node.
          * `status` (`pulumi.Input[str]`) - The node current status. It is different with instance status.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["agent_version"] = agent_version
        __props__["cidr_block"] = cidr_block
        __props__["disk_category"] = disk_category
        __props__["disk_size"] = disk_size
        __props__["image_id"] = image_id
        __props__["instance_type"] = instance_type
        __props__["is_outdated"] = is_outdated
        __props__["name"] = name
        __props__["name_prefix"] = name_prefix
        __props__["need_slb"] = need_slb
        __props__["node_number"] = node_number
        __props__["nodes"] = nodes
        __props__["password"] = password
        __props__["release_eip"] = release_eip
        __props__["security_group_id"] = security_group_id
        __props__["size"] = size
        __props__["slb_id"] = slb_id
        __props__["vpc_id"] = vpc_id
        __props__["vswitch_id"] = vswitch_id
        return Swarm(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


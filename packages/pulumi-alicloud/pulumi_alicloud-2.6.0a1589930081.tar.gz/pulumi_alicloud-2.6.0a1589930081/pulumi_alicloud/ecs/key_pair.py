# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class KeyPair(pulumi.CustomResource):
    finger_print: pulumi.Output[str]
    key_file: pulumi.Output[str]
    """
    The name of file to save your new key pair's private key. Strongly suggest you to specified it when you creating key pair, otherwise, you wouldn't get its private key ever.
    """
    key_name: pulumi.Output[str]
    """
    The key pair's name. It is the only in one Alicloud account.
    """
    key_name_prefix: pulumi.Output[str]
    public_key: pulumi.Output[str]
    """
    You can import an existing public key and using Alicloud key pair to manage it.
    """
    resource_group_id: pulumi.Output[str]
    """
    The Id of resource group which the key pair belongs.
    """
    tags: pulumi.Output[dict]
    def __init__(__self__, resource_name, opts=None, key_file=None, key_name=None, key_name_prefix=None, public_key=None, resource_group_id=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a KeyPair resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] key_file: The name of file to save your new key pair's private key. Strongly suggest you to specified it when you creating key pair, otherwise, you wouldn't get its private key ever.
        :param pulumi.Input[str] key_name: The key pair's name. It is the only in one Alicloud account.
        :param pulumi.Input[str] public_key: You can import an existing public key and using Alicloud key pair to manage it.
        :param pulumi.Input[str] resource_group_id: The Id of resource group which the key pair belongs.
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

            __props__['key_file'] = key_file
            __props__['key_name'] = key_name
            __props__['key_name_prefix'] = key_name_prefix
            __props__['public_key'] = public_key
            __props__['resource_group_id'] = resource_group_id
            __props__['tags'] = tags
            __props__['finger_print'] = None
        super(KeyPair, __self__).__init__(
            'alicloud:ecs/keyPair:KeyPair',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, finger_print=None, key_file=None, key_name=None, key_name_prefix=None, public_key=None, resource_group_id=None, tags=None):
        """
        Get an existing KeyPair resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] key_file: The name of file to save your new key pair's private key. Strongly suggest you to specified it when you creating key pair, otherwise, you wouldn't get its private key ever.
        :param pulumi.Input[str] key_name: The key pair's name. It is the only in one Alicloud account.
        :param pulumi.Input[str] public_key: You can import an existing public key and using Alicloud key pair to manage it.
        :param pulumi.Input[str] resource_group_id: The Id of resource group which the key pair belongs.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["finger_print"] = finger_print
        __props__["key_file"] = key_file
        __props__["key_name"] = key_name
        __props__["key_name_prefix"] = key_name_prefix
        __props__["public_key"] = public_key
        __props__["resource_group_id"] = resource_group_id
        __props__["tags"] = tags
        return KeyPair(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


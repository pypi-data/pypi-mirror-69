# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class TopicSubscription(pulumi.CustomResource):
    endpoint: pulumi.Output[str]
    """
    The endpoint has three format. Available values format:
    - HTTP Format: http://xxx.com/xxx
    - Queue Format: acs:mns:{REGION}:{AccountID}:queues/{QueueName}
    - Email Format: mail:directmail:{MailAddress}
    """
    filter_tag: pulumi.Output[str]
    """
    The length should be shorter than 16.
    """
    name: pulumi.Output[str]
    """
    Two topics subscription on a single account in the same topic cannot have the same name. A topic subscription name must start with an English letter or a digit, and can contain English letters, digits, and hyphens, with the length not exceeding 256 characters.
    """
    notify_content_format: pulumi.Output[str]
    """
    The NotifyContentFormat attribute of Subscription. This attribute specifies the content format of the messages pushed to users. The valid values: 'SIMPLIFIED', 'XML' and 'JSON'. Default to 'SIMPLIFIED'.
    """
    notify_strategy: pulumi.Output[str]
    """
    The NotifyStrategy attribute of Subscription. This attribute specifies the retry strategy when message sending fails. the attribute has two value EXPONENTIAL_DECAY_RETR or BACKOFF_RETRY. Default value to BACKOFF_RETRY .
    """
    topic_name: pulumi.Output[str]
    """
    The topic which The subscription belongs to was named with the name.A topic name must start with an English letter or a digit, and can contain English letters, digits, and hyphens, with the length not exceeding 256 characters.
    """
    def __init__(__self__, resource_name, opts=None, endpoint=None, filter_tag=None, name=None, notify_content_format=None, notify_strategy=None, topic_name=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a TopicSubscription resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] endpoint: The endpoint has three format. Available values format:
               - HTTP Format: http://xxx.com/xxx
               - Queue Format: acs:mns:{REGION}:{AccountID}:queues/{QueueName}
               - Email Format: mail:directmail:{MailAddress}
        :param pulumi.Input[str] filter_tag: The length should be shorter than 16.
        :param pulumi.Input[str] name: Two topics subscription on a single account in the same topic cannot have the same name. A topic subscription name must start with an English letter or a digit, and can contain English letters, digits, and hyphens, with the length not exceeding 256 characters.
        :param pulumi.Input[str] notify_content_format: The NotifyContentFormat attribute of Subscription. This attribute specifies the content format of the messages pushed to users. The valid values: 'SIMPLIFIED', 'XML' and 'JSON'. Default to 'SIMPLIFIED'.
        :param pulumi.Input[str] notify_strategy: The NotifyStrategy attribute of Subscription. This attribute specifies the retry strategy when message sending fails. the attribute has two value EXPONENTIAL_DECAY_RETR or BACKOFF_RETRY. Default value to BACKOFF_RETRY .
        :param pulumi.Input[str] topic_name: The topic which The subscription belongs to was named with the name.A topic name must start with an English letter or a digit, and can contain English letters, digits, and hyphens, with the length not exceeding 256 characters.
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

            if endpoint is None:
                raise TypeError("Missing required property 'endpoint'")
            __props__['endpoint'] = endpoint
            __props__['filter_tag'] = filter_tag
            __props__['name'] = name
            __props__['notify_content_format'] = notify_content_format
            __props__['notify_strategy'] = notify_strategy
            if topic_name is None:
                raise TypeError("Missing required property 'topic_name'")
            __props__['topic_name'] = topic_name
        super(TopicSubscription, __self__).__init__(
            'alicloud:mns/topicSubscription:TopicSubscription',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, endpoint=None, filter_tag=None, name=None, notify_content_format=None, notify_strategy=None, topic_name=None):
        """
        Get an existing TopicSubscription resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] endpoint: The endpoint has three format. Available values format:
               - HTTP Format: http://xxx.com/xxx
               - Queue Format: acs:mns:{REGION}:{AccountID}:queues/{QueueName}
               - Email Format: mail:directmail:{MailAddress}
        :param pulumi.Input[str] filter_tag: The length should be shorter than 16.
        :param pulumi.Input[str] name: Two topics subscription on a single account in the same topic cannot have the same name. A topic subscription name must start with an English letter or a digit, and can contain English letters, digits, and hyphens, with the length not exceeding 256 characters.
        :param pulumi.Input[str] notify_content_format: The NotifyContentFormat attribute of Subscription. This attribute specifies the content format of the messages pushed to users. The valid values: 'SIMPLIFIED', 'XML' and 'JSON'. Default to 'SIMPLIFIED'.
        :param pulumi.Input[str] notify_strategy: The NotifyStrategy attribute of Subscription. This attribute specifies the retry strategy when message sending fails. the attribute has two value EXPONENTIAL_DECAY_RETR or BACKOFF_RETRY. Default value to BACKOFF_RETRY .
        :param pulumi.Input[str] topic_name: The topic which The subscription belongs to was named with the name.A topic name must start with an English letter or a digit, and can contain English letters, digits, and hyphens, with the length not exceeding 256 characters.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["endpoint"] = endpoint
        __props__["filter_tag"] = filter_tag
        __props__["name"] = name
        __props__["notify_content_format"] = notify_content_format
        __props__["notify_strategy"] = notify_strategy
        __props__["topic_name"] = topic_name
        return TopicSubscription(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


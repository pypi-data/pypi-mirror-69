# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class RepositoryWebhook(pulumi.CustomResource):
    active: pulumi.Output[bool]
    """
    Indicate of the webhook should receive events. Defaults to `true`.
    """
    configuration: pulumi.Output[dict]
    """
    key/value pair of configuration for this webhook. Available keys are `url`, `content_type`, `secret` and `insecure_ssl`. `secret` is [the shared secret, see API documentation](https://developer.github.com/v3/repos/hooks/#create-a-hook).

      * `contentType` (`str`)
      * `insecureSsl` (`bool`)
      * `secret` (`str`)
      * `url` (`str`) - URL of the webhook
    """
    etag: pulumi.Output[str]
    events: pulumi.Output[list]
    """
    A list of events which should trigger the webhook. See a list of [available events](https://developer.github.com/v3/activity/events/types/).
    """
    repository: pulumi.Output[str]
    """
    The repository of the webhook.
    """
    url: pulumi.Output[str]
    """
    URL of the webhook
    """
    def __init__(__self__, resource_name, opts=None, active=None, configuration=None, events=None, repository=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a RepositoryWebhook resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] active: Indicate of the webhook should receive events. Defaults to `true`.
        :param pulumi.Input[dict] configuration: key/value pair of configuration for this webhook. Available keys are `url`, `content_type`, `secret` and `insecure_ssl`. `secret` is [the shared secret, see API documentation](https://developer.github.com/v3/repos/hooks/#create-a-hook).
        :param pulumi.Input[list] events: A list of events which should trigger the webhook. See a list of [available events](https://developer.github.com/v3/activity/events/types/).
        :param pulumi.Input[str] repository: The repository of the webhook.

        The **configuration** object supports the following:

          * `contentType` (`pulumi.Input[str]`)
          * `insecureSsl` (`pulumi.Input[bool]`)
          * `secret` (`pulumi.Input[str]`)
          * `url` (`pulumi.Input[str]`) - URL of the webhook
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

            __props__['active'] = active
            __props__['configuration'] = configuration
            if events is None:
                raise TypeError("Missing required property 'events'")
            __props__['events'] = events
            if repository is None:
                raise TypeError("Missing required property 'repository'")
            __props__['repository'] = repository
            __props__['etag'] = None
            __props__['url'] = None
        super(RepositoryWebhook, __self__).__init__(
            'github:index/repositoryWebhook:RepositoryWebhook',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, active=None, configuration=None, etag=None, events=None, repository=None, url=None):
        """
        Get an existing RepositoryWebhook resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] active: Indicate of the webhook should receive events. Defaults to `true`.
        :param pulumi.Input[dict] configuration: key/value pair of configuration for this webhook. Available keys are `url`, `content_type`, `secret` and `insecure_ssl`. `secret` is [the shared secret, see API documentation](https://developer.github.com/v3/repos/hooks/#create-a-hook).
        :param pulumi.Input[list] events: A list of events which should trigger the webhook. See a list of [available events](https://developer.github.com/v3/activity/events/types/).
        :param pulumi.Input[str] repository: The repository of the webhook.
        :param pulumi.Input[str] url: URL of the webhook

        The **configuration** object supports the following:

          * `contentType` (`pulumi.Input[str]`)
          * `insecureSsl` (`pulumi.Input[bool]`)
          * `secret` (`pulumi.Input[str]`)
          * `url` (`pulumi.Input[str]`) - URL of the webhook
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["active"] = active
        __props__["configuration"] = configuration
        __props__["etag"] = etag
        __props__["events"] = events
        __props__["repository"] = repository
        __props__["url"] = url
        return RepositoryWebhook(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class LogsIndex(pulumi.CustomResource):
    exclusion_filters: pulumi.Output[list]
    """
    List of exclusion filters.

      * `filters` (`list`)
        * `query` (`str`) - Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
        * `sampleRate` (`float`) - The fraction of logs excluded by the exclusion filter, when active.

      * `is_enabled` (`bool`) - A boolean stating if the exclusion is active or not.
      * `name` (`str`) - The name of the exclusion filter.
    """
    filters: pulumi.Output[list]
    name: pulumi.Output[str]
    """
    The name of the exclusion filter.
    """
    def __init__(__self__, resource_name, opts=None, exclusion_filters=None, filters=None, name=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a LogsIndex resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] exclusion_filters: List of exclusion filters.
        :param pulumi.Input[str] name: The name of the exclusion filter.

        The **exclusion_filters** object supports the following:

          * `filters` (`pulumi.Input[list]`)
            * `query` (`pulumi.Input[str]`) - Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
            * `sampleRate` (`pulumi.Input[float]`) - The fraction of logs excluded by the exclusion filter, when active.

          * `is_enabled` (`pulumi.Input[bool]`) - A boolean stating if the exclusion is active or not.
          * `name` (`pulumi.Input[str]`) - The name of the exclusion filter.

        The **filters** object supports the following:

          * `query` (`pulumi.Input[str]`) - Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
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

            __props__['exclusion_filters'] = exclusion_filters
            if filters is None:
                raise TypeError("Missing required property 'filters'")
            __props__['filters'] = filters
            if name is None:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
        super(LogsIndex, __self__).__init__(
            'datadog:index/logsIndex:LogsIndex',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, exclusion_filters=None, filters=None, name=None):
        """
        Get an existing LogsIndex resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] exclusion_filters: List of exclusion filters.
        :param pulumi.Input[str] name: The name of the exclusion filter.

        The **exclusion_filters** object supports the following:

          * `filters` (`pulumi.Input[list]`)
            * `query` (`pulumi.Input[str]`) - Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
            * `sampleRate` (`pulumi.Input[float]`) - The fraction of logs excluded by the exclusion filter, when active.

          * `is_enabled` (`pulumi.Input[bool]`) - A boolean stating if the exclusion is active or not.
          * `name` (`pulumi.Input[str]`) - The name of the exclusion filter.

        The **filters** object supports the following:

          * `query` (`pulumi.Input[str]`) - Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["exclusion_filters"] = exclusion_filters
        __props__["filters"] = filters
        __props__["name"] = name
        return LogsIndex(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop


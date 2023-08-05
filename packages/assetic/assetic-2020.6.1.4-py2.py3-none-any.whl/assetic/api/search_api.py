# coding: utf-8

"""
    Assetic Integration API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v2
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from assetic.api_client import ApiClient


class SearchApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def search_get(self, **kwargs):  # noqa: E501
        """Gets advance search profile results(top 10,000).  Default Page Size is 20 and Max Page Size is 500.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str request_params_id:
        :param int request_params_search_type:
        :param str request_params_source_tile_id:
        :param list[str] request_params_sorts:
        :param list[str] request_params_filters:
        :param int request_params_page:
        :param int request_params_page_size:
        :return: SearchRepresentationList
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.search_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.search_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def search_get_with_http_info(self, **kwargs):  # noqa: E501
        """Gets advance search profile results(top 10,000).  Default Page Size is 20 and Max Page Size is 500.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str request_params_id:
        :param int request_params_search_type:
        :param str request_params_source_tile_id:
        :param list[str] request_params_sorts:
        :param list[str] request_params_filters:
        :param int request_params_page:
        :param int request_params_page_size:
        :return: SearchRepresentationList
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['request_params_id', 'request_params_search_type', 'request_params_source_tile_id', 'request_params_sorts', 'request_params_filters', 'request_params_page', 'request_params_page_size']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method search_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'request_params_id' in params:
            query_params.append(('requestParams.id', params['request_params_id']))  # noqa: E501
        if 'request_params_search_type' in params:
            query_params.append(('requestParams.searchType', params['request_params_search_type']))  # noqa: E501
        if 'request_params_source_tile_id' in params:
            query_params.append(('requestParams.sourceTileId', params['request_params_source_tile_id']))  # noqa: E501
        if 'request_params_sorts' in params:
            query_params.append(('requestParams.sorts', params['request_params_sorts']))  # noqa: E501
            collection_formats['requestParams.sorts'] = 'multi'  # noqa: E501
        if 'request_params_filters' in params:
            query_params.append(('requestParams.filters', params['request_params_filters']))  # noqa: E501
            collection_formats['requestParams.filters'] = 'multi'  # noqa: E501
        if 'request_params_page' in params:
            query_params.append(('requestParams.page', params['request_params_page']))  # noqa: E501
        if 'request_params_page_size' in params:
            query_params.append(('requestParams.pageSize', params['request_params_page_size']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/octet-stream'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/api/v2/search', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='SearchRepresentationList',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def search_get_geo_json_result(self, **kwargs):  # noqa: E501
        """Gets advance search profile results(top 10,000) in GeoJSON format.  Default Page Size is 20 and Max Page Size is 500.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_get_geo_json_result(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str request_params_id:
        :param int request_params_search_type:
        :param str request_params_source_tile_id:
        :param list[str] request_params_sorts:
        :param list[str] request_params_filters:
        :param int request_params_page:
        :param int request_params_page_size:
        :return: GeoJsonListFeatureCollection
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.search_get_geo_json_result_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.search_get_geo_json_result_with_http_info(**kwargs)  # noqa: E501
            return data

    def search_get_geo_json_result_with_http_info(self, **kwargs):  # noqa: E501
        """Gets advance search profile results(top 10,000) in GeoJSON format.  Default Page Size is 20 and Max Page Size is 500.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_get_geo_json_result_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str request_params_id:
        :param int request_params_search_type:
        :param str request_params_source_tile_id:
        :param list[str] request_params_sorts:
        :param list[str] request_params_filters:
        :param int request_params_page:
        :param int request_params_page_size:
        :return: GeoJsonListFeatureCollection
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['request_params_id', 'request_params_search_type', 'request_params_source_tile_id', 'request_params_sorts', 'request_params_filters', 'request_params_page', 'request_params_page_size']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method search_get_geo_json_result" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'request_params_id' in params:
            query_params.append(('requestParams.id', params['request_params_id']))  # noqa: E501
        if 'request_params_search_type' in params:
            query_params.append(('requestParams.searchType', params['request_params_search_type']))  # noqa: E501
        if 'request_params_source_tile_id' in params:
            query_params.append(('requestParams.sourceTileId', params['request_params_source_tile_id']))  # noqa: E501
        if 'request_params_sorts' in params:
            query_params.append(('requestParams.sorts', params['request_params_sorts']))  # noqa: E501
            collection_formats['requestParams.sorts'] = 'multi'  # noqa: E501
        if 'request_params_filters' in params:
            query_params.append(('requestParams.filters', params['request_params_filters']))  # noqa: E501
            collection_formats['requestParams.filters'] = 'multi'  # noqa: E501
        if 'request_params_page' in params:
            query_params.append(('requestParams.page', params['request_params_page']))  # noqa: E501
        if 'request_params_page_size' in params:
            query_params.append(('requestParams.pageSize', params['request_params_page_size']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/octet-stream'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/api/v2/search/geojson', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='GeoJsonListFeatureCollection',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def search_get_profile_metadata(self, id, **kwargs):  # noqa: E501
        """Returns mappings of a given advanced search profile.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_get_profile_metadata(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: Search Pofile Id (required)
        :return: SearchMetadataRepresentationList
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.search_get_profile_metadata_with_http_info(id, **kwargs)  # noqa: E501
        else:
            (data) = self.search_get_profile_metadata_with_http_info(id, **kwargs)  # noqa: E501
            return data

    def search_get_profile_metadata_with_http_info(self, id, **kwargs):  # noqa: E501
        """Returns mappings of a given advanced search profile.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_get_profile_metadata_with_http_info(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: Search Pofile Id (required)
        :return: SearchMetadataRepresentationList
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method search_get_profile_metadata" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if ('id' not in params or
                params['id'] is None):
            raise ValueError("Missing the required parameter `id` when calling `search_get_profile_metadata`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/octet-stream'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/api/v2/search/{id}/metadata', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='SearchMetadataRepresentationList',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def search_post_export_profile(self, id, **kwargs):  # noqa: E501
        """Triggers export of advanced search profile results.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_post_export_profile(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: Search Profile Id (required)
        :return: CreatedRepresentationGuid
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.search_post_export_profile_with_http_info(id, **kwargs)  # noqa: E501
        else:
            (data) = self.search_post_export_profile_with_http_info(id, **kwargs)  # noqa: E501
            return data

    def search_post_export_profile_with_http_info(self, id, **kwargs):  # noqa: E501
        """Triggers export of advanced search profile results.  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.search_post_export_profile_with_http_info(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: Search Profile Id (required)
        :return: CreatedRepresentationGuid
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method search_post_export_profile" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if ('id' not in params or
                params['id'] is None):
            raise ValueError("Missing the required parameter `id` when calling `search_post_export_profile`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/octet-stream'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/api/v2/search/{id}/export', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='CreatedRepresentationGuid',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

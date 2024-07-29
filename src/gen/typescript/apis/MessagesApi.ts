/* tslint:disable */
/* eslint-disable */
/**
 * CoWorkerMatch API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import type {
  CreateMessageRequest,
  CreateMessageResponse,
  GetMessageResponse,
  UpdateMessageRequest,
  UpdateMessageResponse,
} from '../models/index';
import {
  CreateMessageRequestFromJSON,
  CreateMessageRequestToJSON,
  CreateMessageResponseFromJSON,
  CreateMessageResponseToJSON,
  GetMessageResponseFromJSON,
  GetMessageResponseToJSON,
  UpdateMessageRequestFromJSON,
  UpdateMessageRequestToJSON,
  UpdateMessageResponseFromJSON,
  UpdateMessageResponseToJSON,
} from '../models/index';

export interface MessagesMatchingIdGetRequest {
  matchingId: string;
}

export interface MessagesMatchingIdPostRequest {
  matchingId: string;
  createMessageRequest: CreateMessageRequest;
}

export interface MessagesMessageIdPutRequest {
  messageId: string;
  updateMessageRequest: UpdateMessageRequest;
}

/**
 *
 */
export class MessagesApi extends runtime.BaseAPI {
  /**
   * Get all messages for a matching
   */
  async messagesMatchingIdGetRaw(
    requestParameters: MessagesMatchingIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<GetMessageResponse>> {
    if (requestParameters['matchingId'] == null) {
      throw new runtime.RequiredError(
        'matchingId',
        'Required parameter "matchingId" was null or undefined when calling messagesMatchingIdGet().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/messages/{matching_id}`.replace(
          `{${'matching_id'}}`,
          encodeURIComponent(String(requestParameters['matchingId']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetMessageResponseFromJSON(jsonValue)
    );
  }

  /**
   * Get all messages for a matching
   */
  async messagesMatchingIdGet(
    requestParameters: MessagesMatchingIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<GetMessageResponse> {
    const response = await this.messagesMatchingIdGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Create a new message
   */
  async messagesMatchingIdPostRaw(
    requestParameters: MessagesMatchingIdPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CreateMessageResponse>> {
    if (requestParameters['matchingId'] == null) {
      throw new runtime.RequiredError(
        'matchingId',
        'Required parameter "matchingId" was null or undefined when calling messagesMatchingIdPost().'
      );
    }

    if (requestParameters['createMessageRequest'] == null) {
      throw new runtime.RequiredError(
        'createMessageRequest',
        'Required parameter "createMessageRequest" was null or undefined when calling messagesMatchingIdPost().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/messages/{matching_id}`.replace(
          `{${'matching_id'}}`,
          encodeURIComponent(String(requestParameters['matchingId']))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateMessageRequestToJSON(
          requestParameters['createMessageRequest']
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateMessageResponseFromJSON(jsonValue)
    );
  }

  /**
   * Create a new message
   */
  async messagesMatchingIdPost(
    requestParameters: MessagesMatchingIdPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CreateMessageResponse> {
    const response = await this.messagesMatchingIdPostRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update a message
   */
  async messagesMessageIdPutRaw(
    requestParameters: MessagesMessageIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UpdateMessageResponse>> {
    if (requestParameters['messageId'] == null) {
      throw new runtime.RequiredError(
        'messageId',
        'Required parameter "messageId" was null or undefined when calling messagesMessageIdPut().'
      );
    }

    if (requestParameters['updateMessageRequest'] == null) {
      throw new runtime.RequiredError(
        'updateMessageRequest',
        'Required parameter "updateMessageRequest" was null or undefined when calling messagesMessageIdPut().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/messages/{message_id}`.replace(
          `{${'message_id'}}`,
          encodeURIComponent(String(requestParameters['messageId']))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateMessageRequestToJSON(
          requestParameters['updateMessageRequest']
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateMessageResponseFromJSON(jsonValue)
    );
  }

  /**
   * Update a message
   */
  async messagesMessageIdPut(
    requestParameters: MessagesMessageIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UpdateMessageResponse> {
    const response = await this.messagesMessageIdPutRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}

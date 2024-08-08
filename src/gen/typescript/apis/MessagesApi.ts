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
  CreateMessageReq,
  CreateMessageRes,
  GetMessageRes,
  UpdateMessageReq,
  UpdateMessageRes,
} from '../models/index';
import {
  CreateMessageReqFromJSON,
  CreateMessageReqToJSON,
  CreateMessageResFromJSON,
  CreateMessageResToJSON,
  GetMessageResFromJSON,
  GetMessageResToJSON,
  UpdateMessageReqFromJSON,
  UpdateMessageReqToJSON,
  UpdateMessageResFromJSON,
  UpdateMessageResToJSON,
} from '../models/index';

export interface MessagesMatchingIdGetRequest {
  matchingId: string;
}

export interface MessagesMatchingIdPostRequest {
  matchingId: string;
  createMessageReq: CreateMessageReq;
}

export interface MessagesMessageIdPutRequest {
  messageId: string;
  updateMessageReq: UpdateMessageReq;
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
  ): Promise<runtime.ApiResponse<GetMessageRes>> {
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
        path: `/messages/{matchingId}`.replace(
          `{${'matchingId'}}`,
          encodeURIComponent(String(requestParameters['matchingId']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetMessageResFromJSON(jsonValue)
    );
  }

  /**
   * Get all messages for a matching
   */
  async messagesMatchingIdGet(
    requestParameters: MessagesMatchingIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<GetMessageRes> {
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
  ): Promise<runtime.ApiResponse<CreateMessageRes>> {
    if (requestParameters['matchingId'] == null) {
      throw new runtime.RequiredError(
        'matchingId',
        'Required parameter "matchingId" was null or undefined when calling messagesMatchingIdPost().'
      );
    }

    if (requestParameters['createMessageReq'] == null) {
      throw new runtime.RequiredError(
        'createMessageReq',
        'Required parameter "createMessageReq" was null or undefined when calling messagesMatchingIdPost().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/messages/{matchingId}`.replace(
          `{${'matchingId'}}`,
          encodeURIComponent(String(requestParameters['matchingId']))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateMessageReqToJSON(requestParameters['createMessageReq']),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateMessageResFromJSON(jsonValue)
    );
  }

  /**
   * Create a new message
   */
  async messagesMatchingIdPost(
    requestParameters: MessagesMatchingIdPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CreateMessageRes> {
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
  ): Promise<runtime.ApiResponse<UpdateMessageRes>> {
    if (requestParameters['messageId'] == null) {
      throw new runtime.RequiredError(
        'messageId',
        'Required parameter "messageId" was null or undefined when calling messagesMessageIdPut().'
      );
    }

    if (requestParameters['updateMessageReq'] == null) {
      throw new runtime.RequiredError(
        'updateMessageReq',
        'Required parameter "updateMessageReq" was null or undefined when calling messagesMessageIdPut().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/messages/{messageId}`.replace(
          `{${'messageId'}}`,
          encodeURIComponent(String(requestParameters['messageId']))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateMessageReqToJSON(requestParameters['updateMessageReq']),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateMessageResFromJSON(jsonValue)
    );
  }

  /**
   * Update a message
   */
  async messagesMessageIdPut(
    requestParameters: MessagesMessageIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UpdateMessageRes> {
    const response = await this.messagesMessageIdPutRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}

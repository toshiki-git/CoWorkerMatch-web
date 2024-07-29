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
  GetMatchingResponseInner,
  GetMatchingUserResponse,
} from '../models/index';
import {
  GetMatchingResponseInnerFromJSON,
  GetMatchingResponseInnerToJSON,
  GetMatchingUserResponseFromJSON,
  GetMatchingUserResponseToJSON,
} from '../models/index';

export interface MatchingsMatchingIdGetRequest {
  matchingId: string;
}

/**
 *
 */
export class MatchingsApi extends runtime.BaseAPI {
  /**
   * Get All matchings
   */
  async matchingsGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<GetMatchingResponseInner>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/matchings`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(GetMatchingResponseInnerFromJSON)
    );
  }

  /**
   * Get All matchings
   */
  async matchingsGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<GetMatchingResponseInner>> {
    const response = await this.matchingsGetRaw(initOverrides);
    return await response.value();
  }

  /**
   * Get match user
   */
  async matchingsMatchingIdGetRaw(
    requestParameters: MatchingsMatchingIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<GetMatchingUserResponse>> {
    if (requestParameters['matchingId'] == null) {
      throw new runtime.RequiredError(
        'matchingId',
        'Required parameter "matchingId" was null or undefined when calling matchingsMatchingIdGet().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/matchings/{matching_id}`.replace(
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
      GetMatchingUserResponseFromJSON(jsonValue)
    );
  }

  /**
   * Get match user
   */
  async matchingsMatchingIdGet(
    requestParameters: MatchingsMatchingIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<GetMatchingUserResponse> {
    const response = await this.matchingsMatchingIdGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}

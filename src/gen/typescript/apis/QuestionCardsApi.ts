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
import type { GetQuestionCardResponseInner } from '../models/index';
import {
  GetQuestionCardResponseInnerFromJSON,
  GetQuestionCardResponseInnerToJSON,
} from '../models/index';

export interface QuestionCardsMatchingIdGetRequest {
  matchingId: string;
}

/**
 *
 */
export class QuestionCardsApi extends runtime.BaseAPI {
  /**
   * Get User Questions
   */
  async questionCardsMatchingIdGetRaw(
    requestParameters: QuestionCardsMatchingIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<GetQuestionCardResponseInner>>> {
    if (requestParameters['matchingId'] == null) {
      throw new runtime.RequiredError(
        'matchingId',
        'Required parameter "matchingId" was null or undefined when calling questionCardsMatchingIdGet().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/question_cards/{matching_id}`.replace(
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
      jsonValue.map(GetQuestionCardResponseInnerFromJSON)
    );
  }

  /**
   * Get User Questions
   */
  async questionCardsMatchingIdGet(
    requestParameters: QuestionCardsMatchingIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<GetQuestionCardResponseInner>> {
    const response = await this.questionCardsMatchingIdGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
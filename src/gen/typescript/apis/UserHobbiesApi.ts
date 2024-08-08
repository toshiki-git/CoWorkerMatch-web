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
  CreateUserHobbyReq,
  CreateUserHobbyRes,
  GetUserHobbyRes,
  UpdateUserHobbyReq,
  UpdateUserHobbyRes,
} from '../models/index';
import {
  CreateUserHobbyReqFromJSON,
  CreateUserHobbyReqToJSON,
  CreateUserHobbyResFromJSON,
  CreateUserHobbyResToJSON,
  GetUserHobbyResFromJSON,
  GetUserHobbyResToJSON,
  UpdateUserHobbyReqFromJSON,
  UpdateUserHobbyReqToJSON,
  UpdateUserHobbyResFromJSON,
  UpdateUserHobbyResToJSON,
} from '../models/index';

export interface UserHobbiesPostRequest {
  createUserHobbyReq: CreateUserHobbyReq;
}

export interface UserHobbiesPutRequest {
  updateUserHobbyReq: UpdateUserHobbyReq;
}

export interface UserHobbiesUserIdGetRequest {
  userId: string;
}

/**
 *
 */
export class UserHobbiesApi extends runtime.BaseAPI {
  /**
   * Create user new hobbies
   */
  async userHobbiesPostRaw(
    requestParameters: UserHobbiesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CreateUserHobbyRes>> {
    if (requestParameters['createUserHobbyReq'] == null) {
      throw new runtime.RequiredError(
        'createUserHobbyReq',
        'Required parameter "createUserHobbyReq" was null or undefined when calling userHobbiesPost().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/user-hobbies`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateUserHobbyReqToJSON(requestParameters['createUserHobbyReq']),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateUserHobbyResFromJSON(jsonValue)
    );
  }

  /**
   * Create user new hobbies
   */
  async userHobbiesPost(
    requestParameters: UserHobbiesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CreateUserHobbyRes> {
    const response = await this.userHobbiesPostRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update user hobbies
   */
  async userHobbiesPutRaw(
    requestParameters: UserHobbiesPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UpdateUserHobbyRes>> {
    if (requestParameters['updateUserHobbyReq'] == null) {
      throw new runtime.RequiredError(
        'updateUserHobbyReq',
        'Required parameter "updateUserHobbyReq" was null or undefined when calling userHobbiesPut().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/user-hobbies`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateUserHobbyReqToJSON(requestParameters['updateUserHobbyReq']),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateUserHobbyResFromJSON(jsonValue)
    );
  }

  /**
   * Update user hobbies
   */
  async userHobbiesPut(
    requestParameters: UserHobbiesPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UpdateUserHobbyRes> {
    const response = await this.userHobbiesPutRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get all hobbies of a user
   */
  async userHobbiesUserIdGetRaw(
    requestParameters: UserHobbiesUserIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<GetUserHobbyRes>> {
    if (requestParameters['userId'] == null) {
      throw new runtime.RequiredError(
        'userId',
        'Required parameter "userId" was null or undefined when calling userHobbiesUserIdGet().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/user-hobbies/{userId}`.replace(
          `{${'userId'}}`,
          encodeURIComponent(String(requestParameters['userId']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetUserHobbyResFromJSON(jsonValue)
    );
  }

  /**
   * Get all hobbies of a user
   */
  async userHobbiesUserIdGet(
    requestParameters: UserHobbiesUserIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<GetUserHobbyRes> {
    const response = await this.userHobbiesUserIdGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}

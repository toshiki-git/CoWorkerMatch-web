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

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface UpdateUserHobbyRequest
 */
export interface UpdateUserHobbyRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateUserHobbyRequest
   */
  hobbyIds: Array<string>;
}

/**
 * Check if a given object implements the UpdateUserHobbyRequest interface.
 */
export function instanceOfUpdateUserHobbyRequest(
  value: object
): value is UpdateUserHobbyRequest {
  if (!('hobbyIds' in value) || value['hobbyIds'] === undefined) return false;
  return true;
}

export function UpdateUserHobbyRequestFromJSON(
  json: any
): UpdateUserHobbyRequest {
  return UpdateUserHobbyRequestFromJSONTyped(json, false);
}

export function UpdateUserHobbyRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateUserHobbyRequest {
  if (json == null) {
    return json;
  }
  return {
    hobbyIds: json['hobby_ids'],
  };
}

export function UpdateUserHobbyRequestToJSON(
  value?: UpdateUserHobbyRequest | null
): any {
  if (value == null) {
    return value;
  }
  return {
    hobby_ids: value['hobbyIds'],
  };
}

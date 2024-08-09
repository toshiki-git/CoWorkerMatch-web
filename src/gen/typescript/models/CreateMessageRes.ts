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
 * @interface CreateMessageRes
 */
export interface CreateMessageRes {
  /**
   *
   * @type {string}
   * @memberof CreateMessageRes
   */
  messageId: string;
}

/**
 * Check if a given object implements the CreateMessageRes interface.
 */
export function instanceOfCreateMessageRes(
  value: object
): value is CreateMessageRes {
  if (!('messageId' in value) || value['messageId'] === undefined) return false;
  return true;
}

export function CreateMessageResFromJSON(json: any): CreateMessageRes {
  return CreateMessageResFromJSONTyped(json, false);
}

export function CreateMessageResFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateMessageRes {
  if (json == null) {
    return json;
  }
  return {
    messageId: json['messageId'],
  };
}

export function CreateMessageResToJSON(value?: CreateMessageRes | null): any {
  if (value == null) {
    return value;
  }
  return {
    messageId: value['messageId'],
  };
}
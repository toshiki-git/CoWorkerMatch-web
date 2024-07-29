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
 * @interface CreateQuestionResponse
 */
export interface CreateQuestionResponse {
  /**
   *
   * @type {string}
   * @memberof CreateQuestionResponse
   */
  matchingId: string;
  /**
   *
   * @type {string}
   * @memberof CreateQuestionResponse
   */
  senderUserId: string;
  /**
   *
   * @type {string}
   * @memberof CreateQuestionResponse
   */
  receiverUserId: string;
  /**
   *
   * @type {Date}
   * @memberof CreateQuestionResponse
   */
  matchingDate: Date;
}

/**
 * Check if a given object implements the CreateQuestionResponse interface.
 */
export function instanceOfCreateQuestionResponse(
  value: object
): value is CreateQuestionResponse {
  if (!('matchingId' in value) || value['matchingId'] === undefined)
    return false;
  if (!('senderUserId' in value) || value['senderUserId'] === undefined)
    return false;
  if (!('receiverUserId' in value) || value['receiverUserId'] === undefined)
    return false;
  if (!('matchingDate' in value) || value['matchingDate'] === undefined)
    return false;
  return true;
}

export function CreateQuestionResponseFromJSON(
  json: any
): CreateQuestionResponse {
  return CreateQuestionResponseFromJSONTyped(json, false);
}

export function CreateQuestionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateQuestionResponse {
  if (json == null) {
    return json;
  }
  return {
    matchingId: json['matching_id'],
    senderUserId: json['sender_user_id'],
    receiverUserId: json['receiver_user_id'],
    matchingDate: new Date(json['matching_date']),
  };
}

export function CreateQuestionResponseToJSON(
  value?: CreateQuestionResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    matching_id: value['matchingId'],
    sender_user_id: value['senderUserId'],
    receiver_user_id: value['receiverUserId'],
    matching_date: value['matchingDate'].toISOString(),
  };
}

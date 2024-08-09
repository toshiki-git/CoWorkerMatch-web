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
 * @interface CreateQuestionRes
 */
export interface CreateQuestionRes {
  /**
   *
   * @type {string}
   * @memberof CreateQuestionRes
   */
  matchingId: string;
  /**
   *
   * @type {string}
   * @memberof CreateQuestionRes
   */
  senderUserId: string;
  /**
   *
   * @type {string}
   * @memberof CreateQuestionRes
   */
  receiverUserId: string;
  /**
   *
   * @type {Date}
   * @memberof CreateQuestionRes
   */
  matchingDate: Date;
}

/**
 * Check if a given object implements the CreateQuestionRes interface.
 */
export function instanceOfCreateQuestionRes(
  value: object
): value is CreateQuestionRes {
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

export function CreateQuestionResFromJSON(json: any): CreateQuestionRes {
  return CreateQuestionResFromJSONTyped(json, false);
}

export function CreateQuestionResFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateQuestionRes {
  if (json == null) {
    return json;
  }
  return {
    matchingId: json['matchingId'],
    senderUserId: json['senderUserId'],
    receiverUserId: json['receiverUserId'],
    matchingDate: new Date(json['matchingDate']),
  };
}

export function CreateQuestionResToJSON(value?: CreateQuestionRes | null): any {
  if (value == null) {
    return value;
  }
  return {
    matchingId: value['matchingId'],
    senderUserId: value['senderUserId'],
    receiverUserId: value['receiverUserId'],
    matchingDate: value['matchingDate'].toISOString(),
  };
}
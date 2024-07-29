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
import type { Message } from './Message';
import {
  MessageFromJSON,
  MessageFromJSONTyped,
  MessageToJSON,
} from './Message';

/**
 *
 * @export
 * @interface GetMessageResponseMessagesInnerMessagePair
 */
export interface GetMessageResponseMessagesInnerMessagePair {
  /**
   *
   * @type {Message}
   * @memberof GetMessageResponseMessagesInnerMessagePair
   */
  me: Message;
  /**
   *
   * @type {Message}
   * @memberof GetMessageResponseMessagesInnerMessagePair
   */
  you: Message;
}

/**
 * Check if a given object implements the GetMessageResponseMessagesInnerMessagePair interface.
 */
export function instanceOfGetMessageResponseMessagesInnerMessagePair(
  value: object
): value is GetMessageResponseMessagesInnerMessagePair {
  if (!('me' in value) || value['me'] === undefined) return false;
  if (!('you' in value) || value['you'] === undefined) return false;
  return true;
}

export function GetMessageResponseMessagesInnerMessagePairFromJSON(
  json: any
): GetMessageResponseMessagesInnerMessagePair {
  return GetMessageResponseMessagesInnerMessagePairFromJSONTyped(json, false);
}

export function GetMessageResponseMessagesInnerMessagePairFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetMessageResponseMessagesInnerMessagePair {
  if (json == null) {
    return json;
  }
  return {
    me: MessageFromJSON(json['me']),
    you: MessageFromJSON(json['you']),
  };
}

export function GetMessageResponseMessagesInnerMessagePairToJSON(
  value?: GetMessageResponseMessagesInnerMessagePair | null
): any {
  if (value == null) {
    return value;
  }
  return {
    me: MessageToJSON(value['me']),
    you: MessageToJSON(value['you']),
  };
}

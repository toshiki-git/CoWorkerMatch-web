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
import type { Choice } from './Choice';
import { ChoiceFromJSON, ChoiceFromJSONTyped, ChoiceToJSON } from './Choice';

/**
 *
 * @export
 * @interface Question
 */
export interface Question {
  /**
   *
   * @type {string}
   * @memberof Question
   */
  questionId: string;
  /**
   *
   * @type {string}
   * @memberof Question
   */
  questionText: string;
  /**
   *
   * @type {Choice}
   * @memberof Question
   */
  choice1: Choice;
  /**
   *
   * @type {Choice}
   * @memberof Question
   */
  choice2: Choice;
}

/**
 * Check if a given object implements the Question interface.
 */
export function instanceOfQuestion(value: object): value is Question {
  if (!('questionId' in value) || value['questionId'] === undefined)
    return false;
  if (!('questionText' in value) || value['questionText'] === undefined)
    return false;
  if (!('choice1' in value) || value['choice1'] === undefined) return false;
  if (!('choice2' in value) || value['choice2'] === undefined) return false;
  return true;
}

export function QuestionFromJSON(json: any): Question {
  return QuestionFromJSONTyped(json, false);
}

export function QuestionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Question {
  if (json == null) {
    return json;
  }
  return {
    questionId: json['questionId'],
    questionText: json['questionText'],
    choice1: ChoiceFromJSON(json['choice1']),
    choice2: ChoiceFromJSON(json['choice2']),
  };
}

export function QuestionToJSON(value?: Question | null): any {
  if (value == null) {
    return value;
  }
  return {
    questionId: value['questionId'],
    questionText: value['questionText'],
    choice1: ChoiceToJSON(value['choice1']),
    choice2: ChoiceToJSON(value['choice2']),
  };
}
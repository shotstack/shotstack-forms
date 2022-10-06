import {
	FIND_NOT_STRING,
	FIND_NOT_EMPTY,
	FIND_NOT_FOUND,
	MERGE_NOT_ARRAY,
	MERGE_NOT_EMPTY,
	MERGE_NOT_FOUND,
	REPLACE_NOT_FOUND,
	UNEXPECTED_ERROR,
	MERGE_INDEX_NOT_OBJECT
} from './constants';
import type { IParsedEditSchema, JSONValidTypes, MergeField } from './types';

export class ValidationError extends Error {
	constructor(message: string) {
		super(message);
	}
}

function isObject(input: unknown): input is object {
	return typeof input === 'object';
}

function isProperty<K extends string>(prop: string, json: object): json is { [key in K]: unknown } {
	return prop in json;
}

function propertyDoesNotExist(prop: string, json: object) {
	return !isProperty(prop, json);
}

function isNotInstanceOfArray(prop: string, json: object) {
	return isProperty(prop, json) && !(json[prop] instanceof Array);
}

function isNotString(prop: string, json: object) {
	return isProperty(prop, json) && !(typeof json[prop] === 'string');
}

function isEmptyString(prop: string, json: object) {
	const value = isProperty(prop, json) && json[prop];
	return !(typeof value === 'string' && value.length > 0);
}

function isEmptyArray(prop: string, json: object) {
	const value = isProperty(prop, json) && json[prop];
	return !(value instanceof Array && value.length > 0);
}

export function validateTemplate(jsonTemplate: string): IParsedEditSchema {
	try {
		const parsed = JSON.parse(jsonTemplate);
		if (propertyDoesNotExist('merge', parsed)) throw new ValidationError(MERGE_NOT_FOUND);
		if (isNotInstanceOfArray('merge', parsed)) throw new ValidationError(MERGE_NOT_ARRAY);
		if (isEmptyArray('merge', parsed)) throw new ValidationError(MERGE_NOT_EMPTY);
		const { merge: unknownMergeField } = parsed as { merge: unknown[] };
		const merge = validateMerge(unknownMergeField);
		return { ...parsed, merge };
	} catch (error) {
		throw validateError(error);
	}
}

export function validateMerge(template: unknown[]): MergeField[] {
	const validTemplate = template.map((field: unknown) => {
		if (!isObject(field)) throw new ValidationError(MERGE_INDEX_NOT_OBJECT);
		if (propertyDoesNotExist('find', field)) throw new ValidationError(FIND_NOT_FOUND);
		if (propertyDoesNotExist('replace', field)) throw new ValidationError(REPLACE_NOT_FOUND);
		if (isNotString('find', field)) throw new ValidationError(FIND_NOT_STRING);
		if (isEmptyString('find', field)) throw new ValidationError(FIND_NOT_EMPTY);
		return field as { find: string; replace: JSONValidTypes };
	});
	return validTemplate.map(({ find, replace }) => ({
		find,
		replace: stringifyIfNotString(replace)
	}));
}

export function hasErrorMessage(error: unknown): error is { message: string } {
	return typeof error === 'object' && error !== null && 'message' in error;
}

export function validateError(error: unknown): Error {
	if (error instanceof Error) return error;
	else if (hasErrorMessage(error)) return new ValidationError(error.message);
	else return new ValidationError(UNEXPECTED_ERROR);
}

export function stringifyIfNotString(input: unknown): string {
	if (typeof input === 'string') return input;
	else return JSON.stringify(input);
}

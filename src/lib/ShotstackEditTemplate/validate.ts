import {
	FIND_NOT_STRING,
	FIND_NOT_EMPTY,
	FIND_NOT_FOUND,
	MERGE_NOT_ARRAY,
	MERGE_NOT_EMPTY,
	MERGE_NOT_FOUND,
	REPLACE_NOT_FOUND
} from './constants';
import type { IParsedEditSchema, JSONValidTypes } from './types';

export class ValidationError extends Error {
	constructor(message: string) {
		super(message);
	}
}

function propertyDoesNotExist(prop: string, json: any) {
	return !(prop in json);
}

function isNotInstanceOfArray(prop: string, json: any) {
	return !(json[prop] instanceof Array);
}

function isNotString(prop: string, json: any) {
	return !(typeof json[prop] === 'string');
}

function isEmptyString(prop: string, json: any) {
	return !(typeof json[prop] === 'string' && json[prop].length > 0);
}
function isEmptyArray(prop: string, json: any) {
	return !(json[prop] instanceof Array && json[prop].length > 0);
}
export function validateTemplate(jsonTemplate: string): IParsedEditSchema {
	try {
		const parsed = JSON.parse(jsonTemplate);

		if (propertyDoesNotExist('merge', parsed)) throw new ValidationError(MERGE_NOT_FOUND);
		if (isNotInstanceOfArray('merge', parsed)) throw new ValidationError(MERGE_NOT_ARRAY);
		if (isEmptyArray('merge', parsed)) throw new ValidationError(MERGE_NOT_EMPTY);

		const merge = validateMerge(parsed.merge);
		return { ...parsed, merge } as IParsedEditSchema;
	} catch (error) {
		if (error instanceof Error) throw error;
		else throw new ValidationError('There was a problem parsing the template json');
	}
}

export function validateMerge(template: unknown[]) {
	const validTemplate = template.map((field: unknown) => {
		if (propertyDoesNotExist('find', field)) throw new ValidationError(FIND_NOT_FOUND);
		if (propertyDoesNotExist('replace', field)) throw new ValidationError(REPLACE_NOT_FOUND);
		if (isNotString('find', field)) throw new ValidationError(FIND_NOT_STRING);
		if (isEmptyString('find', field)) throw new ValidationError(FIND_NOT_EMPTY);
		return field as { find: string; replace: JSONValidTypes };
	});
	return validTemplate.map(({ find, replace }) => ({
		find,
		replace: typeof replace === 'string' ? replace : JSON.stringify(replace)
	}));
}

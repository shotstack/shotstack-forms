import { describe, expect, test } from '@jest/globals';
import defaultJSON from '../components/Form/defaultMerge.json';
import {
	FIND_NOT_EMPTY,
	FIND_NOT_FOUND,
	FIND_NOT_STRING,
	INVALID_JSON,
	MERGE_INDEX_NOT_OBJECT,
	MERGE_NOT_ARRAY,
	MERGE_NOT_EMPTY,
	MERGE_NOT_FOUND,
	REPLACE_NOT_FOUND,
	UNEXPECTED_ERROR
} from './constants';
import {
	validateTemplate,
	validateMerge,
	stringifyIfNotString,
	validateError,
	ValidationError,
	hasErrorMessage
} from './validate';
describe('ShotstackEditTemplate/validate.ts', () => {
	test('If valid stringified json is passed, it should return a valid json', () => {
		const validStringified = JSON.stringify(defaultJSON);
		const result = validateTemplate(validStringified);
		expect(result).toEqual(defaultJSON);
	});
	test('Should throw an error if input is an invalid json', () => {
		const invalidJson = '<invalid>';
		expect(() => validateTemplate(invalidJson)).toThrowError(INVALID_JSON);
	});

	test('Should throw if input does not have a merge property, ', () => {
		const noMerge = JSON.stringify({ foo: 'bar' });
		expect(() => validateTemplate(noMerge)).toThrowError(MERGE_NOT_FOUND);
	});

	test('Should throw if merge is not an array', () => {
		const noArray = JSON.stringify({ merge: { foo: 'bar' } });
		expect(() => validateTemplate(noArray)).toThrowError(MERGE_NOT_ARRAY);
	});

	test('Should throw if merge is empty', () => {
		const emptyArray = JSON.stringify({ merge: [] });
		expect(() => validateTemplate(emptyArray)).toThrowError(MERGE_NOT_EMPTY);
	});
});

describe('ShotstackEditTemplate/validate.ts .validateMerge', () => {
	test('Should throw if a merge item is not an object', () => {
		const objectNotFound = ['Items'];
		expect(() => validateMerge(objectNotFound)).toThrowError(MERGE_INDEX_NOT_OBJECT);
	});
	test("Should throw if a merge item doesn't have the find prop", () => {
		const mergeNotFound = [{ foo: 'bar', replace: 'bar' }];
		expect(() => validateMerge(mergeNotFound)).toThrowError(FIND_NOT_FOUND);
	});
	test("Should throw if a merge item doesn't have the replace prop", () => {
		const replaceNotFound = [{ find: 'foo', bar: 'bar' }];
		expect(() => validateMerge(replaceNotFound)).toThrowError(REPLACE_NOT_FOUND);
	});
	test('Should throw if find prop is not a string', () => {
		const findNotString = [{ find: 1, replace: 'bar' }];
		expect(() => validateMerge(findNotString)).toThrowError(FIND_NOT_STRING);
	});
	test('Should throw if find prop is an empty string', () => {
		const findEmpty = [{ find: '', replace: 'bar' }];
		expect(() => validateMerge(findEmpty)).toThrowError(FIND_NOT_EMPTY);
	});
	test('The value of the replace prop should always be a string when it receives a non string value', () => {
		const replaceIsString = [{ find: 'bar', replace: null }];
		const result = validateMerge(replaceIsString);
		expect(result).toStrictEqual([{ find: 'bar', replace: 'null' }]);
	});

	test('The value of find and replace props on a merge item should always be a string', () => {
		const isAlwaysString = [{ find: 'bar', replace: 'foo' }];
		const result = validateMerge(isAlwaysString);
		expect(result).toStrictEqual([{ find: 'bar', replace: 'foo' }]);
	});
});

describe('validate.ts/stringifyIfNotString', () => {
	test('Should stringify any value', () => {
		const string = stringifyIfNotString(null);
		expect(string).toEqual('null');
	});
	test('If input is already string, should not stringify further', () => {
		const sample = 'hello';
		const stringifiedSample = JSON.stringify(sample);
		const string = stringifyIfNotString(sample);
		expect(string).toEqual(sample);
		expect(string).not.toEqual(stringifiedSample);
	});
});

describe('validate.ts/validateError', () => {
	test('When passing an error that extends Error, should return the same element', () => {
		const error = new Error('This is an error');
		const validError = validateError(error);
		expect(validError).toEqual(error);
	});
	test('When passing any other kind of error, should return an ValidationError element', () => {
		const error = 'ERROR';
		const validError = validateError(error);
		expect(validError).not.toEqual(error);
		expect(validError).toEqual(new ValidationError(UNEXPECTED_ERROR));
	});
	test('When passing an error like object with a message, should return a ValidationError with that message', () => {
		const errorLike = { message: 'Error' };
		const validError = validateError(errorLike);
		expect(validError).toEqual(new ValidationError(errorLike.message));
	});
});

describe('validate.ts/hasErrorMessage', () => {
	test('When passed an error-like object with a message, should return true', () => {
		const error = new Error('Message');
		const notError = 'Message';
		const isErrorLike = hasErrorMessage(error);
		const isNotErrorLike = hasErrorMessage(notError);
		expect(isErrorLike).toEqual(true);
		expect(isNotErrorLike).toEqual(false);
	});
});

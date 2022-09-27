import defaultJSON from '../routes/default.json';
import {
	FIND_NOT_EMPTY,
	FIND_NOT_FOUND,
	FIND_NOT_STRING,
	INVALID_JSON,
	MERGE_NOT_ARRAY,
	MERGE_NOT_EMPTY,
	MERGE_NOT_FOUND,
	REPLACE_NOT_FOUND
} from './constants';
import { validateTemplate, ValidationError, validateMerge } from './validate';
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

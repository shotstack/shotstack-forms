/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from '@jest/globals';
import { INVALID_JSON, MERGE_NOT_FOUND } from './constants';

import { ShotstackEditTemplateService } from './ShotstackEditTemplateService';

describe('ShotstackEditTemplateService', () => {
	test('If valid argument passed to constructor, it sets template object with populated merge array', () => {
		const editTemplateService = new ShotstackEditTemplateService({
			merge: [{ find: 'NAME', replace: 'John' }]
		});
		expect(editTemplateService.template.merge).toEqual([{ find: 'NAME', replace: 'John' }]);
	});

	test('If no argument passed to constructor, sets template object with empty merge array', () => {
		const editTemplateService = new ShotstackEditTemplateService();
		expect(editTemplateService.template.merge).toEqual([]);
	});
});

describe('ShotstackEditTempalteService._results', () => {
	const sampleJson = { merge: [{ find: 'Hello', replace: 'World' }] };
	const modifiedJson = { merge: [{ find: 'Hello', replace: 'Worlds' }] };

	test('Getter should return current result template value', () => {
		const editTemplateService = new ShotstackEditTemplateService(sampleJson);
		expect(editTemplateService.result).toEqual(sampleJson);
	});
	test('Setter should establish new updated value', () => {
		const editTemplateService = new ShotstackEditTemplateService(sampleJson);
		editTemplateService.result = modifiedJson;
		expect(editTemplateService.result).toEqual(modifiedJson);
	});
	test('Setter should call onChange event handlers with result as argument', () => {
		const editTemplateService = new ShotstackEditTemplateService(sampleJson);
		const mock = jest.fn();
		editTemplateService.on('change', mock);
		editTemplateService.result = modifiedJson;
		expect(mock).toHaveBeenCalled();
		expect(mock).toHaveBeenCalledWith(modifiedJson);
	});
});

describe('ShotstackEditTemplateService.setTemplateSource', () => {
	test('Correctly updates the source edit object', () => {
		const editTemplateService = new ShotstackEditTemplateService();

		expect(editTemplateService.template.merge).toEqual([]);

		editTemplateService.setTemplateSource('{ "merge": [ { "find": "test", "replace": "foo" } ] }');

		expect(editTemplateService.template.merge).toEqual([{ find: 'test', replace: 'foo' }]);
	});

	test('Throws error if not merge array passed', () => {
		const editTemplateService = new ShotstackEditTemplateService();
		expect(() => editTemplateService.setTemplateSource('<>')).toThrowError(INVALID_JSON);
		expect(() => editTemplateService.setTemplateSource('{}')).toThrowError(MERGE_NOT_FOUND);
	});
});

describe('ShotstackEditTemplateService.updateResultMergeFields', () => {
	test('Correctly updates the resulting merge array', () => {
		const editTemplateService = new ShotstackEditTemplateService({
			merge: [
				{
					find: 'test',
					replace: 'foo'
				}
			]
		});

		expect(editTemplateService.result.merge).toEqual([
			{
				find: 'test',
				replace: 'foo'
			}
		]);

		editTemplateService.updateResultMergeFields({ find: 'test', replace: 'foo_edited' });

		expect(editTemplateService.result.merge).toEqual([{ find: 'test', replace: 'foo_edited' }]);
	});
});

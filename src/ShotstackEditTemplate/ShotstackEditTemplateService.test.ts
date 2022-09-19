/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from '@jest/globals';

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

describe('ShotstackEditTemplateService.setTemplateSource', () => {
	test('Correctly updates the source edit object', () => {
		const editTemplateService = new ShotstackEditTemplateService();

		expect(editTemplateService.template.merge).toEqual([]);

		editTemplateService.setTemplateSource('{ "merge": [ { "find": "test", "replace": "foo" } ] }');

		expect(editTemplateService.template.merge).toEqual([{ find: 'test', replace: 'foo' }]);
	});

	test('Throws error if not merge array passed', () => {
		const editTemplateService = new ShotstackEditTemplateService();

		expect(() => editTemplateService.setTemplateSource('{}')).toThrowError(
			'No merge fields array was found'
		);
	});
});

describe('ShotstackEditTemplateService.updateResultMergeFields', () => {
	test('Correctly updates the result merge array', () => {
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

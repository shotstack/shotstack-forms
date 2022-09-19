/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from '@jest/globals';

import { ShotstackEditTemplateService } from './ShotstackEditTemplateService';

describe('MergeForm', () => {
	test('If valid argument passed to constructor sets template object with populated merge array', () => {
		const editTemplateService = new ShotstackEditTemplateService({
			merge: [{ find: 'NAME', replace: 'John' }]
		});
		expect(editTemplateService.template.merge).toEqual([{ find: 'NAME', replace: 'John' }]);
	});

	test('If no argument passed to constructor sets template object with empty merge array', () => {
		const editTemplateService = new ShotstackEditTemplateService();
		expect(editTemplateService.template.merge).toEqual([]);
	});
});

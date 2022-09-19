/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from '@jest/globals';

import { MergeForm } from './MergeForm';

describe('MergeForm', () => {
	test('If valid argument passed to constructor sets template object with populated merge array', () => {
		const mergeForm = new MergeForm({ merge: [{ find: 'NAME', replace: 'John' }] });
		expect(mergeForm.template.merge).toEqual([{ find: 'NAME', replace: 'John' }]);
	});

	test('If no argument passed to constructor sets template object with empty merge array', () => {
		const mergeForm = new MergeForm();
		expect(mergeForm.template.merge).toEqual([]);
	});
});

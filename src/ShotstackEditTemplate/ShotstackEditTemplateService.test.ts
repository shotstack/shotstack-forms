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

describe('ShotstackEditTemplateService.setTemplateSource', () => {
	test('Correctly updates the source edit object', () => {
		const editTemplateService = new ShotstackEditTemplateService();

		expect(editTemplateService.template.merge).toEqual([]);

		editTemplateService.setTemplateSource('{ "merge": [ { "find": "test", "replace": "foo" } ] }');

		expect(editTemplateService.template.merge).toEqual([{ find: 'test', replace: 'foo' }]);


	});

	test('Throws error if not merge array passed', () => {
		const editTemplateService = new ShotstackEditTemplateService();
		expect(() => editTemplateService.setTemplateSource("<>")).toThrowError(INVALID_JSON)
		expect(() => editTemplateService.setTemplateSource('{}')).toThrowError(MERGE_NOT_FOUND);
	});
});

describe("ShotstackEditTemplateService.castIntoType", () => {
	test('Correctly casts an element into a JSON valid type, or else returns a string', () => {
		let service = new ShotstackEditTemplateService()

		let number = service.castIntoType('1234')
		expect(number).toEqual(1234)

		let bFalse = service.castIntoType('false')
		expect(bFalse).toEqual(false)

		let bTrue = service.castIntoType('true')
		expect(bTrue).toEqual(true)

		let bNull = service.castIntoType('null')
		expect(bNull).toEqual(null)

		let string = service.castIntoType("A normal string")
		expect(string).toEqual("A normal string")

		let map = service.castIntoType(JSON.stringify({ foo: "bar" }))
		expect(map).toEqual({ foo: "bar" })

		let array = service.castIntoType(JSON.stringify(["1", 2, 3]))
		expect(array).toEqual(["1", 2, 3])
	})
	test("Every invalid JSON type should return a string", () => {
		let service = new ShotstackEditTemplateService()
		let fn = service.castIntoType("function(){}")
		expect(fn).toEqual("function(){}")

		let und = service.castIntoType('undefined')
		expect(und).toEqual('undefined')
	})
})
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

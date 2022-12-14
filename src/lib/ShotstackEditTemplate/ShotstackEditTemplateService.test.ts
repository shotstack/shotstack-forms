/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';
import { MERGE_NOT_FOUND } from './constants';
import { ShotstackEditTemplateService } from './ShotstackEditTemplateService';
import type { Asset } from './types';
import { ValidationError } from './validate';

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

describe('ShoststackEditTemplateService._error', () => {
	test('If passed a valid template, error should be null', () => {
		const shotstack = new ShotstackEditTemplateService({
			merge: [{ find: 'NAME', replace: 'John' }]
		});
		expect(shotstack.error).toEqual(null);
	});
	test('If passed an invalid template. error should be equal to Error object', () => {
		const shotstack = new ShotstackEditTemplateService();
		expect(shotstack.error).toBeInstanceOf(Error);
	});
	test('on Error, should trigger all error events', () => {
		const shotstack = new ShotstackEditTemplateService({
			merge: [{ find: 'NAME', replace: 'John' }]
		});
		const mock = jest.fn();
		shotstack.on('error', mock);
		shotstack.setTemplateSource('<>');
		expect(mock).toHaveBeenCalled();
	});
});
describe('ShotstackEditTemplateService._results', () => {
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

describe('ShotstackEditTemplateService.submit', () => {
	const sampleJson = { merge: [{ find: 'Hello', replace: 'World' }] };
	test('If state is in error, should not call any submit event handlers', () => {
		const editTemplateService = new ShotstackEditTemplateService('Invalid json');
		const mock = jest.fn();
		editTemplateService.on('submit', mock);
		expect(editTemplateService.submit).toThrow();
		expect(mock).not.toHaveBeenCalled();
	});
	test('When called, should call all submit event handlers', () => {
		const editTemplateService = new ShotstackEditTemplateService(sampleJson);
		const mock = jest.fn();
		editTemplateService.on('submit', mock);
		editTemplateService.submit();
		expect(mock).toHaveBeenCalledWith(sampleJson);
	});
});

describe('ShotstackEditTemplateService.setTemplateSource', () => {
	test('Correctly updates the source edit object', () => {
		const editTemplateService = new ShotstackEditTemplateService();

		expect(editTemplateService.template.merge).toEqual([]);

		editTemplateService.setTemplateSource('{ "merge": [ { "find": "test", "replace": "foo" } ] }');

		expect(editTemplateService.template.merge).toEqual([{ find: 'test', replace: 'foo' }]);
	});

	test('When providing an incorrect json, should update error property with error', () => {
		const editTemplateService = new ShotstackEditTemplateService();
		editTemplateService.setTemplateSource('<>');
		expect(editTemplateService.error).not.toEqual(null);
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

describe('ShotstackEditTemplateService.logger', () => {
	it('On error, by default, should call console.error with the error', () => {
		console.error = jest.fn();
		new ShotstackEditTemplateService({ foo: 'bar' });
		expect(console.error).toHaveBeenCalled();
		expect(console.error).toHaveBeenCalledWith(new ValidationError(MERGE_NOT_FOUND));
	});
});

describe('ShotstackEditTemplateService.getSrcPlaceholders', () => {
	it('Should return an array assets that have placeholder values', () => {
		const asset = { src: '{{Merge_field}}' };
		const local = { src: 'http://localhost' };
		const editTemplateService = new ShotstackEditTemplateService({
			merge: [{ find: 'NAME', replace: 'John' }],
			timeline: {
				tracks: [{ clips: [{ asset }, { asset: local }] }]
			}
		});
		const result = editTemplateService.getSrcPlaceholders();
		expect(result).toEqual([{ placeholder: asset.src, asset }]);
		expect(result).not.toEqual([
			{ placeholder: asset.src, asset },
			{ placeholder: local.src, asset: local }
		]);
	});
});

describe('Shotstack.updateSrc', () => {
	const mock = jest.fn();
	const fileInput = document.createElement('input');
	const file = new File(['Image mockup'], 'image.png', { type: 'image/png' });
	fireEvent.change(fileInput, {
		target: { files: [file] }
	});
	const mockFileList = fileInput.files;

	it('Should call all onUpload events', async () => {
		const asset: Asset = { src: '{{ Source }}' };
		const template = { merge: [], tracks: [{ clips: [{ asset }] }] };
		const shotstack = new ShotstackEditTemplateService(template);
		const onUpload = async (files: FileList | null) => {
			mock(files);
			return 'fizz';
		};
		shotstack.on('upload', onUpload);
		await shotstack.updateSrc(mockFileList, asset);
		expect(mock).toHaveBeenCalledWith(mockFileList);
	});
	it('Should update the source of the passed asset with the result of the upload handler', async () => {
		const asset: Asset = { src: '{{ Source }}' };
		const template = { merge: [], tracks: [{ clips: [{ asset }] }] };
		const shotstack = new ShotstackEditTemplateService(template);
		const resultValue = 'fizz';
		const onUpload = async (files: FileList | null) => {
			mock(files);
			return resultValue;
		};
		shotstack.on('upload', onUpload);
		await shotstack.updateSrc(mockFileList, asset);
		expect(asset.src).toEqual(resultValue);
	});
	it('If handler fails, it should not update the value of the asset', async () => {
		const asset: Asset = { src: '{{ Source }}' };
		const template = { merge: [], tracks: [{ clips: [{ asset }] }] };
		const shotstack = new ShotstackEditTemplateService(template);
		const onUpload = async () => {
			throw new Error('Error');
		};
		shotstack.on('upload', onUpload);
		await shotstack.updateSrc(mockFileList, asset);
		expect(asset.src).toEqual('{{ Source }}');
	});
});

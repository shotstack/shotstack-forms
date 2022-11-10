import type { Asset } from '../../../ShotstackEditTemplate/types';
import { highOrderHandleChange, type SourceFieldsCallback } from './utils';

describe('source/utils.ts', () => {
	describe('.highOrderHandleChange', () => {
		it('Given an asset and a callback, should return a new function that receives files and calls the callback with the asset and the files', () => {
			const asset: Asset = { src: '{{ VALUE }} ' };
			const mock = jest.fn();
			const fn = highOrderHandleChange(asset, mock);
			const files = null;
			fn(files);
			expect(mock).toHaveBeenCalledWith(files, asset);
		});
	});
});

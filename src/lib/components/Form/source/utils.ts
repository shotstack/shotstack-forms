import type { Asset } from '../../../ShotstackEditTemplate/types';

export type SourceFieldsCallback = (files: FileList | null, asset: Asset) => Promise<void>;
export const highOrderHandleChange =
	(asset: Asset, fn: SourceFieldsCallback) => async (files: FileList | null) =>
		await fn(files, asset);

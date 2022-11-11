import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';

export function formatJson(json: IParsedEditSchema) {
	return JSON.stringify(json, null, 2);
}

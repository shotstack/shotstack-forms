import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';

export function copyToClipboardAndAlert(result: IParsedEditSchema) {
	navigator.clipboard.writeText(JSON.stringify(result));
	alert('JSON copied to clipboard!');
}

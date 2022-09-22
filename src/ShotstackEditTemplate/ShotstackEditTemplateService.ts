import type { IParsedEditSchema, JSONValidTypes, MergeField } from './types'
import { validateTemplate } from './validate';

export class ShotstackEditTemplateService {
	public template: IParsedEditSchema;
	public result: IParsedEditSchema;

	constructor(template: any = { merge: [] }) {
		this.template = template;
		this.result = template;
	}

	setTemplateSource(jsonTemplate: string): IParsedEditSchema {
		try {
			const parsedTemplate = validateTemplate(jsonTemplate);
			this.template = parsedTemplate;
			this.result = parsedTemplate;
			return parsedTemplate;
		} catch (err) {
			if (err instanceof Error) throw err;
			throw new Error('Error parsing JSON');
		}
	}

	castIntoType(input: string): JSONValidTypes {
		if (!isNaN(Number(input)) && input.length > 0) return Number(input)
		try {
			let parsed = JSON.parse(input);
			return parsed
		}
		catch (error) {
			return input;
		}
	}

	updateResultMergeFields(mergeFieldInput: { find: string, replace: string }) {
		const { find, replace } = mergeFieldInput;
		const validMergeField: MergeField = { find, replace: this.castIntoType(replace) };
		const merge = this.result.merge.map((mergeField) =>
			mergeField?.find === mergeFieldInput.find ? validMergeField : mergeField
		);
		this.result = { ...this.result, merge };
		return merge;
	}
}

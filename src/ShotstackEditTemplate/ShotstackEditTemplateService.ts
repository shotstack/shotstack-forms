type JSONValidTypes = string | number | boolean | Array<JSONValidTypes> | JSONLikeObject

interface JSONLikeObject {
	[key: string]: JSONValidTypes
}

export interface MergeField {
	find: string;
	replace: JSONValidTypes;
}

interface IParsedEditSchema {
	merge: Array<MergeField> | [];
	[key: string]: any;
}

export class ShotstackEditTemplateService {
	public template: IParsedEditSchema;
	public result: IParsedEditSchema;

	constructor(template: any = { merge: [] }) {
		this.template = template;
		this.result = template;
	}

	validateMergeArray(editTemplate: any) {
		return Boolean(editTemplate.merge);
	}

	setTemplateSource(jsonTemplate: string): IParsedEditSchema {
		try {
			const parsedTemplate = JSON.parse(jsonTemplate);

			if (!this.validateMergeArray(parsedTemplate)) {
				throw new Error('No merge fields array was found');
			}
			this.template = parsedTemplate;
			this.result = parsedTemplate;
			return parsedTemplate;
		} catch (err: any) {
			if (err.message) {
				throw new Error(err.message);
			}
			throw new Error('Error parsing JSON');
		}
	}

	updateResultMergeFields(mergeFieldInput: { find: string, replace: string }) {
		const { find, replace } = mergeFieldInput;
		const validMergeField: MergeField = { find, replace };

		if (!isNaN(Number(replace)) && replace.length > 0) {
			validMergeField.replace = Number(replace);
		}
		else {
			try {
				validMergeField.replace = JSON.parse(replace);
			}
			catch (error) {
				validMergeField.replace = replace;
			}
		}

		const merge = this.result.merge.map((mergeField) =>
			mergeField?.find === mergeFieldInput.find ? validMergeField : mergeField
		);
		this.result = { ...this.result, merge };
		return merge;
	}
}

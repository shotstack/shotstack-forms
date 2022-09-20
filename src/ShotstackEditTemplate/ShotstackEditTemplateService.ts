export interface MergeField {
	find: string;
	replace: string | number | boolean;
}

interface IParsedShotstackEditObject {
	merge: Array<MergeField> | [];
	[key: string]: any;
}

export class ShotstackEditTemplateService {
	public template: IParsedShotstackEditObject;
	public result: IParsedShotstackEditObject;

	constructor(defaultTemplate?: any) {
		if (defaultTemplate) {
			this.template = defaultTemplate;
			this.result = defaultTemplate;
		} else {
			this.template = { merge: [] };
			this.result = { merge: [] };
		}
	}

	validateMergeArray(editTemplateObject: any) {
		return !!editTemplateObject.merge;
	}

	setTemplateSource(JSONtemplate: string): IParsedShotstackEditObject {
		try {
			const parsedTemplate = JSON.parse(JSONtemplate);

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
			throw new Error('Error parsing JSON.');
		}
	}

	updateResultMergeFields(mergeFieldInput: MergeField) {
		const { find } = mergeFieldInput;
		const replace = mergeFieldInput.replace
		const validMergeField = { find, replace };

		if (!isNaN(Number(replace))) {
			validMergeField.replace = Number(replace);
		} else if (replace === 'true' || replace === 'false') {
			validMergeField.replace = replace === 'true' ? true : false;
		} else {
			try {
				validMergeField.replace = JSON.parse(replace);
			}
			catch (error) {
				validMergeField.replace = replace
			}
		}

		const merge = this.result.merge.map((mergeField) =>
			mergeField?.find === mergeFieldInput.find ? validMergeField : mergeField
		);
		this.result = { ...this.result, merge: merge };
		return merge;
	}
}
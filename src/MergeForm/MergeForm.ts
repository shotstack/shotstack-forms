interface MergeField {
	find: string;
	replace: string;
}

interface IParsedShotstackEditObject {
	merge: Array<MergeField> | [];
	[key: string]: any;
}

export class MergeForm {
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

	setTemplateSource(jsonEditObject: string): IParsedShotstackEditObject {
		try {
			const parsedJSONUserInput = JSON.parse(jsonEditObject);
			this.template = parsedJSONUserInput;
			this.result = this.template;
			return parsedJSONUserInput;
		} catch (err: any) {
			if (err.message) {
				throw new Error(err.message);
			}
			throw new Error('Error parsing JSON.');
		}
	}

	updateResultMergeFields(mergeFieldInput: MergeField) {
		const merge = this.result.merge.map((mergeField) =>
			mergeField.find === mergeFieldInput.find ? mergeFieldInput : mergeField
		);
		this.result = { ...this.result, merge };
		return merge;
	}
}

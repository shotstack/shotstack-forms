interface MergeField {
	find: string;
	replace: string;
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
		const merge = this.result.merge.map((mergeField) =>
			mergeField?.find === mergeFieldInput.find ? mergeFieldInput : mergeField
		);
		this.result = { ...this.result, merge: merge };
		return merge;
	}
}

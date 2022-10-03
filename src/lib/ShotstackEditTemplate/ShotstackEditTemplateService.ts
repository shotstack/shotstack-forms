import type {
	IParsedEditSchema,
	IShotstackEvents,
	IShotstackHandlers,
	MergeField,
	TemplateEvent
} from './types';
import { validateTemplate } from './validate';

export class ShotstackEditTemplateService {
	public template: IParsedEditSchema;
	public result: IParsedEditSchema;
	private handlers: IShotstackHandlers;
	constructor(template?: unknown) {
		const parsedInitialTemplate = this.parseInitialTemplate(template);
		this.template = parsedInitialTemplate;
		this.result = parsedInitialTemplate;
		this.handlers = { change: [], submit: [] };
	}

	on(eventName: TemplateEvent, callback: IShotstackEvents[TemplateEvent]) {
		this.handlers[eventName].push(callback);
	}

	submit() {
		this.handlers.submit.forEach((fn) => fn(this.result));
	}

	change() {
		this.handlers.change.forEach((fn) => fn(this.result));
	}

	parseInitialTemplate(initialTemplate: unknown) {
		const isString = typeof initialTemplate === 'string';
		const stringified = isString ? initialTemplate : JSON.stringify(initialTemplate);
		try {
			return validateTemplate(stringified);
		} catch (error) {
			return { merge: [] };
		}
	}
	setTemplateSource(jsonTemplate: string): IParsedEditSchema {
		try {
			const parsedTemplate = validateTemplate(jsonTemplate);
			this.template = parsedTemplate;
			this.result = parsedTemplate;
			this.change();
			return parsedTemplate;
		} catch (err) {
			if (err instanceof Error) throw err;
			throw new Error('Error parsing JSON');
		}
	}

	updateResultMergeFields(mergeFieldInput: { find: string; replace: string }) {
		const { find, replace } = mergeFieldInput;
		const validMergeField: MergeField = { find, replace };
		const merge = this.result.merge.map((mergeField) =>
			mergeField?.find === mergeFieldInput.find ? validMergeField : mergeField
		);
		this.result = { ...this.result, merge };
		this.change();
		return merge;
	}
}

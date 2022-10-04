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
	private _result: IParsedEditSchema;
	private handlers: IShotstackHandlers;
	constructor(template?: unknown) {
		const parsedInitialTemplate = this.parseInitialTemplate(template);
		this.template = parsedInitialTemplate;
		this._result = parsedInitialTemplate;
		this.handlers = { change: [], submit: [] };
	}
	public set result(validParsedTemplate: IParsedEditSchema) {
		this._result = validParsedTemplate;
		this.handlers.change.forEach((fn) => fn(validParsedTemplate));
	}
	public get result() {
		return this._result;
	}

	on(eventName: TemplateEvent, callback: IShotstackEvents[TemplateEvent]) {
		this.handlers[eventName].push(callback);
	}

	submit() {
		this.handlers.submit.forEach((fn) => fn(this.result));
	}

	parseInitialTemplate(initialTemplate: unknown) {
		const isString = typeof initialTemplate === 'string';
		const stringified = isString ? initialTemplate : JSON.stringify(initialTemplate);
		try {
			const validTemplate = validateTemplate(stringified);
			return validTemplate;
		} catch (error) {
			return { merge: [] };
		}
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

	updateResultMergeFields(mergeFieldInput: { find: string; replace: string }) {
		const { find, replace } = mergeFieldInput;
		const validMergeField: MergeField = { find, replace };
		const merge = this.result.merge.map((mergeField) =>
			mergeField?.find === mergeFieldInput.find ? validMergeField : mergeField
		);
		this.result = { ...this.result, merge };
		return merge;
	}
}

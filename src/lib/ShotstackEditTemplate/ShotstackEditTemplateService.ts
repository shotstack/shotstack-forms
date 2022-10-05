import type { IParsedEditSchema, IShotstackEvents, IShotstackHandlers, MergeField } from './types';
import { validateError, validateTemplate, stringifyIfNotString } from './validate';

export class ShotstackEditTemplateService {
	public template: IParsedEditSchema;
	private _result: IParsedEditSchema;
	private _error: null | Error;
	private handlers: IShotstackHandlers;

	constructor(template?: unknown) {
		this._error = null;
		this.template = { merge: [] };
		this._result = { merge: [] };
		this.handlers = { change: [], submit: [], error: [] };
		this.setTemplateSource(template);
	}

	public set error(err: null | Error) {
		const previousError = this._error;
		this._error = err;
		if (err !== null) this.handlers.error.forEach((fn) => fn(err, previousError));
	}

	public get error(): null | Error {
		return this._error;
	}

	public set result(validParsedTemplate: IParsedEditSchema) {
		this._result = validParsedTemplate;
		this.handlers.change.forEach((fn) => fn(validParsedTemplate));
	}
	public get result() {
		return this._result;
	}

	on<K extends keyof IShotstackEvents>(eventName: K, callback: IShotstackEvents[K]) {
		this.handlers[eventName].push(callback);
	}

	submit() {
		this.handlers.submit.forEach((fn) => fn(this.result));
	}

	setTemplateSource(jsonTemplate: unknown) {
		try {
			const parsedTemplate = validateTemplate(stringifyIfNotString(jsonTemplate));
			this.template = parsedTemplate;
			this.result = parsedTemplate;
			this.error = null;
		} catch (err) {
			const validError = validateError(err);
			this.error = validError;
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

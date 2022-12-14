import type {
	Asset,
	IParsedEditSchema,
	IShotstackEvents,
	IShotstackHandlers,
	MergeField,
	Placeholder
} from './types';
import {
	validateError,
	validateTemplate,
	stringifyIfNotString,
	removeCurlyBraces
} from './validate';

export class ShotstackEditTemplateService {
	public template: IParsedEditSchema;
	private _result: IParsedEditSchema;
	private _error: null | Error;
	private handlers: IShotstackHandlers;

	constructor(template?: unknown) {
		this._error = null;
		this.template = { merge: [] };
		this._result = { merge: [] };
		this.handlers = {
			change: [],
			submit: [],
			error: [this.logger],
			upload: []
		};
		this.setTemplateSource(template);
	}

	public set error(err: null | Error) {
		const previousError = (this._error && { ...this._error }) || null;
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

	off<K extends keyof IShotstackEvents>(eventName: K, callback: IShotstackEvents[K]) {
		this.handlers = {
			...this.handlers,
			[eventName]: this.handlers[eventName].filter((fn) => fn !== callback)
		};
	}

	submit() {
		if (this.error) throw this.error;
		else this.handlers.submit.forEach((fn) => fn(this.result));
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

	updateResultMergeFields(updatedField: MergeField, fieldReference?: MergeField) {
		const reference = fieldReference
			? fieldReference
			: this.getMergeFieldItem({ find: updatedField.find });
		this.result.merge.forEach((el) => {
			if (el !== reference) return;
			el.find = updatedField.find;
			el.replace = updatedField.replace;
		});
		this.result = { ...this.result, merge: this.result.merge };
		return this.result.merge;
	}

	logger(error: unknown) {
		console.error(error);
	}

	addMergeField(field: MergeField) {
		this.setTemplateSource({
			...this.result,
			merge: [...this.result.merge, field]
		});
	}

	removeMergeField(field: MergeField) {
		this.setTemplateSource({
			...this.result,
			merge: this.result.merge.filter((k) => k !== field)
		});
	}

	getMergeFieldItem(field: { find?: string; replace?: string }) {
		if (Object.keys(field).length === 0) return undefined;
		const finderCallback = function (k: MergeField) {
			let prop: keyof MergeField;
			for (prop in field) {
				if (k[prop] !== field[prop]) return false;
			}
			return true;
		};
		return this.result.merge.find(finderCallback);
	}

	getSrcPlaceholders(): Placeholder[] {
		if (!this.template.timeline || !this.template.timeline.tracks) return [];
		const tracks = this.template.timeline.tracks;
		const result: Placeholder[] = [];
		for (let i = 0; i < tracks.length; i++) {
			for (let j = 0; j < tracks[i].clips.length; j++) {
				const key: Placeholder = {
					placeholder: tracks[i].clips[j].asset.src,
					asset: tracks[i].clips[j].asset
				};
				const isPlaceholderValue = removeCurlyBraces(key.placeholder) !== key.placeholder;
				isPlaceholderValue && result.push(key);
			}
		}
		return result;
	}

	async updateSrc(files: FileList | null, asset: Asset) {
		let result = asset.src;
		for (let i = 0; i < this.handlers.upload.length; i++) {
			const handler = this.handlers.upload[i];
			try {
				result = await handler(files);
				if (!result) throw new Error(`Asset URL not found at upload handler index ${i}`);
				else asset.src = result;
			} catch (error) {
				console.error(error);
			}
		}
		this.handlers.change.forEach((fn) => fn(this.result));
	}
}

export type JSONValidTypes = string | number | boolean | null | JSONValidTypes[] | JSONLikeObject;

export interface JSONLikeObject {
	[key: string]: JSONValidTypes;
}

export interface MergeField {
	find: string;
	replace: string;
}

export interface IParsedEditSchema {
	merge: MergeField[];
	[key: string]: unknown;
	src?: string;
}

export type TemplateEvent = 'submit' | 'change' | 'error';
export type ResultTemplateCallback = (resultTemplate: IParsedEditSchema) => void;
export type ErrorCallback = (err: unknown, previousError?: unknown) => void;
export type SubmitCallback = (resultTemplate: IParsedEditSchema) => void;

export interface IShotstackEvents {
	change: ResultTemplateCallback;
	submit: SubmitCallback;
	error: ErrorCallback;
}

type ShotstackHandlersArray<T, K extends keyof T> = T[K][];

export type IShotstackHandlers = {
	[key in TemplateEvent]: ShotstackHandlersArray<IShotstackEvents, key>;
};

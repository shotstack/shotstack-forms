export type JSONValidTypes = string | number | boolean | null | JSONValidTypes[] | JSONLikeObject;

export interface JSONLikeObject {
	[key: string]: JSONValidTypes;
}

export interface MergeField {
	find: string;
	replace: string;
}

export interface IParsedEditSchema {
	timeline?: Timeline;
	merge: MergeField[];
	[key: string]: unknown;
}

export type TemplateEvent = 'submit' | 'change' | 'error' | 'upload';
export type ResultTemplateCallback = (resultTemplate: IParsedEditSchema) => void;
export type ErrorCallback = (err: unknown, previousError?: unknown) => void;
export type SubmitCallback = (resultTemplate: IParsedEditSchema) => void;
export type UploadCallback = (files: FileList | null) => string;

export interface IShotstackEvents {
	change: ResultTemplateCallback;
	submit: SubmitCallback;
	error: ErrorCallback;
	upload: UploadCallback;
}

type ShotstackHandlersArray<T, K extends keyof T> = T[K][];

export type IShotstackHandlers = {
	[key in TemplateEvent]: ShotstackHandlersArray<IShotstackEvents, key>;
};

export type Clip = {
	asset: Asset;
	[key: string]: unknown;
};

export type Asset = {
	src: string;
	[key: string]: unknown;
};

export type Track = {
	clips: Clip[];
	[key: string]: unknown;
};

export type Timeline = {
	tracks: Track[];
	[key: string]: unknown;
};

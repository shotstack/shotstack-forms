export type JSONValidTypes = string | number | boolean | null | JSONValidTypes[]| JSONLikeObject

export interface JSONLikeObject {
	[key: string]: JSONValidTypes
}

export interface MergeField {
	find: string;
	replace: JSONValidTypes;
}

export interface IParsedEditSchema {
	merge: MergeField[];
	[key: string]: any;
}

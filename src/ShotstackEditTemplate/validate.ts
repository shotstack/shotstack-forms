import { FIND_MUST_BE_STRING, FIND_NOT_EMPTY, FIND_NOT_FOUND, MERGE_MUST_BE_ARRAY, MERGE_NOT_EMPTY, MERGE_NOT_FOUND, REPLACE_NOT_FOUND } from "./constants"
import type { IParsedEditSchema } from "./types"

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
    }
}

function propertyDoesNotExist(prop: string, json: any) {
    return json[prop] === undefined
}

function isNotInstanceOfArray(prop: string, json: any) {
    return !(json[prop] instanceof Array)
}

function isNotString(prop: string, json: any) {
    return !(typeof json[prop] === 'string')
}

function isEmptyString(prop: string, json: any) {
    return !(typeof json[prop] === 'string' && json[prop].length > 0)
}
function isEmptyArray(prop: string, json: any) {
    return !(json[prop] instanceof Array && json[prop].length > 0)
}
export function validateTemplate(jsonTemplate: string): IParsedEditSchema {
    try {
        let parsed = JSON.parse(jsonTemplate)
        if (propertyDoesNotExist("merge", parsed)) throw new ValidationError(MERGE_NOT_FOUND)
        if (isNotInstanceOfArray("merge", parsed)) throw new ValidationError(MERGE_MUST_BE_ARRAY)
        if (isEmptyArray('merge', parsed)) throw new ValidationError(MERGE_NOT_EMPTY)
        parsed.merge.forEach((field: any, index: number) => {
            if (propertyDoesNotExist("find", field)) throw new ValidationError(FIND_NOT_FOUND)
            if (propertyDoesNotExist("replace", field)) throw new ValidationError(REPLACE_NOT_FOUND)
            if (isNotString("find", field)) throw new ValidationError(FIND_MUST_BE_STRING)
            if (isEmptyString('find', field)) throw new ValidationError(FIND_NOT_EMPTY)
        })
        return parsed as IParsedEditSchema
    }
    catch (error) {
        if (error instanceof ValidationError) throw error
        else if (error.message) throw error
        else throw new ValidationError('There was a problem parsing the template json')
    }
}

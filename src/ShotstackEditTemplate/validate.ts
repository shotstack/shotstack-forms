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
        if (propertyDoesNotExist("merge", parsed)) throw new ValidationError("A 'merge' property is required")
        if (isNotInstanceOfArray("merge", parsed)) throw new ValidationError("Property 'merge' must be an array")
        if (isEmptyArray('merge', parsed)) throw new ValidationError("Property 'merge' must contain at least one element")
        parsed.merge.forEach((field: any, index: number) => {
            if (propertyDoesNotExist("find", field)) throw new ValidationError(`Missing property 'find' at index ${index}`)
            if (propertyDoesNotExist("replace", field)) throw new ValidationError(`Missing property 'replace' at index ${index}`)
            if (isNotString("find", field)) throw new ValidationError(`Property 'find' at index ${index} must be a string`)
            if (isEmptyString('find', field)) throw new ValidationError(`Value of property 'find' at index ${index} must not be empty`)
        })
        return parsed as IParsedEditSchema
    }
    catch (error) {
        if (error instanceof ValidationError) throw error
        else if (error.message) throw error
        else throw new ValidationError('There was a problem parsing the template json')
    }
}

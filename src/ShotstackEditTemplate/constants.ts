export const INVALID_JSON = /^Unexpected token . in JSON at position .+$/
export const MERGE_NOT_FOUND = "A 'merge' property is required"
export const MERGE_MUST_BE_ARRAY = "Property 'merge' must be an array"
export const MERGE_NOT_EMPTY = "Property 'merge' must contain at least one element"
export const FIND_NOT_FOUND = `A 'find' property is required on every element inside 'merge'`
export const FIND_MUST_BE_STRING = `Every 'find' property inside 'merge' must be of type string`
export const FIND_NOT_EMPTY = `Every 'find' property inside 'merge' must be a string of length equal to or higher than one`
export const REPLACE_NOT_FOUND = `A 'replace' property is required on every element inside 'merge'`

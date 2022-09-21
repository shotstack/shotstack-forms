import defaultJSON from '../routes/default.json'
import { FIND_NOT_EMPTY, FIND_NOT_FOUND, FIND_NOT_STRING, INVALID_JSON, MERGE_NOT_ARRAY, MERGE_NOT_EMPTY, MERGE_NOT_FOUND, REPLACE_NOT_FOUND } from './constants'
import { validateTemplate, ValidationError } from './validate'
describe("ShotstackEditTemplate/validate.ts", () => {
    test("If valid stringified json is passed, it should return a valid json", () => {
        let validStringified = JSON.stringify(defaultJSON)
        let result = validateTemplate(validStringified)
        expect(result).toEqual(defaultJSON)
    })
    test("Should throw an error if input is an invalid json", () => {
        let invalidJson = "<invalid>"
        expect(() => validateTemplate(invalidJson)).toThrowError(INVALID_JSON)
    })

    test("Should throw if input does not have a merge property, ", () => {
        let noMerge = JSON.stringify({ foo: "bar" })
        expect(() => validateTemplate(noMerge)).toThrowError(MERGE_NOT_FOUND)
    })

    test("Should throw if merge is not an array", () => {
        let noArray = JSON.stringify({ merge: { foo: "bar" } })
        expect(() => validateTemplate(noArray)).toThrowError(MERGE_NOT_ARRAY)
    })

    test("Should throw if merge is empty", () => {
        let emptyArray = JSON.stringify({ merge: [] })
        expect(() => validateTemplate(emptyArray)).toThrowError(MERGE_NOT_EMPTY)
    })

    test("Should throw if a merge item doesn't have the find prop", () => {
        let noFind = JSON.stringify({ merge: [{ find: "foo", replace: "bar" }, {}] })
        expect(() => validateTemplate(noFind)).toThrowError(FIND_NOT_FOUND)
    })

    test("Should throw if a merge item doesn't have the replace prop", () => {
        let noFind = JSON.stringify({ merge: [{ find: "foo" }] })
        expect(() => validateTemplate(noFind)).toThrowError(REPLACE_NOT_FOUND)
    })

    test("Should throw if find prop is not a string", () => {
        let notString = JSON.stringify({ merge: [{ find: 123, replace: "bar" }] })
        expect(() => validateTemplate(notString)).toThrowError(FIND_NOT_STRING)
    })

    test("Should throw if find prop is an empty string", () => {
        let notString = JSON.stringify({ merge: [{ find: "", replace: "bar" }] })
        expect(() => validateTemplate(notString)).toThrowError(FIND_NOT_EMPTY)
    })
})


import defaultJSON from '../routes/default.json'
import { INVALID_JSON, MERGE_NOT_FOUND } from './constants'
import { validateTemplate, ValidationError } from './validate'
describe("ShotstackEditTemplate/validate.ts", () => {
    test("If valid stringified json is passed, it should return a valid json", () => {
        let validStringified = JSON.stringify(defaultJSON)
        let result = validateTemplate(validStringified)
        expect(result).toEqual(defaultJSON)
    })
    test("If input is an invalid json, it should throw an error", () => {
        let invalidJson = "<invalid>"
        expect(() => validateTemplate(invalidJson)).toThrowError(INVALID_JSON)
    })

    test("If input does not have a merge property, it should throw", () => {
        let noMerge = JSON.stringify({ foo: "bar" })
        expect(() => validateTemplate(noMerge)).toThrowError(MERGE_NOT_FOUND)
    })

})


// import {describe} from "node:test";
import {validateNumber, validateString} from "../src/validation.service";

describe("test validateString", () => {

    test("should not throw exception for valid string", () => {
        expect(() => validateString("value", "test")).not.toThrow()
    })

    test("should not return same value", () => {
        expect(validateString("value", "test")).toBe("value")
    })

    test("should not return trimmed value", () => {
        expect(validateString("  value ", "test")).toBe("value")
    })

    test("should throw for empty string", () => {
        expect(() => validateString("", "test")).toThrow()
    })

    test("should throw for blank string", () => {
        expect(() => validateString(" ", "test")).toThrow()
    })

    test("should throw for true boolean value", () => {
        expect(() => validateString(true, "test")).toThrow()
    })

    test("should throw for false boolean value", () => {
        expect(() => validateString(false, "test")).toThrow()
    })
})

describe("test validateNumber", () => {
    test("should not throw exception for valid number but string type", () => {
        expect(() => validateNumber("123", "test")).not.toThrow()
    })

    test("should not throw exception for valid number but number type", () => {
        expect(() => validateNumber(123, "test")).not.toThrow()
    })

    test("should return the number of string type", () => {
        expect(validateNumber("123", "test")).toBe(123)
    })

    test("should return the same number as input", () => {
        expect(validateNumber(123, "test")).toBe(123)
    })

    test("should return the zero for the empty string input", () => {
        expect(validateNumber("", "test")).toBe(0)
    })

    test("should return the zero for the blank string input", () => {
        expect(validateNumber(" ", "test")).toBe(0)
    })

    test("should throw for true boolean value", () => {
        expect(() => validateNumber(true, "test")).toThrow()
    })

    test("should throw for false boolean value", () => {
        expect(() => validateNumber(false, "test")).toThrow()
    })
})

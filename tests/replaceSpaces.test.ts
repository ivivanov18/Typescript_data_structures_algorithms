import { expect } from "chai";
import { replaceSpaces } from "../Strings Algorithms/replaceSpaces";

describe("replaceSpaces", () => {
    it("should replace spaces with %20 in a standard case", () => {
        const result = replaceSpaces("Mr John Smith    ", 13);
        expect(result).to.equal("Mr%20John%20Smith");
    });

    it("should return the same string if there are no spaces", () => {
        const result = replaceSpaces("HelloWorld", 10);
        expect(result).to.equal("HelloWorld");
    });

    it("should replace spaces correctly when spaces are at the end", () => {
        const result = replaceSpaces("Hello World      ", 11);
        expect(result).to.equal("Hello%20World");
    });

    it("should handle a string with only spaces", () => {
        const result = replaceSpaces("       ", 3);
        expect(result).to.equal("%20%20%20");
    });

    it("should handle an empty string", () => {
        const result = replaceSpaces("", 0);
        expect(result).to.equal("");
    });
});

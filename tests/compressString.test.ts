import { expect } from "chai";
import { compressString } from "../Strings Algorithms/compressString";

describe("compressString Function", () => {
    it("should compress a string with repeated characters", () => {
        expect(compressString("aaabbbbbcc")).to.equal("a3b5c2");
    });

    it("should return the original string if compression does not reduce length", () => {
        expect(compressString("abcd")).to.equal("abcd"); // No compression benefit
    });

    it("should handle strings with only one character", () => {
        expect(compressString("a")).to.equal("a"); // Single character
    });

    it("should handle strings with two of the same character", () => {
        expect(compressString("aa")).to.equal("aa"); // No compression benefit
    });

    it("should handle strings where compression equals original length", () => {
        expect(compressString("aabb")).to.equal("aabb"); // Compressed "a2b2" has same length
    });

    it("should handle empty string input", () => {
        expect(compressString("")).to.equal(""); // Edge case: empty input
    });

    it("should compress a string with all characters the same", () => {
        expect(compressString("aaaaaa")).to.equal("a6");
    });
});

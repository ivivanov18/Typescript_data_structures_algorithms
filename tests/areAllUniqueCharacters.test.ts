import { expect } from "chai";
import { areAllCharactersUnique } from "../Strings Algorithms/areAllUniqueCharacters";

describe("areAllCharactersUnique", () => {
    it("should return true", () => {
        const str = "abcdefgh";
        const result = areAllCharactersUnique(str);
        expect(result).to.be.true;
    });

    it("should return false", () => {
        const str = "not not unique";
        const result = areAllCharactersUnique(str);
        expect(result).to.be.false;
    });
});

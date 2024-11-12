import { expect } from "chai";
import { oneAway } from "../Strings Algorithms/oneAway";

describe("oneAway Function", () => {
    it("should return true for one replacement", () => {
        expect(oneAway("pale", "bale")).to.be.true;
    });

    it("should return true for one insertion", () => {
        expect(oneAway("pale", "pales")).to.be.true;
    });

    it("should return true for one deletion", () => {
        expect(oneAway("pales", "pale")).to.be.true;
    });

    it("should return false for more than one edit", () => {
        expect(oneAway("pale", "bake")).to.be.false;
    });

    it("should return true for identical strings", () => {
        expect(oneAway("pale", "pale")).to.be.true;
    });

    it("should return false for completely different strings", () => {
        expect(oneAway("abc", "xyz")).to.be.false;
    });

    it("should return false for two replacements", () => {
        expect(oneAway("pale", "bake")).to.be.false;
    });

    it("should return false for string length difference greater than one", () => {
        expect(oneAway("pale", "paledo")).to.be.false;
    });
});

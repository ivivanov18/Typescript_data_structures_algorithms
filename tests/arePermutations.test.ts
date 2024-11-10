import { expect } from "chai";
import {
    arePermutationsV1,
    arePermutationsV2,
} from "../Strings Algorithms/arePermutations";

describe("Are two strings permutations", () => {
    describe("arePermutationsV1", () => {
        it("They should be permutations", () => {
            const s1 = "hello";
            const s2 = "olleh";
            expect(arePermutationsV1(s1, s2)).to.be.true;
        });

        it("They should not be permutations because of length", () => {
            const s1 = "check it";
            const s2 = "hello";

            expect(arePermutationsV1(s1, s2)).to.be.false;
        });

        it("They should not be permutations", () => {
            const s1 = "holla";
            const s2 = "hello";

            expect(arePermutationsV1(s1, s2)).to.be.false;
        });
    });

    describe("arePermutationsV2", () => {
        it("They should be permutations", () => {
            const s1 = "hello";
            const s2 = "olleh";
            expect(arePermutationsV2(s1, s2)).to.be.true;
        });

        it("They should not be permutations because of length", () => {
            const s1 = "check it";
            const s2 = "hello";

            expect(arePermutationsV2(s1, s2)).to.be.false;
        });

        it("They should not be permutations", () => {
            const s1 = "holla";
            const s2 = "hello";

            expect(arePermutationsV2(s1, s2)).to.be.false;
        });
    });
});

import { expect } from "chai";
import { HashTable } from "../hashTables";

let hashTable: HashTable;

describe("Hash Tables", () => {
  beforeEach(() => {
    hashTable = new HashTable();
    hashTable.set("salut", "hi");
    hashTable.set("bonjour", "good morning");
    hashTable.set("bonsoir", "good night");
    hashTable.set("au revoir", "goodbye");
  });

  describe("Hash function", () => {
    it("Can hash correctly string elements", () => {
      const strToHash = "salut";
      expect(hashTable.hash(strToHash)).to.equal(40);
      const strToHash1 = "bonjour";
      expect(hashTable.hash(strToHash1)).to.equal(38);
      const strToHash2 = "bonsoir";
      expect(hashTable.hash(strToHash2)).to.equal(42);
      const strToHash3 = "au revoir";
      expect(hashTable.hash(strToHash3)).to.equal(1);
    });
  });

  describe("Set function", () => {
    it("Can set the key and values at the correct index", () => {
      expect(hashTable.keyMap[40]).to.eql([["salut", "hi"]]);
      expect(hashTable.keyMap[38]).to.eql([["bonjour", "good morning"]]);
      expect(hashTable.keyMap[42]).to.eql([["bonsoir", "good night"]]);
      expect(hashTable.keyMap[1]).to.eql([["au revoir", "goodbye"]]);
    });
  });

  describe("Get function", () => {
    it("Can get the correct values for the given key", () => {
      expect(hashTable.get("salut")).to.equal("hi");
      expect(hashTable.get("bonjour")).to.equal("good morning");
      expect(hashTable.get("bonsoir")).to.equal("good night");
      expect(hashTable.get("au revoir")).to.equal("goodbye");
    });
  });
});

import { expect } from "chai";
import { BinarySearchTree } from "../binarySearchTree";

describe("BINARY SEARCH TREE", () => {
  it("Should create a binary search tree with root node equal null", () => {
    const newBST = new BinarySearchTree();
    expect(newBST.root).to.be.null;
  });

  describe("Should insert at the right place", () => {
    const bst = new BinarySearchTree();
    it("Should insert at the right place when no value", () => {
      bst.insert(10);
      expect(bst.root!.value).to.be.equal(10);
    });

    it("Should insert at the right place when smaller that root node", () => {
      bst.insert(5);
      expect(bst.root!.left!.value).to.be.equal(5);
    });

    it("Should insert at the right place when larger than root node", () => {
      bst.insert(15);
      expect(bst.root!.right!.value).to.be.equal(15);
    });

    it("Should insert at the right place when smaller value is added that the value of the root right node", () => {
      bst.insert(2);
      expect(bst.root!.left!.left!.value).to.be.equal(2);
    });

    it("Should insert at the right place when larger value is added than the value of root left node", () => {
      bst.insert(7);
      expect(bst.root!.left!.right!.value).to.be.equal(7);
    });
  });

  describe("Should use contain", () => {
    const bst = new BinarySearchTree();
    bst.insert(10).insert(5).insert(15).insert(2).insert(7);

    it("Should return true", () => {
      expect(bst.contains(7)).to.be.true;
    });

    it("Should return false", () => {
      expect(bst.contains(100)).to.false;
    });

    it("Should return false if tree is empty", () => {
      const emptyBST = new BinarySearchTree();
      expect(emptyBST.contains(100)).to.be.false;
    });
  });

  describe("Should use find", () => {
    const bst = new BinarySearchTree();
    it("Should return null if tree is empty", () => {
      expect(bst.find(10)).to.be.null;
    });
  });

  describe("Should use breadFirstSearch BFS", () => {
    const bst = new BinarySearchTree();

    it("Should return empty array if bst is empty", () => {
      expect(bst.breadFirstSearch()).to.be.of.length(0);
    });

    it("Should return the exact array in the right order", () => {
      bst.insert(10).insert(5).insert(6).insert(15).insert(2).insert(7);
      expect(bst.breadFirstSearch()).to.eql([10, 5, 15, 2, 6, 7]);
    });
  });

  describe("Should use depthSearchFirstPreOrder", () => {
    const bstD = new BinarySearchTree();

    it("Should return empty array if bst is empty", () => {
      expect(bstD.depthSearchFirstPreOrder()).to.be.of.length(0);
    });

    it("Should return the exact array in the right order", () => {
      bstD
        .insert(20)
        .insert(15)
        .insert(25)
        .insert(13)
        .insert(16)
        .insert(22)
        .insert(27);
      expect(bstD.depthSearchFirstPreOrder()).to.eql([
        20,
        15,
        13,
        16,
        25,
        22,
        27,
      ]);
    });
  });

  describe("Should use depthSearchFirstPostOrder", () => {
    const bstPO = new BinarySearchTree();

    it("Should return empty array if bst is empty", () => {
      expect(bstPO.depthSearchFirstPostOrder()).to.be.of.length(0);
    });

    it("Should return the exact array in the right order", () => {
      bstPO
        .insert(20)
        .insert(15)
        .insert(25)
        .insert(13)
        .insert(16)
        .insert(22)
        .insert(27);
      expect(bstPO.depthSearchFirstPostOrder()).to.eql([
        13,
        16,
        15,
        22,
        27,
        25,
        20,
      ]);
    });
  });

  describe("Should use depthSearchFirstInOrder", () => {
    const bstIO = new BinarySearchTree();

    it("Should return empty array if bst is empty", () => {
      expect(bstIO.depthSearchFirstInOrder()).to.be.of.length(0);
    });

    it("Should return the exact array in the right order", () => {
      bstIO
        .insert(20)
        .insert(15)
        .insert(25)
        .insert(13)
        .insert(16)
        .insert(22)
        .insert(27);
      expect(bstIO.depthSearchFirstInOrder()).to.eql([
        13,
        15,
        16,
        20,
        22,
        25,
        27,
      ]);
    });
  });
});

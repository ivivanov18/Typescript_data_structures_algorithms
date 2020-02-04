import { BinarySearchTree } from '../binarySearchTree';
import { expect } from 'chai';

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
        })
    });

    describe("Should use find", () => {
        const bst = new BinarySearchTree();
        it("Should return false if tree is empty", () => {
            expect(bst.find(10)).to.be.null;
        });
    })
})
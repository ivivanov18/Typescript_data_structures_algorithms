/**
 * Binary Search Tree implementation
 * Example of BST:
 *          20
 *      15     27
 *   10   16 22   29
 * Because the tree is sorted, the following operations have big O as:
 * Insert: O(logn)
 * Search: O(logn)
 * It is however not guaranteed as the worst case can reach O(n) for some specific cases as:
 *              10
 *                  15
 *                      18
 *                          20
 *                              24
 *                                  28...
 */

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }

    /**
     * Function that inserts a new node in the tree with the value passed
     * @param {number} value
     * @return {BinarySearchTree} - returns `this` object to be able to chain insert calls
     */
    insert(value: number): BinarySearchTree {
        if (this.root == null) {
            this.root = new TreeNode(value);
        }
        let current = this.root;
        while (true) {
            if (value == current.value) return this;
            else if (value < current.value) {
                if (current.left == null) {
                    current.left = new TreeNode(value);
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right == null) {
                    current.right = new TreeNode(value);
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    /**
     * Function that checks whether the BST contains a given value
     * @param {string} value
     * @return {boolean}
     */
    contains(value: number): boolean {
        if (this.root == null) return false;
        let current = this.root;
        while (current) {
            if (value < current.value) current = current.left!;
            else if (value > current.value) current = current.right!;
            else return true;
        }
        return false;
    }

    /**
     * Function that finds the node in the BST that contains the passed value, null if not inside
     * @param {string} value
     * @return {TreeNode | null}
     */
    find(value: number): TreeNode | null {
        if (this.root == null) return null;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) current = current.left!;
            else if (value > current.value) current = current.right!;
            else found = true;
        }
        if (!found) return null;
        return current;
    }
}
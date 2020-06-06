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
      return this;
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

  /**
   * Algorithm that visits all the siblings nodes on a given level
   * ----->           20
   * ----->    15    ----->     25
   * ----->  13   16 ----->  22     27
   * The order for breadth search first 20, 15, 25, 13, 16, 22, 27
   * @returns {Array<number>} the visited nodes in "breadth firs" order
   */
  breadFirstSearch(): Array<number> {
    const visited = Array<number>();
    const toBeVisited = Array<TreeNode>(); // queue type structure
    let visitingNode = this.root;
    if (visitingNode != null) {
      toBeVisited.push(visitingNode);
    }
    while (toBeVisited.length) {
      visitingNode = toBeVisited.shift()!;
      visited.push(visitingNode.value);
      if (visitingNode.left) toBeVisited.push(visitingNode.left);
      if (visitingNode.right) toBeVisited.push(visitingNode.right);
    }
    return visited;
  }

  /**
   * Algorithm that visits nodes of a tree vertically down to the tree
   * before visiting sibling nodes
   * Start from root and usually by convention begin by visiting left node
   * and continue visiting left most nodes until reaching a leaf.
   * Then return to parent of leaf and visit right node
   * Example:
   *             20
   *      15           25
   *   13   16     22     27
   * The expected order for DFS Pre-Order is [20,15,13,16,25,22,27]
   */
  depthSearchFirstPreOrder(): Array<number> {
    const visited = Array<number>();
    let current = this.root;
    if (current != null) {
      traverse(current);
    }

    return visited;

    /**
     * Helper function that checks whether left/right node exists and traverse them also
     * @param treeNode
     */
    function traverse(treeNode: TreeNode) {
      visited.push(treeNode.value);
      if (treeNode.left) traverse(treeNode.left);
      if (treeNode.right) traverse(treeNode.right);
    }
  }

  /**
   * A node in this transversal will not be visited until all of his descendants
   * have been visited. So for every node, all the children get explored first before
   * getting back to the node and adding to the visited nodes
   * Example:
   *             20
   *      15           25
   *   13   16     22     27
   * The returned order [13, 16, 15, 22, 27, 25, 20]
   */
  depthSearchFirstPostOrder(): Array<number> {
    const visited = Array<number>();
    let current = this.root;
    if (current != null) {
      traverse(current!);
    }

    return visited;

    /**
     * Helper function that checks whether left/right node exists and traverse them also
     * @param treeNode
     */
    function traverse(treeNode: TreeNode) {
      if (treeNode.left) traverse(treeNode.left);
      if (treeNode.right) traverse(treeNode.right);
      visited.push(treeNode.value);
    }
  }

  /**
   * In this traversal, a node is going to visited only when his left child has
   * been visited
   * Example:
   *             20
   *      15           25
   *   13   16     22     27
   * The returned order [13, 15, 16, 20, 22, 25, 27]
   */
  depthSearchFirstInOrder(): Array<number> {
    const visited = Array<number>();
    let current = this.root;
    if (current != null) {
      traverse(current!);
    }

    return visited;

    /**
     * Helper function that checks whether left/right node exists and traverse them also
     * @param treeNode
     */
    function traverse(treeNode: TreeNode) {
      if (treeNode.left) traverse(treeNode.left);
      visited.push(treeNode.value);
      if (treeNode.right) traverse(treeNode.right);
    }
  }
}

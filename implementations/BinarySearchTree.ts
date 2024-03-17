/**
 * Represents a nullable node in a binary tree.
 */
type NullableNode<T> = TreeNode<T> | null;

/**
 * Represents a node in a binary tree.
 */
class TreeNode<T> {
  /**
   * The value stored in the node.
   */
  data: T;

  /**
   * Reference to the left child node.
   */
  left: NullableNode<T>;

  /**
   * Reference to the right child node.
   */
  right: NullableNode<T>;

  /**
   * Creates a new instance of TreeNode with the specified data.
   * @param data The value to store in the node.
   */
  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a binary search tree.
 */
class BinarySearchTree<T> {
  /**
   * The root node of the binary search tree.
   */
  #root: NullableNode<T>;

  /**
   * Creates a new instance of BinarySearchTree.
   */
  constructor() {
    this.#root = null;
  }

  /**
   * Inserts a new data into the binary search tree.
   * @param data The data to insert.
   */
  insert(data: T) {
    const newNode = new TreeNode(data);

    if (this.#root === null) {
      this.#root = newNode;
    } else {
      this.insertNode(this.#root, newNode);
    }
  }

  /**
   * Inserts a new node into the binary search tree.
   * @param node The node to start insertion from.
   * @param newNode The new node to insert.
   */
  insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * Removes a data from the binary search tree.
   * @param data The data to remove.
   */
  remove(data: T) {
    this.#root = this.removeNode(this.#root, data);
  }

  /**
   * Removes a node with the given data from the binary search tree.
   * @param root The root node of the tree.
   * @param data The data to remove.
   * @returns The new root node after removal.
   */
  removeNode(root: NullableNode<T>, data: T): NullableNode<T> {
    if (root === null) {
      return null;
    }

    if (data < root.data) {
      root.left = this.removeNode(root.left, data);
      return root;
    }

    if (data > root.data) {
      root.right = this.removeNode(root.right, data);
      return root;
    }

    if (root.left === null && root.right === null) {
      root = null;
      return root;
    }

    if (root.left === null) {
      root = root.right;
      return root;
    }

    if (root.right === null) {
      root = root.left;
      return root;
    }

    const temp = this.findMinNode(root.right);
    root.data = temp.data;
    root.right = this.removeNode(root.right, temp.data);

    return root;
  }

  /**
   * Finds the node with the minimum data value in the given subtree.
   * @param root The root node of the subtree.
   * @returns The node with the minimum data value.
   */
  findMinNode(root: TreeNode<T>): TreeNode<T> {
    if (root.left === null) {
      return root;
    }

    return this.findMinNode(root.left);
  }

  /**
   * Returns the root node of the binary search tree.
   * @returns The root node.
   */
  getRootNode() {
    return this.#root;
  }

  /**
   * Performs an inorder traversal of the binary search tree.
   * @param root The root node of the tree.
   */
  inorder(root: NullableNode<T>) {
    if (root !== null) {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }

  /**
   * Performs a preorder traversal of the binary search tree.
   * @param root The root node of the tree.
   */
  preorder(root: NullableNode<T>) {
    if (root !== null) {
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  /**
   * Performs a postorder traversal of the binary search tree.
   * @param root The root node of the tree.
   */
  postorder(root: NullableNode<T>) {
    if (root !== null) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.data);
    }
  }

  /**
   * Searches for a data in the binary search tree.
   * @param root The root node of the tree.
   * @param data The data to search for.
   * @returns The node containing the data, or null if not found.
   */
  search(root: NullableNode<T>, data: T): NullableNode<T> {
    if (root === null || root.data === data) {
      return root;
    }

    if (data < root.data) {
      return this.search(root.left, data);
    }

    return this.search(root.right, data);
  }
}

// Example usage:
const bst = new BinarySearchTree<number>();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-order traversal:");
bst.inorder(bst.getRootNode()); // Output: 20, 30, 40, 50, 60, 70, 80

console.log("Search for data 40:", bst.search(bst.getRootNode(), 40)); // Output: TreeNode { data: 40, left: ..., right: ... }


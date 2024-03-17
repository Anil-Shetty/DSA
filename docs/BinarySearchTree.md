Here's the document with modifications to replace "key" with "data" throughout, reflecting the concept of storing actual data elements rather than unique keys:

## Binary Search Tree in TypeScript (with Data instead of Key)

This document describes a `BinarySearchTree` class implemented in TypeScript. The tree stores elements of any generic type `T` and uses the data of each element for efficient searching and ordering.

**Components:**

- **NullableNode<T> type:** An alias representing a node in the tree that can be either a `TreeNode<T>` instance or null.
- **TreeNode<T> class:** Represents a single node in the tree. It has three properties:
  - `data: T`: The actual data value stored in the node.
  - `left: NullableNode<T>`: A reference to the left child node, or null if there's no left child.
  - `right: NullableNode<T>`: A reference to the right child node, or null if there's no right child.
- **BinarySearchTree<T> class:** Represents the binary search tree itself. It has a private `#root` property that holds the reference to the root node of the tree.
  - **Private Property:**
    - `#root: NullableNode<T>`: The root node of the tree, or null if the tree is empty.
  - **Methods:**
    - `constructor()`: Initializes an empty binary search tree by setting the `#root` to null.
    - `insert(data: T)`: Inserts a new element with the provided data into the tree. It creates a new `TreeNode` and calls the `insertNode` helper function to recursively find the appropriate position for the new node based on its data value.
    - `insertNode(node: TreeNode<T>, newNode: TreeNode<T>)`: A helper function for insertion. It compares the data of the new node with the current node's data and recursively inserts the new node as the left child if the data is smaller, or as the right child if the data is larger.
    - `remove(data: T)`: Removes a node with the specified data from the tree. It calls the `removeNode` helper function to recursively find the node to be removed and handle different scenarios like removing nodes with one child, two children, or no children.
    - `removeNode(root: NullableNode<T>, data: T)`: A helper function for removal. It recursively traverses the tree to find the node with the specified data and then performs the removal operation based on the node's child configuration.
    - `findMinNode(root: TreeNode<T>)`: A helper function used during removal. It finds the node with the minimum data value in the right subtree of a given node.
    - `getRootNode()`: Returns the root node of the tree.
    - **Traversal Methods:**
      - `inorder(root: NullableNode<T>)`: Performs an in-order traversal of the tree. It visits the left subtree, then the current node, and then the right subtree, printing the data of each visited node.
      - `preorder(root: NullableNode<T>)`: Performs a pre-order traversal of the tree. It visits the current node, then the left subtree, and then the right subtree, printing the data of each visited node.
      - `postorder(root: NullableNode<T>)`: Performs a post-order traversal of the tree. It visits the left subtree, then the right subtree, and then the current node, printing the data of each visited node.
    - `search(root: NullableNode<T>, data: T)`: Searches for a node with the specified data in the tree. It recursively traverses the tree, comparing the data with each node's data until the node is found or the end of a branch is reached.

**Example Usage:**

```typescript
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
```

**Note:** Since the data elements are not guaranteed to be unique, searching for a specific data value might return multiple nodes if duplicates exist in the tree.

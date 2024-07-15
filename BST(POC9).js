// BST implementation

class Node { // tree node definition
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree { // BST definition with manipulations & traversals
  constructor() {
    this.root = null; // root node
  }

  isEmpty() { // checks if BST isempty or not
    return this.root === null;
  }
 
  // BST manipulations
  insert(value) { // to insert a node value into BST
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) { // recursive method to insert node by determining node position in BST based on value
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) { // to search for a given node value in BST
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  min(root = this.root) { // to find node with smallest value
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root = this.root) { // to find node with largest value
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) { // to delete node value from BST
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) { // recursive method to delete node in BST considering presence of child nodes of node to be deleted
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  // BST traversals
  // 1) Depth First Search (DFS) traversal types: inorder, preorder & postorder
  
  inOrder(root = this.root) { // traverse order: left subtree, root, right subtree
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  preOrder(root = this.root) { // traverse order: root, left subtree, right subtree
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root = this.root) { // traverse order: left subtree, right subtree, root
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  
  // 2) Breadth First Search (BFS) traversal: levelorder
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}

const bst = new BinarySearchTree(); // create BST object

console.log(bst.isEmpty()); // true

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 10)); // true
console.log(bst.search(bst.root, 6)); // false

bst.inOrder(); // 3 5 7 10 15
bst.preOrder(); // 10 5 3 7 15
bst.postOrder(); // 3 7 5 15 10
bst.levelOrder(); // 10 5 15 3 7

console.log(bst.min()); // 3
console.log(bst.max()); // 15

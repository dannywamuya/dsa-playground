class TreeNode {
  val;
  left;
  right;

  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

let tree = null;

const arr = [12, 3, 2, 42, 1, 6, 35, 7, 4];

/**
 * Create a Binary Search Tree Node
 *
 * @param {number} data
 * @returns {TreeNode}
 */
function getTreeNode(data) {
  return new TreeNode(data);
}

/**
 * Insert a node into a Binary Search Tree
 *
 * @param {TreeNode} root
 * @param {number} data
 * @returns {TreeNode}
 */
function insertNode(root, data) {
  if (root === null) {
    root = getTreeNode(data);
  } else if (data < root.val) {
    root.left = insertNode(root.left, data);
  } else {
    root.right = insertNode(root.right, data);
  }
  return root;
}

for (let i = 0; i < arr.length; i++) {
  tree = insertNode(tree, arr[i]);
}

/**
 * Find the smallest value in a Binary Search Tree
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function findMin(root) {
  let curr = root;

  while (curr.left != null) {
    curr = curr.left;
  }

  return curr;
}

/**
 * Find the largest value in a Binary Search Tree
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function findMax(root) {
  let curr = root;

  while (curr.right != null) {
    curr = curr.right;
  }

  return curr;
}

/**
 *
 * @param {TreeNode} root
 * @param {number} data
 * @returns {boolean}
 */
function search(root, data) {
  if (root === null) return false;
  else if (root.val === data) return true;
  else if (data > root.val) return search(root.right, data);
  else return search(root.left, data);
}

/**
 * Height of a tree (number of edges in the longest path from the root node to a leaf node).
 *
 * O(n) - n recursive calls are made for each node
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function height(root) {
  if (root === null) return 0;
  leftH = height(root.left);
  right = height(root.right);

  return Math.max(leftH, right) + 1;
}

/**
 * Tree Traversal
 *
 * BFS - Visit all the child nodes of a node before visiting the grand children
 *     - Level order traversal
 *
 * DFS - Visit all the whole subtree of a child before visiting the sibling node
 *     - <root><left><right> - Pre-Order Traversal
 *     - <left><root><right> - In-Order Traversal
 *     - <left><right><root> - Post-Order Traversal
 *
 *     - In all three traversal algorithms, the time complexity is O(n) because
 *       each node is visited exactly once. The space complexity is O(h) because
 *       the maximum number of recursive function calls on the call stack is determined
 *       by the height of the tree.
 *
 *     - Time -> O(n) where n is the number of nodes in the tree that have to be visited
 *     - Space -> O(h) where h is the height of the tree
 *
 */

/**
 * Implementation of level-order traversal
 *
 * Time - O(n)
 * Space - O(1) -> Best Case
 *         O(n) -> Worst/Avg (Perfect Binary Tree)
 *
 * @param {TreeNode} root
 */
function bfs(root) {
  if (root === null) return;
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let curr = queue[0];
    console.log(curr.val);
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
    queue.shift();
  }
}

/**
 * DFS
 *
 */

/**
 * Pre-Order (<root><left><right>)
 *
 * @param {TreeNode} root
 */

function preOrder(root) {
  if (root === null) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

/**
 * In-Order (<left><root><right>)
 *
 * @param {TreeNode} root
 */

function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

/**
 * Post-Order (<left><right><root>)
 *
 * @param {TreeNode} root
 */

function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}

/**
 * Check if a binary tree is a BST
 *
 *
 * @param {TreeNode} root
 * @returns {boolean}
 */
function isBST(root) {
  let lastNode = null;

  function inOrderTravesal(node) {
    if (node === null) return;

    inOrderTravesal(node.left);

    let curr = node.val;

    if (lastNode && lastNode > curr) {
      return false;
    } else {
      lastNode = curr;
    }

    inOrderTravesal(node.right);

    return true;
  }

  return inOrderTravesal(root);
}

/**
 * Delete a node from a BST
 *
 * @param {TreeNode} root
 * @param {number} data
 */
function deleteNode(root, data) {
  if (root === null) return null;
  else if (data < root.val) root.left = deleteNode(root.left, data);
  else if (data > root.val) root.right = deleteNode(root.right, data);
  else {
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.left === null && root.right) {
      root = root.right;
    } else if (root.right === null && root.left) {
      root = root.left;
    } else {
      let min = findMin(root.right);
      root.val = min.val;
      root.right = deleteNode(root.right, min);
    }
  }
  return root;
}

const invalidTree = {
  val: 12,
  left: {
    val: 42,
    left: null,
    right: {
      val: 35,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};

const tree2 = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 18,
      left: {
        val: 16,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: null,
        right: null,
      },
    },
  },
};

// console.log(tree);
// console.log(findMin(tree));
// console.log(findMax(tree));
// console.log(search(tree, 42));
// console.log(search(tree, -1));
// console.log(height(tree));
// bfs(tree);
// preOrder(tree);
// inOrder(tree);
// postOrder(tree);
// console.log(isBST(tree));
// console.log(isBST(invalidTree));
// console.log(isBST(tree2));
console.log("Before");
inOrder(tree2);
deleteNode(tree2, 10);
console.log("After");
inOrder(tree2);

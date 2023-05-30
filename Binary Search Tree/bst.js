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

  return curr.val;
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

  return curr.val;
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
  let right = root.right;
  console.log(root.val);
  preOrder(root.left);
  preOrder(right);
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

// console.log(tree);
// console.log(findMin(tree));
// console.log(findMax(tree));
// console.log(search(tree, 42));
// console.log(search(tree, -1));
// console.log(height(tree));
// bfs(tree);
// preOrder(tree);
inOrder(tree);

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

console.log(tree);
console.log(findMin(tree));
console.log(findMax(tree));
console.log(search(tree, 42));
console.log(search(tree, -1));

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

//Definition for a binary tree node:

// function treeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

const levelOrder = (root) => {
  const result = [];

  if (root === null) return result;

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const temp = [];
    const { length } = queue;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      temp.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(temp);
  }
  return result;
};

const zigzagLevelOrder = (root) => {
  const result = [];

  if (root === null) return result;

  const queue = [];
  queue.push(root);

  let reverse = false;

  while (queue.length) {
    const curr = [];
    const { length } = queue;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curr.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(reverse ? curr.reverse() : curr);
    reverse = !reverse;
  }
  return result;
};

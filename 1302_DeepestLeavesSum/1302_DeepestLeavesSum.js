/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  const queue = [root];
  let sum = 0;
  while (queue.length !== 0) {
    let modify = 0;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      modify += queue[i].val;
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
    sum = modify;
  }
  return sum;
};

//Similar to finding max depth with breath first search
/**
 * sum up all the values on each depth
 * add any leaves attach to that depth
 * get a sum for each level until nothing left in queue. only have to iterate through once
 * time complexity o(n). space complexity o(2^(h-1)).
 */

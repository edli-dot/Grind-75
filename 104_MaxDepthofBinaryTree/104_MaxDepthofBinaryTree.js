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

const maxDepth2 = (tree) => {
  if (tree === null || tree.length === 0) return 0;
  return Math.max(maxDepth(tree.left), maxDepth(tree.right)) + 1;
};

//recursive solution
//time complexity o(n). worst case memory complexity o(n)

var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
  }
  return depth;
};
//iterative breathe first search
//transverse each level until you can no longer go down a level
//add all the leaves from a level then remove from queue all the ones from that level

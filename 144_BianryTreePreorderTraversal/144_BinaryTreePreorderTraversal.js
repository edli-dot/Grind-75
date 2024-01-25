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
 * @return {number[]}
 */
var preorderTraversal = function (root, answer = []) {
  if (!root) return answer;
  else answer.push(root.val);
  if (root.left) preorderTraversal(root.left, answer);
  if (root.right) preorderTraversal(root.right, answer);
  return answer;
};

/**
 * This implementation, answer array is updated in-place
 * the returns not used to return result of recursive calls
 */

var preorderTraversal = function (root) {
  const answer = [];

  function traverse(node) {
    if (node) {
      answer.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);
  return answer;
};
/**
 * This implementation uses a helper function and closure
 */

var preorderTraversal = function (root) {
  const answer = [],
    stack = [];
  let curr = root;
  while (curr || stack.length) {
    if (curr) {
      answer.push(curr.val);
      stack.push(curr.right);
      curr = curr.left;
    } else curr = stack.pop();
  }
  return answer;
};

/**
 * An iterative appproach. logic follows that when we look at a root, we add its value. if there is a curr.right, we add it onto the stack
 * then we modify root to be root.left
 * if we by chance have a curr = root, pop it off the stack
 */
//Preorder transversal is root, root.left, root.right

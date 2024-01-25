/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  if (!original) return null;
  if (original === target) return cloned;
  // Recursively search both left and right subtrees.
  let leftResult = getTargetCopy(original.left, cloned.left, target);
  let rightResult = getTargetCopy(original.right, cloned.right, target);
  if (leftResult) return leftResult;
  return rightResult;
};

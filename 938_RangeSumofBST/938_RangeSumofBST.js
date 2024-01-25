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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  if (root.val <= high && root.val >= low) sum += root.val;
  if (root.left != null) sum += rangeSumBST(root.left, low, high);
  if (root.right != null) sum += rangeSumBST(root.right, low, high);
  return sum;
};

//computationally long. memory good

var rangeSumBST = function (root, low, high) {
  if (!root) return 0;
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }
  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
};

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) return true;
  return matches(root.left, root.right);

  function matches(leftNode, rightNode) {
    if (leftNode == rightNode) return true;
    if (leftNode == null || rightNode == null) return false;
    return (
      leftNode.val === rightNode.val &&
      matches(leftNode.left, rightNode.right) &&
      matches(leftNode.right, rightNode.left)
    );
  }
};

//b/c we are only pasing in a single parameter in the parent function
//the helper function has the recursive logic
//passing in the node references of the left and right side we are comparing

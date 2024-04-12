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

var isValidBST = function (root) {
  return validate(root, -Infinity, Infinity);
};

//function that takes in lower and upperbound of the previous roots
var validate = function (node, lower, upper) {
  if (node == null) {
    return true;
  }

  if (lower < node.val && node.val < upper) {
    // check if all tree nodes follow BST rule
    return (
      //the first one changes the upper limit
      validate(node.left, lower, node.val) &&
      //the second one changes the lower limit
      validate(node.right, node.val, upper)
    );
  } else {
    // early reject when we find violation
    return false;
  }
};

/**
 * In the event node it is null. it just terminates the recursion there
 */

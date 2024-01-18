/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < index.length; i++) {
    if (index[i] < i) {
      target.splice(index[i], 0, nums[i]);
    } else target.push(nums[i]);
  }
  return target;
};

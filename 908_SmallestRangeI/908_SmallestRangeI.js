/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  if (nums.length == 1) return 0;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  const check = max - min - k - k;
  return check > 0 ? check : 0;
};

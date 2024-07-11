/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max1 = nums[0] - 1;
  let max2 = nums[1] - 1;
  if (nums.length == 2) return max1 * max2;
  for (let i = 2; i < nums.length; i++) {
    const diff = nums[i] - 1;
    if (max1 < diff) {
      if (max1 > max2) max2 = max1;
      max1 = diff;
    } else if (max2 < diff) {
      if (max2 > max1) max1 = max2;
      max2 = diff;
    }
  }
  return max1 * max2;
};

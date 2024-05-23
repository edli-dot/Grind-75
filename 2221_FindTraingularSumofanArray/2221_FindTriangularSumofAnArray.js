/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  if (nums.length == 1) return nums;
  let i = 0;
  while (nums.length > 1) {
    i = 0;
    while (i < nums.length - 1) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
      i++;
    }
    nums.pop();
  }
  return nums;
};

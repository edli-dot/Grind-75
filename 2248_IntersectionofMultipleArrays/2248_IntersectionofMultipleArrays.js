/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let common = nums[0];
  for (let i = 0; i < nums.length; i++) {
    common = common.filter((x) => nums[i].includes(x));
  }

  if (common.length === 0) return [];
  return common.sort((a, b) => a - b);
};

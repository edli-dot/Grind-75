/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) cache[nums[i]] = 1;
    else return nums[i];
  }
};

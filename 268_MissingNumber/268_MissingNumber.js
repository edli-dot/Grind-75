/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let answer = -nums.length;
  for (let i = 0; i < nums.length; i++) {
    answer = answer + nums[i] - i;
  }
  return Math.abs(answer);
};

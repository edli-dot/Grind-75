/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) count = 0;
    else if (nums[i] == 1) {
      count++;
      if (count > max) max = count;
    }
  }
  return max;
};

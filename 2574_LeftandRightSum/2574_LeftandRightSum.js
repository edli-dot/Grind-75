/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = Array(nums.length).fill(0);
  let rightSum = Array(nums.length).fill(0);
  for (let left = 1; left < nums.length; left++) {
    leftSum[left] = nums[left - 1] + leftSum[left - 1];
    rightSum[nums.length - 1 - left] =
      nums[nums.length - left] + rightSum[nums.length - left];
  }

  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  return answer;
};

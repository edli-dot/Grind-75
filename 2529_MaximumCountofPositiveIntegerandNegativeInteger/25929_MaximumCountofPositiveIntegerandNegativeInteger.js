/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // find the index of the first positive number
  let firstPositiveIndex = nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > 0) {
      firstPositiveIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  left = 0;
  right = nums.length - 1;

  // find the index of the first negative number
  let firstNonNegativeIndex = nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= 0) {
      firstNonNegativeIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  let positiveCount = nums.length - firstPositiveIndex;
  let negativeCount = firstNonNegativeIndex;
  return Math.max(positiveCount, negativeCount);
};

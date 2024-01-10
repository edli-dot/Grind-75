/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length == 0) return -1;
  let right = nums.reduce((sum, cum) => sum + cum);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if (left === right) return i;
    left += nums[i];
  }
  return -1;
};

//Can Improve this by only updating a single variable

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const n = nums.length,
    sum = nums.reduce((accum, val) => accum + val, 0);
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    const remainder = sum - leftSum - nums[i];
    if (leftSum === remainder) return i;
    leftSum += nums[i];
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[nums.length - 1] < target) return nums.length;
  if (nums[0] > target) return 0;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) return middle;
    else if (nums[middle - 1] < target && nums[middle] > target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else left = middle + 1;
  }
};

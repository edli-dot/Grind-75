/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  //Binary Search
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      let upper = mid;
      let lower = mid;
      //Custom part of the binary that continues to search for teh lower and upper bound
      //Still a log n time complexity at its worst case
      while (nums[lower - 1] == target) {
        lower--;
      }
      while (nums[upper + 1] == target) {
        upper++;
      }
      return [lower, upper];
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return [-1, -1];
};

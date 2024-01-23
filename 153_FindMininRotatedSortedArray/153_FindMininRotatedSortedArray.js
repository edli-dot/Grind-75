/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  if (nums.length == 1) return nums[0];
  if (nums[l] < nums[l + 1] && nums[l] < nums[r]) return nums[l];
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if (nums[mid] < nums[r]) {
      r = mid - 1;
    } else l = mid + 1;
  }
};

/**
 * Thought process:
 * to be the min val, it has to be the smallest val
 * the number before and after it should be greater than it
 * edge cases: array isn't shifted at all in which case you just compare if the last value and the value next to it satisfy condition
 * edge case: single value return itself
 * undergo a standard binary search
 */

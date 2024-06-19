/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  //Edge Cases
  if (nums.length == 1) return 0;
  if (nums.length == 2) return nums[0] > nums[1] ? 0 : 1;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  //Binary Search
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    //if the left number is already greater, we would try to transverse the left side first
    //bc we know there is a greater number
    else if (nums[mid] < nums[mid - 1]) right = mid;
    else left = mid + 1;
  }
};

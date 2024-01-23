/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
  }
  return -1;
};
//this is linear time. because we know it is a sorted array, we can make this faster

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lowerB = 0,
    upperB = nums.length - 1;
  while (lowerB < upperB) {
    let middle = lowerB + Math.floor((upperB - lowerB + 1) / 2);
    if (nums[middle] > target) {
      upperB = middle - 1;
    } else {
      lowerB = middle;
    }
  }
  return nums[upperB] == target ? upperB : -1;
};

/**
 * log n run time
 * constantly check the middle number then change the reference
 * how to implement this way because one test case
 */

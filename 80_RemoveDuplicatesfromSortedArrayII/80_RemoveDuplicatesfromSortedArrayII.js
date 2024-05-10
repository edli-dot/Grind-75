/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    } else if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

//doing this w/o any extra memory

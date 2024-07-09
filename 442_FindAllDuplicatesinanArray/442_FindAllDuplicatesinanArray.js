/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      ans.push(index + 1);
    } else {
      nums[index] = -nums[index];
    }
  }
  return ans;
};

/**
 * we can use marker
 * since the same number will reference the same index
 * if the value is negative, we can identify that the index is repeated
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = 1; j < nums.length; j++) {
      let pos = (i + j) % nums.length;
      if (nums[i] < nums[pos]) {
        ans.push(nums[pos]);
        found = true;
        break;
      }
    }
    if (!found) {
      ans.push(-1);
    }
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  let keyPositions = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == key) keyPositions.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < keyPositions.length; j++) {
      const diff = Math.abs(i - keyPositions[j]);
      if (diff <= k) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
};

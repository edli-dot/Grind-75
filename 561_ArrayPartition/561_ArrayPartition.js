/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((x, y) => x - y);
  let ans = 0;
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return ans;
};

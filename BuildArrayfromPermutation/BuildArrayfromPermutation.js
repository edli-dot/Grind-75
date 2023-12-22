/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums, ans = []) {
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

//Space Complexity is o(n). to make this o(1) will have to modify the original array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map((num) => nums[num]);
};

//Still is o(n). returns a new array

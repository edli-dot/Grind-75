/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicated = function (nums) {
  const cachee = {};
  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) cache[nums[i]] = 1;
    else return true;
  }
  return false;
};

//Time complexity of o(n)

// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

//Can also create a set and comapre the size of teh Set compared to the length of the orignal array

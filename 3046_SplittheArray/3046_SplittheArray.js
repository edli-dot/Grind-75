/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] ? cache[nums[i]]++ : (cache[nums[i]] = 1);
    if (cache[nums[i]] > 2) return false;
  }
  return true;
};

//Really easy. just a hashmap. the moment the count becomes more than two, there is no way to split it

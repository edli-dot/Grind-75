/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] != undefined && i - cache[nums[i]] <= k) {
      return true;
    }
    cache[nums[i]] = i;
  }
  return false;
};

var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

//map is better computationally for larger data sets
//functions in log n and no hash collisioons

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let cache = {};
  for (let num of nums) {
    if (!cache[num]) cache[num] = 1;
    else cache[num] += 1;
  }

  for (let num of nums) {
    if (cache[num] / nums.length >= 0.5) return num;
  }
};

//Time Complexity of o(n)

var majorityElement = function (nums) {
  let cache = {};
  if (nums.length === 1) return nums[0];
  for (let num of nums) {
    if (!cache[num]) cache[num] = 1;
    else {
      cache[num] += 1;
      if (cache[num] / nums.length >= 0.5) return num;
    }
  }
};

//Checks within a single runtime. hashmap

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let count = 0;
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] ? cache[nums[i]]++ : (cache[nums[i]] = 1);
  }
  const max = Math.max(...Object.values(cache));
  for (let values of Object.values(cache)) {
    if (values == max) count++;
  }
  return count * max;
};

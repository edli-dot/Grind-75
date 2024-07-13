/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 1) return 1;
  let cache = new Set(nums);
  let count = 0;
  let ans = 0;
  for (let num of cache) {
    count = 0;
    if (!cache.has(num - 1)) {
      while (cache.has(num++)) {
        count++;
      }
    }
    if (count > ans) ans = count;
  }
  return ans;
};

/**
 * Look up times in a Set is O(1)
 * just need to identify the starts of consecutive sequences
 * and get max counter from there
 */

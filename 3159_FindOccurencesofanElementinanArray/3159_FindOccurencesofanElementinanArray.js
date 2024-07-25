/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  let ans = [];
  let cache = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == x) cache.push(i);
  }
  for (let i = 0; i < queries.length; i++) {
    queries[i] - 1 < cache.length
      ? ans.push(cache[queries[i] - 1])
      : ans.push(-1);
  }
  return ans;
};

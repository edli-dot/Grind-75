/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let cache = {};
  for (let num of nums) {
    cache[num] = (cache[num] || 0) + 1;
  }
  let uniqueNums = Object.keys(cache).map(Number);
  uniqueNums.sort((a, b) => {
    if (cache[a] !== cache[b]) {
      return cache[a] - cache[b];
    }
    return b - a;
  });
  let ans = [];
  for (let num of uniqueNums) {
    ans.push(...Array(cache[num]).fill(num));
  }
  return ans;
};

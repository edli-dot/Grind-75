/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (k < 0) return undefined;
  let hash = {};
  for (n of nums) hash[n] = (hash[n] || 0) + 1;
  return Object.keys(hash)
    .sort((a, b) => hash[b] - hash[a])
    .splice(0, k);
};
//more condensed way of writing. still super clear

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (k < 0) return undefined;
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) hash[nums[i]] = 1;
    else hash[nums[i]]++;
  }
  const sortedKeys = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  return sortedKeys.splice(0, k);
};

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
  let cache = {};
  for (let num in nums) {
    cache[nums[num]] = num;
  }
  for (let i = 0; i < operations.length; i++) {
    const [value, change] = operations[i];
    const index = cache[value];
    nums[index] = change;
    cache[change] = index;
    delete cache[value];
  }
  return nums;
};

/**
 * storing in the hashmap the value : index
 * able to retrieve index and modify from there
 * search and deletion of hashmap o(n)
 */

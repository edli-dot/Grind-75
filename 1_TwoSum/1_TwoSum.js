/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in nums && nums.indexOf(complement) != i) {
//       return [i, nums.indexOf(complement)];
//     }
//   }
//   return false;
// };

//Runtime on this method isn't the fastest: it is basically n^2 because incldues checks the array

var twoSum2 = function (nums, target) {
  // Create an empty hash map to store the numbers and their indices
  const cache = {};

  // Iterate through the array 'nums'
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the target
    const complement = target - nums[i];

    // Check if the complement is already in the hash map
    if (complement in cache) {
      // If found, return the current index 'i' and the index of the complement
      return [i, cache[complement]];
    }

    // If the complement is not found, add the current number and its index to the hash map
    cache[nums[i]] = i;
  }
  return [];
};

//Runtime on this method is O(n). constant look up time of hash map contributes

module.exports = twoSum2;

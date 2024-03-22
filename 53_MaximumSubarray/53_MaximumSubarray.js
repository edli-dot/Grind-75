/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let answer = nums[0];
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    //If the addition of the values prior results in a negative number, we restart our count to 0
    //while maintain our current indexing
    if (current < 0) current = 0;
    current += nums[i];
    if (current > answer) answer = current;
  }
  return answer;
};

// https://media.geeksforgeeks.org/wp-content/uploads/20231019164359/Maximum-Sum-Subarray-(-Kadane's-Algorithm)-(2).jpg
// good visaulizer of the algorithm

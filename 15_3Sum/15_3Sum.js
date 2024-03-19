/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let answer = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          answer.push([nums[i], nums[j], nums[k]]);
          while (j < k && nums[j] === nums[j + 1]) j++;
          while (j < k && nums[k] === nums[k - 1]) k--;
          j++;
          k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }
  return answer;
};

/**
 * Thought process: Have two pointers. Because we ordered the array, we can decrement if we have matching values or increment if we have matching values
 */

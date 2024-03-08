/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let answer = 0;
  let right = 0;
  let left = 0;
  let total = 0;
  for (let right = 0; right < nums.length; right++) {
    total += nums[right];
    while (left < right && total > goal) {
      total -= nums[left++];
    }
    //logic is that we check the subarray until it no longer equals goal
    if (total === goal) {
      let tempLeft = left;
      while (tempLeft < right && nums[tempLeft] == 0) {
        tempLeft++;
        answer++;
      }
      answer++;
    }
  }

  return answer;
};

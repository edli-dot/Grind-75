/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let checker = 0;
  for (right = 0; right < nums.length; right++) {
    checker += nums[right];
    let product = right - left + 1;
    //condition to check if subarray is over k
    while (checker * product >= k && left <= right) {
      checker -= nums[left];
      left++;
      product = right - left + 1;
    }
    //this logic includes the subarrays between the two pointers
    answer += right - left + 1;
  }
  return answer;
};

console.log(countSubarrays([2, 1, 4, 3, 5], 10));

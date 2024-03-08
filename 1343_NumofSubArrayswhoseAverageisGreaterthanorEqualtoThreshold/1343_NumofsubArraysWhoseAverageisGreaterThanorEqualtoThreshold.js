/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let runningtotal = 0;
  let i = 0;
  while (i < k) {
    runningtotal += arr[i++];
  }
  let answer = 0;
  if (runningtotal / k >= threshold) answer++;
  for (let i = k; i < arr.length; i++) {
    const subtract = arr[i - k];
    runningtotal = runningtotal - subtract + arr[i];
    if (runningtotal / k >= threshold) answer++;
  }
  return answer;
};

const numOfSubarrays = (nums, k, threshold) => {
  let count = 0,
    windowSize = 0,
    windowSum = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    if (windowSize === k) {
      if (windowSum / k >= threshold) count++;
      windowSum -= nums[i - k];
      windowSize--;
    }
    windowSum += nums[i];
    windowSize++;
  }
  return count;
};

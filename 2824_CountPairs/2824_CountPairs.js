/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      nums[i] + nums[j] < target ? count++ : 0;
    }
  }
  return count;
};
//Two for loops isn't recommended

var countPairs = function (nums, target) {
  let count = 0;
  const sortedNums = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;
  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];
    if (sum < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
};

//Two pointer instead of two for loops

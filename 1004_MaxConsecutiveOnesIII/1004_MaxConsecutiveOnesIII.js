/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let last = 0;
  let count = 0;
  let answer = 0;
  let otherC = 0;
  if (k > nums.length - 1 - nums.reduce((x, y) => x + y)) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    nums[i] == 1 ? count++ : otherC++;
    while (otherC > k) {
      nums[last] == 1 ? count-- : otherC--;
      last++;
    }
    answer = Math.max(answer, otherC + count);
  }
  return answer;
};

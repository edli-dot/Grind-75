/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let num = 1;
  if (nums.includes(0)) return 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] > 0 ? num : (num *= -1);
  }
  return num;
};

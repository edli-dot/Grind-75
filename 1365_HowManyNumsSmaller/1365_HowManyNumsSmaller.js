/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  if (!nums) return undefined;
  return nums.map((x) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      x > nums[i] ? count++ : 0;
    }
    return count;
  });
};

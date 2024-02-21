/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = (second = third = -Infinity);
  let compare = new Set(nums);
  for (let num of compare) {
    if (num > third) {
      first = second;
      second = third;
      third = num;
    } else if (num > second) {
      first = second;
      second = num;
    } else if (num > first) {
      first = num;
    }
  }

  return first != -Infinity ? first : third;
};

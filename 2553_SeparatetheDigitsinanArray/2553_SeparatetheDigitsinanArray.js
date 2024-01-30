/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let arr = [];
  nums.forEach((item) => {
    item
      .toString()
      .split('')
      .forEach((value) => {
        arr.push(value);
      });
  });
  return arr;
};

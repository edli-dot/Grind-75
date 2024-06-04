/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.map(String);
  //30 + 3 => 330, not 303
  //logic to compare order to add number
  nums.sort((a, b) => b + a - (a + b));
  let result = nums.join('');
  return result[0] === '0' ? '0' : result;
};

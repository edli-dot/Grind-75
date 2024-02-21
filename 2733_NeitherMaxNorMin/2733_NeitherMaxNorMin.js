/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length < 3) return -1;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  for (let num of nums) {
    if (num !== min && num !== max) return num;
  }
  return -1;
};

//even though we use min and max functions. the exit case is fast. time complexity of o(n)

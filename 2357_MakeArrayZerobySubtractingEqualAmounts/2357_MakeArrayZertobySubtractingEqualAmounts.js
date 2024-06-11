/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const top = Math.max(...nums);
  let count = 0;
  const indexofTop = nums.indexOf(top);
  while (nums[indexofTop] > 0) {
    const nonZeroNums = nums.filter((num) => num > 0);
    const small = Math.min(...nonZeroNums);
    nums.forEach((x, index, array) => {
      array[index] = x - small;
    });
    count++;
  }
  return count;
};

/**
 * Thought process was when the max value of the array reaches 0, exit
 * each move subtract the minumum of the array but have to filter out 0's or else we have an infinite loop
 *
 */

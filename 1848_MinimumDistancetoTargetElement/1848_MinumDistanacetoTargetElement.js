/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) indexes.push(i);
  }
  indexes.forEach((x, index) => (indexes[index] = Math.abs(x - start)));
  return Math.min(...indexes);
};
//This was the first thought process
//Could be improve by actually not storing anything and updating min as you go through the array

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) min = Math.min(min, Math.abs(start - i));
  }
  return min;
};

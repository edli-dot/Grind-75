/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    const compare = numbers[right] + numbers[left];
    if (target == compare) return [left + 1, right + 1];
    else if (target > compare) left++;
    else right--;
  }
};

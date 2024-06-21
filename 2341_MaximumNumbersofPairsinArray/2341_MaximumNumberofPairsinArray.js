/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let count = {};
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  let pairs = 0;
  let remainders = 0;

  /**
   *  Object.keys(count).forEach(num => {
    pairs += Math.floor(count[num] / 2);
    remainders += count[num] % 2;
  });
   */
  for (let num in count) {
    pairs += Math.floor(count[num] / 2);
    remainders += count[num] % 2;
  }
  return [pairs, remainders];
};

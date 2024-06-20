/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const fNums = nums.filter((x) => x % 2 == 0);
  if (fNums.length == 0) return -1;
  let cache = {};
  for (let num of fNums) cache[num] ? cache[num]++ : (cache[num] = 1);
  let ans = Object.keys(cache).sort((x, y) => cache[y] - cache[x]);
  return ans[0];
};

//logic for going through the array just once
var mostFrequentEven = function (nums) {
  let maxFreq = 0;
  let mostFrequentEvenNum = Infinity;
  let cache = new Array(100000).fill(0);

  for (let num of nums) {
    if (num % 2 === 0) {
      cache[num]++;
      if (
        cache[num] > maxFreq ||
        (cache[num] === maxFreq && num < mostFrequentEvenNum)
      ) {
        maxFreq = cache[num];
        mostFrequentEvenNum = num;
      }
    }
  }

  return mostFrequentEvenNum == Infinity ? -1 : mostFrequentEvenNum;
};

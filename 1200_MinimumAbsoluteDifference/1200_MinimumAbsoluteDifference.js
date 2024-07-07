/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr = arr.sort((x, y) => x - y);
  let cache = [];
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    const curr = Math.abs(arr[i + 1] - arr[i]);
    if (curr < min) {
      cache = [[arr[i], arr[i + 1]]];
      min = curr;
    } else if (curr == min) {
      cache.push([arr[i], arr[i + 1]]);
    }
  }
  return cache;
};

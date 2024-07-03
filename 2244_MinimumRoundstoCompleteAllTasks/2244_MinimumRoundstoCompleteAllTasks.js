/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let count = 0;
  let cache = {};
  for (let task of tasks) {
    cache[task] = (cache[task] || 0) + 1;
  }
  for (let obj in cache) {
    if (cache[obj] == 1) return -1;
    else {
      count += Math.ceil(cache[obj] / 3);
    }
  }
  return count;
};

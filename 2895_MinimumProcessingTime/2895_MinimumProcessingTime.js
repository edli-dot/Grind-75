/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
  processorTime.sort((x, y) => x - y);
  tasks.sort((x, y) => y - x);
  let arr = [];
  let j = 0;
  for (let i = 0; i < tasks.length - 3; i += 4) {
    const time = Math.max(tasks[i], tasks[i + 1], tasks[i + 2], tasks[i + 3]);
    arr.push(processorTime[j++] + time);
  }
  return Math.max(...arr);
};

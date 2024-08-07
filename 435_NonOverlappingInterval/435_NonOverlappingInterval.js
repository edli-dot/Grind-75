/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let endInterval = intervals[0][1];
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < endInterval) {
      count++;
    } else {
      endInterval = intervals[i][1];
    }
  }
  return count;
};

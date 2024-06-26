/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  //last timestamp will have the time duration
  let totalTime = duration;

  for (let i = 0; i + 1 < timeSeries.length; i++) {
    let diff = timeSeries[i + 1] - timeSeries[i];
    totalTime += diff > duration ? duration : diff;
  }
  return totalTime;
};

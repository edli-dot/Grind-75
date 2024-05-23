/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  return score.sort((a, b) => b[k] - a[k]);
};

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i][k] > score[j][k]) {
        [score[i], score[j]] = [score[j], score[i]];
      }
    }
  }
  return score;
};

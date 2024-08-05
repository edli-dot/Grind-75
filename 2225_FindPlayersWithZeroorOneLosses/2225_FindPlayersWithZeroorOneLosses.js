/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let cache = {};
  let winners = new Set();

  for (let i = 0; i < matches.length; i++) {
    const [win, lose] = [matches[i][0], matches[i][1]];

    if (!(win in cache)) {
      cache[win] = 0;
    }

    cache[lose] = (cache[lose] || 0) + 1;
    winners.add(win);
  }

  let answer = [[], []];

  for (let player of winners) {
    if (!(player in cache) || cache[player] === 0) {
      answer[0].push(player);
    }
  }

  for (let player in cache) {
    if (cache[player] === 1) {
      answer[1].push(player);
    }
  }

  answer[0].sort((a, b) => a - b);
  answer[1].sort((a, b) => a - b);

  return answer;
};

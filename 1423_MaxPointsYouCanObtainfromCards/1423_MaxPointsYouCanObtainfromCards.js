/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  if (cardPoints.length <= k) return cardPoints.reduce((x, y) => x + y);
  let front = 0;
  let answer = 0;
  while (front < k) {
    answer += cardPoints[front];
    front++;
  }
  let modify = answer;
  let back = cardPoints.length - 1;
  while (front > 0 && back > 0) {
    front--;
    modify -= cardPoints[front];
    modify += cardPoints[back];
    back--;
    answer = Math.max(answer, modify);
  }
  return answer;
};

/**
 * Thought process was that you can basically wrap around the back and front of the deck
 * the sliding window basically goes from k from the front side, to deck.length - k
 * just return the largest window that is contained
 */

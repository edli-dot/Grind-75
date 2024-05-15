/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const filledIndices = [],
    ans = [];
  //this makes note of all boxes that posess a ball
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    if (box === '1') filledIndices.push(i);
  }
  //absolute value of position of box to all the balls
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    for (const j of filledIndices) sum += Math.abs(i - j);
    ans.push(sum);
  }

  return ans;
};

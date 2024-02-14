/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
  let answer = [];
  let x = (num - 3) / 3;
  if ((num - 3) % 3 == 0) {
    answer = [x, x + 1, x + 2];
  }
  return answer;
};

//just utilizes math logic

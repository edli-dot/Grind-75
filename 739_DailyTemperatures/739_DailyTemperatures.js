/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let answer = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {
      stack.shift();
    }
    if (stack.length === 0) {
      answer[i] = 0;
    } else answer[i] = stack[0] - i;
    stack.unshift(i);
  }
  return answer;
};

//This is essentially a monotonic stack

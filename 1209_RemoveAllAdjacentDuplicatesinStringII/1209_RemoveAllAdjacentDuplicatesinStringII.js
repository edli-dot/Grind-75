/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  let stack = [];
  //keep track of the character as well as the count
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] === s[i]) {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([s[i], 1]);
    }
  }

  let result = [];
  for (let [char, count] of stack) {
    result.push(char.repeat(count));
  }

  return result.join('');
};

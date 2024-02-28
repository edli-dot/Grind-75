/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) return false;
  let stack = [];
  const bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    if (bracketsMap[s[i]]) {
      stack.push(s[i]); // Opening bracket, push onto the stack
    } else {
      // Closing bracket
      // No corresponding opening bracket
      if (stack.length === 0) return false;
      //Stores pop() as a variable
      const top = stack.pop();
      // Mismatched brackets
      if (bracketsMap[top] !== char) return false;
    }
  }
  return stack.length === 0;
};

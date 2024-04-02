/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  //operator
  //takes top two values from the queue
  //replaces it w/ the result and puts it on the top of the queue

  let queue = [];
  let compare = new Set(['+', '-', '*', '/']);
  for (let i = 0; i < tokens.length; i++) {
    queue.push(tokens[i]);
    if (compare.has(tokens[i])) {
      let operation = queue.pop();
      let secondVal = Number(queue.pop());
      let firstVal = Number(queue.pop());
      let modify;
      if (tokens[i] == '*') {
        modify = firstVal * secondVal;
      } else if (tokens[i] == '/') {
        if (firstVal / secondVal < 0) {
          modify = Math.ceil(firstVal / secondVal);
        } else modify = Math.floor(firstVal / secondVal);
      } else if (tokens[i] == '+') {
        modify = firstVal + secondVal;
      } else if (tokens[i] == '-') {
        modify = firstVal - secondVal;
      }
      queue.push(modify);
    }
  }
  return queue[0];
};

//pass in an iterable object into Set. would have to contain the operators in an array
// could also use a switch case instead of if statements

function evalRPN(tokens) {
  let stack = [];
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };
  for (let t of tokens) {
    if (ops[t]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}

//could also attach a key with the fucntions.
//faster as you wouldn't need to check if statements and you can just check if it is included in object

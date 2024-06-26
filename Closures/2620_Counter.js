/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  // with arrow functions, and implicit return
  return () => n++;
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

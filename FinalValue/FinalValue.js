/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let order = {
    '--X': -1,
    'X--': -1,
    'X++': 1,
    '++X': 1,
  };
  let X = 0;
  for (let i = 0; i < operations.length; i++) {
    X += order[operations[i]];
  }
  return X;
};

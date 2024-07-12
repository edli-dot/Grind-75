/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let zeroLength = 0;
  let oneLength = 0;
  let oneCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 0) {
      zeroCount++;
      oneCount = 0;
    } else {
      zeroCount = 0;
      oneCount++;
    }
    if (oneCount > oneLength) oneLength = oneCount;
    if (zeroCount > zeroLength) zeroLength = zeroCount;
  }
  return oneLength > zeroLength;
};

/**
 * o(n) run time
 * can reduce to a single counter and just maintain a temp variable that compares to the max count of zero and one
 */

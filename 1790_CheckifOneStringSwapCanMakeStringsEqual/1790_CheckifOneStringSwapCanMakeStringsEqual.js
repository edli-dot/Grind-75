/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  let diff = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff.push(i);
    }
    if (diff.length > 2) return false;
  }

  return (
    diff.length === 2 &&
    s1[diff[0]] === s2[diff[1]] &&
    s1[diff[1]] === s2[diff[0]]
  );
};

/**
 * initial thought was to have a counter that checks if chars are equal or not.
 * if not then increment. exit if exceeds more than 2
 * this didn't pass all the test cases
 *
 * logic similar but slightly modified
 * keep track of the unaligned chars and exit of more than 2
 * compare positions but also if it is the same chars within each word
 */

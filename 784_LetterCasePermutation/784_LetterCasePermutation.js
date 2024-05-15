/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = [s];
  let indexes = [];
  const copyS = s.split('');
  for (let i = 0; i < copyS.length; i++) {
    if (/[a-zA-Z]/.test(copyS[i])) {
      indexes.push(i);
    }
  }

  const capitalize = (index, string, char) => {
    let chars = [...char];
    const results = [];
    for (let c of chars) {
      let capitalizedChar = c.split('');
      capitalizedChar[index] = capitalizedChar[index].toUpperCase();
      let lowercaseChar = c.split('');
      lowercaseChar[index] = lowercaseChar[index].toLowerCase();
      results.push(capitalizedChar.join(''), lowercaseChar.join(''));
    }
    return results;
  };
  for (let j of indexes) {
    res = capitalize(j, s, res);
  }

  return res;
};

/**
 * found positions of the letters
 * fed it into function as argumens, returning a capitalized and lowercase
 * first run - would need to revisit to optimize
 * WIP for backtracking
 */

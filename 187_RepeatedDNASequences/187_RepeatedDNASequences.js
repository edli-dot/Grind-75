/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) return [];
  let cache = {};
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    const modify = s.slice(i, i + 10);
    if (cache[modify] != undefined && answer.indexOf(modify) == -1) {
      answer.push(modify);
    } else cache[modify] = true;
  }
  return answer;
};

var findRepeatedDnaSequences = function (s) {
  const set = new Set();
  const res = new Set();

  for (let i = 0; i < s.length; i++) {
    const sequence = s.slice(i, i + 10);
    if (set.has(sequence)) res.add(sequence);
    set.add(sequence);
  }

  return [...res];
};

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let left = 0;
  let right = 10;

  const seenDnaSequences = new Set();
  const repeatedDnaSequences = new Set();

  while (right <= s.length) {
    const sequence = s.slice(left, right);
    if (seenDnaSequences.has(sequence)) {
      repeatedDnaSequences.add(sequence);
    } else {
      seenDnaSequences.add(sequence);
    }
    left++;
    right++;
  }

  return Array.from(repeatedDnaSequences);
};

//all ahve teh same time complexity of linear
// but Set has a check membership using has() which is faster than object or an array

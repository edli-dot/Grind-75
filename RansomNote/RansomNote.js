/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let cache = {};
  //Count occurences in ransom
  for (let letter of ransomNote) {
    if (!cache[letter]) cache[letter] = 1;
    else cache[letter]++;
  }

  //Decrement counts based on letters in magazine
  for (let letter of magazine) {
    if (cache[letter] && cache[letter] > 0) cache[letter]--;
  }
  //Check if all counts are zero
  const output = Object.values(cache).every((x) => x === 0); //Boolean
  return output;
};

//Basically a hash map. expect values to be 0 if the word can be properly made up

//Another way to do the boolean output check is w/ the reduce function

const output = Object.values(cache).reduce(
  (acc, val) => acc && val === 0,
  true
);
return output;

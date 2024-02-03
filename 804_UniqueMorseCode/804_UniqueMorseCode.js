/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let letterMap = {};
  let morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  for (let i = 0; i <= 25; i++) {
    letterMap[String.fromCharCode(i + 97)] = morse[i];
  }
  let uniqueMorseSet = new Set();

  words.forEach((word) => {
    let morseWord = word
      .split('')
      .map((char) => letterMap[char])
      .join('');
    uniqueMorseSet.add(morseWord);
  });

  return uniqueMorseSet.size;

  //convert all teh words in palce intot heir morse code equivalent
  //and add it into the hashmap
  //reduce to find only the unique ones
  //using set is faster than hashmap in this case b/c we only care about unique instances as oppose to counting the number of occurences.
};

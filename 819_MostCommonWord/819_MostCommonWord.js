var mostCommonWord = function (paragraph, banned) {
  //split by /\W+/
  //regex - split string whenever one or more non-word character
  //[a-z, A-Z, 0-9] => removes punctuations and special characters from string
  const splitP = paragraph.toLowerCase().split(/\W+/);
  console.log(splitP);
  let cache = {};
  let max = 0;
  let mostCommon = '';

  for (word of splitP) {
    if (!banned.includes(word)) {
      cache[word] ? cache[word]++ : (cache[word] = 1);
      //Check the max count during the iteration so only o(n)
      if (cache[word] > max) {
        max = cache[word];
        mostCommon = word;
      }
    }
  }
  return mostCommon;
};

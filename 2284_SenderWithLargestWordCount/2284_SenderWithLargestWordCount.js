/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
  let cache = {};
  for (let i = 0; i < messages.length; i++) {
    const count = messages[i].split(' ').length;
    cache[senders[i]] = (cache[senders[i]] || 0) + count;
  }
  let maxCount = 0;
  let resultSender = '';

  // find the sender with the largest word count, with lexicographically largest name in case of a tie
  for (let sender in cache) {
    let count = cache[sender];
    if (count > maxCount || (count === maxCount && sender > resultSender)) {
      maxCount = count;
      resultSender = sender;
    }
  }
  return resultSender;
};

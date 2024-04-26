/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let counter = 0;
  for (let i = 0; i < details.length; i++) {
    const age = details[i].slice(11, 13);
    if (Number(details[i].slice(11, 13)) > 60) counter++;
  }
  return counter;
};

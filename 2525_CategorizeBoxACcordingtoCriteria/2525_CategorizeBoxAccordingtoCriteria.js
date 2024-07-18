/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  let bulk = 0;
  let weight = 0;

  if (mass >= 100) weight = 1;
  if (
    length >= 10000 ||
    width >= 10000 ||
    height >= 10000 ||
    length * width * height >= 1000000000
  )
    bulk = 2;
  let code = bulk + weight;
  switch (code) {
    case 3:
      return 'Both';
    case 2:
      return 'Bulky';
    case 1:
      return 'Heavy';
    default:
      return 'Neither';
  }
};

// var categorizeBox = function(length, width, height, mass) {
//     let bulk = false
//     let weight = false
//     if (mass >= 100) weight = true
//     if (length >= 10000 || width >= 10000 || height >= 10000 || height*length*width >= 100000000) bulk = true
//     switch ([bulk, weight]){
//         case [true, true]:
//             return "Both";
//         case [false, true]:
//             return "Heavy";
//         case [true, false]:
//             return "Bulky";
//         default:
//             return "Neither";
//     }

// };

/**
 * switch cases don't allow the usage of arrays to conver the expressions. so this bottom solution seems correct but doens't work
 */

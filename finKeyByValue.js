const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  let result = undefined;
  for (let key in obj) {
    obj[key] === value ? result = key : '';
  }
  return result;
};

module.exports = findKeyByValue;

// //TEST CODE:
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
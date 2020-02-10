const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, value) {
  let result = undefined;
  for (let key in obj) {
    obj[key] === value ? result = key : '';
  }
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));

const eqArrays = function(arr1, arr2) {
  let match;
  for (let i = 0; i < arr1.toString().length; i++) {
    arr1.toString()[i] !== arr2.toString()[i] ? match = false : '';
  }
  return match === false ? false : true;;
};

const assertArraysEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

//console.log(eqArrays(["2", 3], ["2", 3, 4]))
assertArraysEqual(eqArrays(["2", 3, 4, 'a'], ["2", 3, 4, 'a']), true);

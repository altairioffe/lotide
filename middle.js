
const eqArrays = function(arr1, arr2) {
  let match = true;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] !== arr2[i] ? match = false : '';
  }
  return match;
};

const assertArraysEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const middle = function(arr) {
  let result;
  let half = arr.length / 2;
  if (half < 2) return result = [];
  arr.length % 2 === 0 ? result = arr.slice(half - 1, half + 1) : result = arr[Math.floor(half)];
  return result;
};
//TEST CODE:
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); //should PASS
assertArraysEqual(eqArrays(middle([1, 3, 3, 4]), [2, 3]), false); //should FAIL
assertArraysEqual(eqArrays(middle([1, 3, 3, 4]), [2, 3]), false); //should FAIL
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); //should PASS
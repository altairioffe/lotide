const eqArrays = function(arr1, arr2) {
  let match = true;
  for (let i = 0; i < arr1.toString().length; i++) {
    arr1.toString()[i] !== arr2.toString()[i] ? match = false : '';
  }
  return match;
};

const assertArraysEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const flatten = function(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]) ? arr[i].forEach(x => result.push(x)) : result.push(arr[i]);
  }
  return result;
};

console.log(flatten([0, 1, 2, [3, 4]]))
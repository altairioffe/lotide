const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (!callback(i)) result.push(i);
    if (callback(i)) return result;
  }
  return result;
};

// TEST CODE
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true)
assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 'a' ]), false)

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2)
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true)
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywoo' ]), false)
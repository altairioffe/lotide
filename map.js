const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

// TEST CODE
const words = [1, 2, 3, 4];
assertArraysEqual(eqArrays(map(words, x => x + 2), [3, 4, 5, 6]), true);
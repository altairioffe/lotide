const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (!callback(i)) result.push(i);
    if (callback(i)) return result;
  }
  return result;
};

// TEST CODE:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(eqArrays(results1, [1, 2, 5, 7, 2]), true);
assertArraysEqual(eqArrays(results1, [1, 2, 5, 7, 'a']), false);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(eqArrays(results2, ['I\'ve', 'been', 'to', 'Hollywood']), true);
assertArraysEqual(eqArrays(results2, ['I\'ve', 'been', 'to', 'Hollywoo']), false);
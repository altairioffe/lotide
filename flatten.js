const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]) ? arr[i].forEach(x => result.push(x)) : result.push(arr[i]);
  }
  return result;
};
//TEST CODE:
assertArraysEqual(eqArrays(flatten([0, 1, 2, [3, 4]]), [0, 1, 2, 3, 4]), true); //should PASS
assertArraysEqual(eqArrays(flatten([[0, 1], 2, [3, 4]]), [0, 1, 2, 3, 4]), true); //should PASS
assertArraysEqual(eqArrays(flatten([[0, 1], 2, [3, 4]]), [0, 1, 2, 3, 4]), true); //should FAIL
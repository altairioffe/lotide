const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays.js');


//TEST CODE:
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); //should PASS
assertArraysEqual(eqArrays(middle([1, 3, 3, 4]), [2, 3]), false); //should FAIL
assertArraysEqual(eqArrays(middle([1, 3, 3, 4]), [2, 3]), false); //should FAIL
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), 3), true); //should PASS
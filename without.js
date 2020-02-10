const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let result = source.filter(x => !itemsToRemove.includes(x));
  return result;
};

//TEST CODE:
assertArraysEqual((eqArrays((without([1, 2, 3], [1])), [2, 3])), true); //expected TRUE
assertArraysEqual((eqArrays((without(["1", "2", "3"], [1, 2, "3"])), ['1', '2'])), true); //expected TRUE
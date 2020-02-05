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

const without = function(source, itemsToRemove) {
  let result = source.filter(x => !itemsToRemove.includes(x));
  return result;
};
//TEST CODE:
assertArraysEqual((eqArrays((without([1, 2, 3], [1])), [2, 3])), true); //expected TRUE
assertArraysEqual((eqArrays((without(["1", "2", "3"], [1, 2, "3"])), ['1', '2'])), true); //expected TRUE
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  let match = true;
  for (let i = 0; i < arr1.toString().length; i++) {
    arr1.toString()[i] !== arr2.toString()[i] ? match = false : '';
  }
  return match;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ['one', 2, 3]), true); // => should FAIL
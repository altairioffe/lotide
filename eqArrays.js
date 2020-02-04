const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  let str1 = arr1.toString();
  let str2 = arr2.toString();
  let match = true;
  for (let i = 0; i < str1.length; i++) {
    str1[i] !== str2[i] ? match = false : '';
  }
  return match;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ['one', 2, 3]), true); // => should FAIL
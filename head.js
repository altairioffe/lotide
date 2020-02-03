const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};
const head = (arr) => arr[0];

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
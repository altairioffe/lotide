const assertEqual = function(actual, expected) {
  actual.every(x => x === expected[actual.indexOf(x)]) ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (arr) => arr.slice(1);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
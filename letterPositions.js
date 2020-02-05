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

const letterPositions = function(sentence) {
  let results = {};
  let arr = Array.from(sentence); // uncomment to filter out spaces // .filter(x => x !== ' ');
  for (let i = 0; i < arr.length; i++) {
    !results[arr[i]] ? results[arr[i]] = [i] : results[arr[i]].push(i);
  }
  return results;
};

console.log(letterPositions('hello low'));
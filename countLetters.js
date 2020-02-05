const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`) : console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let results = {};
  let arr = Array.from(sentence).filter(x => x !== ' ');
  arr.forEach(x => !results[x] ? results[x] = 1 : results[x]++);
  return results;
};
console.log(countLetters("lighthouse in the house"));
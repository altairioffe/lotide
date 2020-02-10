const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const letterPositions = function(sentence) {
  let results = {};
  let arr = Array.from(sentence); // uncomment to filter out spaces // .filter(x => x !== ' ');
  for (let i = 0; i < arr.length; i++) {
    !results[arr[i]] ? results[arr[i]] = [i] : results[arr[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;
// console.log(letterPositions('hello low'));
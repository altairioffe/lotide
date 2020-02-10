const eqArrays = require('./eqArrays');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  
  const eqObjects = function (actual, expected) {
    if (Object.keys(actual).length !== Object.keys(expected).length) return false;
    for (key in actual) {
      if (Array.isArray(actual[key])) {
        if (eqArrays(actual[key], expected[key]) === false) {
          return false;
        }
      } else {
        if (expected[key] !== actual[key]) {
          return false;
        }
      }
    }
    return true;
  };

  if (eqObjects(actual, expected) === true) {
    console.log(`🥳🥳🥳 PASS: ${inspect(actual)} === ${inspect(expected)}`);
  } else { 
    console.log(`💩💩💩 FAIL: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
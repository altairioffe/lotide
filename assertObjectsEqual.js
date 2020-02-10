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

//TEST CODE:
// const ab = { a: "1", b: '2' };
// const ba = { b: "2", a: "1" };

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false
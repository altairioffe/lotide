const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else {
      if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// //TEST CODE:
// const ab = { a: "1", b: '2' };
// const ba = { b: "2", a: "1" };

// // assertEqual(eqArrays([1, 2, 3, 4], [1, 2]), false); // => true
// // assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// // assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
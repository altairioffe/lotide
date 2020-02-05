const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳🥳🥳 PASS: ${actual} === ${expected}`) : console.log(`💩💩💩 FAIL: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {
  let allMatch;
  for (key in object1 && object2) {
    object2[key] !== object1[key] ? allMatch = false : '';
  }
  return allMatch === false ? false : true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1", };

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
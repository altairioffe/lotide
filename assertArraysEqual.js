const assertArraysEqual = function(arr1, arr2) {

  const eqArrays = function(arr1, arr2) {
    let match = true;
    for (let i = 0; i < arr1.toString().length; i++) {
      arr1.toString()[i] !== arr2.toString()[i] ? match = false : '';
    }
    return match;
  };

  eqArrays(arr1, arr2) === true ? console.log(`🥳🥳🥳 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`💩💩💩 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

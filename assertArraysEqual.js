const assertArraysEqual = function(arr1, arr2) {
  let str1 = arr1.toString();
  let str2 = arr2.toString();
  let match = true;
  for (let i = 0; i < str1.length; i++) {
    str1[i] !== str2[i] ? match = false : '';
  }
  match === true ? console.log(`🥳🥳🥳 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`💩💩💩 Assertion Failed: ${arr1} !== ${arr2}`);
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
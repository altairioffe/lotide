const eqArrays = function(arr1, arr2) {
  let match;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] !== arr2[i] ? match = false : '';
  }
  if (arr1.length !== arr2.length) match = false;
  return match === false ? false : true;
};

module.exports = eqArrays;
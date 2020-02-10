const without = function(source, itemsToRemove) {
  let result = source.filter(x => !itemsToRemove.includes(x));
  return result;
};

module.exports = without;
//TEST CODE:
// assertArraysEqual((eqArrays((without([1, 2, 3], [1])), [2, 3])), true); //expected TRUE
// assertArraysEqual((eqArrays((without(["1", "2", "3"], [1, 2, "3"])), ['1', '2'])), true); //expected TRUE
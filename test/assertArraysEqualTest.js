const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

assertArraysEqual(eqArrays(["2", 3, 4, 'a'], ["2", 3, 4, 'a']), true);
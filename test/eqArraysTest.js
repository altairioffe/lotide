const chai = require('chai');
const assert = chai.assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3, 4] and [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
  });

  it("returns true for ['3', 'a'] and ['3', 'a']", () => {
    assert.strictEqual(eqArrays(['3', 'a'], ['3', 'a']), true); 
  });

  it("returns false for ['3', 'a'] and ['3', 'a', 16]", () => {
    assert.strictEqual(eqArrays(['3', 'a'], ['3', 'a', 16]), false); 
  });  
});
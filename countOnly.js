const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  allItems.forEach(x => !results[x] ? results[x] = 1 : results[x]++);
  return results;
};

module.exports = countOnly;

const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  allItems.forEach(x => !results[x] ? results[x] = 1 : results[x]++);
  return results;
};

module.exports = countOnly;

// //TEST CODE:
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
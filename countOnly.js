const countOnly = function(allItems, itemsToCount) {
  let results = {};
  allItems.forEach(x => {
    if (itemsToCount[x]) {
      results[x] ? results[x]++ : results[x] = 1;
      //return results;
    };
  });
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }))
module.exports = countOnly;
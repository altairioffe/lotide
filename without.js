const without = function(source, itemsToRemove) {
  let result = source.filter(x => !itemsToRemove.includes(x));
  return result;
};

module.exports = without;
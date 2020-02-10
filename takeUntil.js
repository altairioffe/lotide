const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (!callback(i)) result.push(i);
    if (callback(i)) return result;
  }
  return result;
};

module.exports = takeUntil;
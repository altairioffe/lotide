const middle = function(arr) {
  let result;
  let half = arr.length / 2;
  if (half < 2) return result = [];
  arr.length % 2 === 0 ? result = arr.slice(half - 1, half + 1) : result = arr[Math.floor(half)];
  return result;
};

module.exports = middle;
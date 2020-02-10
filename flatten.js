const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]) ? arr[i].forEach(x => result.push(x)) : result.push(arr[i]);
  }
  return result;
};

module.exports = flatten;
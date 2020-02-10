const findKeyByValue = function(obj, value) {
  let result = undefined;
  for (let key in obj) {
    obj[key] === value ? result = key : '';
  }
  return result;
};

module.exports = findKeyByValue;
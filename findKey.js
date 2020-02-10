const findKey = function(obj, cb) {
  for (let i in obj) {
    if (cb(obj[i])) return i;
  }
};

module.exports = findKey;
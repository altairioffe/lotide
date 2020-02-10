const countLetters = function(sentence) {
  let results = {};
  let arr = Array.from(sentence).filter(x => x !== ' ');
  arr.forEach(x => !results[x] ? results[x] = 1 : results[x]++);
  return results;
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));
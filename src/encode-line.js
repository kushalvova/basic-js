const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      arr[i] = 1;
    }
  };
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && typeof arr[i+1] === 'string') {
      arr[i] = (arr[i] + 1) + arr[i+1];
      arr[i+1] = false;
    };
    if (typeof arr[i] === 'number' && typeof arr[i+1] === 'number') {
      arr[i+1] = arr[i] + arr[i+1];
      arr[i] = false;
    };
  }
  return arr.filter(el => el !== false).join('');
}

module.exports = {
  encodeLine
};

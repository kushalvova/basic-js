const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(badCat) {
  let result = 0;
  badCat.forEach(element => {
    result += element.filter(el => el === '^^').length;
  });
  return result;
}

module.exports = {
  countCats
};

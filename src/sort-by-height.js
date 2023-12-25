const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let counter = 0;
  let cloneArr = arr.slice(0);
  let sortArr = cloneArr.sort((a, b) => a - b).filter(elem => elem !== -1);
  let result = [];
  arr.map((el) => {
    if (el !== -1) {
      result.push(sortArr[counter]);
      counter += 1;
    } else result.push(-1);
  });
  return result; 
}

module.exports = {
  sortByHeight
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let myArr = arr.slice(0);
  if (myArr[0] === '--double-prev' || myArr[0] === '--discard-prev') myArr.shift();
  if (myArr[myArr.length - 1] === '--double-next' || myArr[myArr.length - 1] === '--discard-next') myArr.pop();
  return myArr.map((elem, index) => {
    if (myArr[index - 1] === '--discard-next') return elem = 'del';
    else if (elem === '--discard-next') return elem = 'del';  
    else if (elem === '--double-prev' && myArr[index - 2] === '--discard-next') return elem = 'del';
    else if (elem === '--double-prev') return elem = myArr[index - 1];
    else if (elem === '--discard-prev') return elem = 'del';
    else if (elem === '--double-next') return elem = myArr[index + 1];
    else if (myArr[index + 1] === '--discard-prev') return elem = 'del';
    else return elem;
  }).filter(elem => elem !== 'del');
}

module.exports = {
  transform
};

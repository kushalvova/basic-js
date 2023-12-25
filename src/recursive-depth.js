const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, counter = 0) {
    if (arr.length) {
      counter += 1;
      arr = arr.reduce((depth, item) => {
        if (Array.isArray(item)) {
          if (item.length === 0) depth.push(...[null]);
          else depth.push(...item);
        }
        return depth;
      }, []);
      return this.calculateDepth(arr, counter);
    }
    return counter;
  }
}

module.exports = {
  DepthCalculator
};

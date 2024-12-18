const { NotImplementedError } = require("../extensions/index.js");

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
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    if (arr.length === 0) {
      return 1;
    }

    let maxDepth = 0;
    let curDepth = 0;
    for (const elem of arr) {
      if (Array.isArray(elem)) {
        curDepth = this.calculateDepth(elem);

        if (curDepth > maxDepth) {
          maxDepth = curDepth;
          curDepth = 0;
        }
      }
    }
    return maxDepth + 1;
  }
}

module.exports = {
  DepthCalculator,
};

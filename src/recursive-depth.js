const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let result = 0;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        result = Math.max(this.calculateDepth(el), result);
      }
    });
    return result + 1;
  }
};
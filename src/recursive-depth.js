const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr) === true) {return 1 + arr.reduce((acc, value) => Math.max(this.calculateDepth(value), acc),0);}
    else {return 0;}
  }
};
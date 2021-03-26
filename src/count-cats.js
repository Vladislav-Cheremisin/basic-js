const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let arrayAccumulator = [];
  let catsCounter = 0;
  for (let x = 0; x < backyard.length; x++){
    arrayAccumulator = arrayAccumulator.concat(backyard[x]);
  }
  for (let y = 0; y < arrayAccumulator.length; y++) {
    if (arrayAccumulator[y] === `^^`) {
      catsCounter += 1;
    }
  }
  return catsCounter;
};
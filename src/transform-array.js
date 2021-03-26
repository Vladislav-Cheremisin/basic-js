const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let resultArray = [];
  if(array.push) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === `--discard-next`) {i++;}
      else if (array[i] === `--discard-prev`) {
        if (array[i - 2] === `--discard-next`) {continue;}
        else {resultArray.splice(resultArray.length - 1);}
        }
      else if (array[i] === `--double-next`) {resultArray.push(array[i + 1]);}
      else if (array[i] === `--double-prev`) {
        if (array[i - 2] === `--discard-next`) {continue;}
        else {resultArray.push(array[i - 1]);}
        }
      else {resultArray.push(array[i]);}
    }
    return resultArray.filter(element => element !== undefined);
  } else {throw new Error(`This is not an array`);}
};

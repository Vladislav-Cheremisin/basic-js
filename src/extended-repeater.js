const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, options = {}) {
  let additionInformation = [];
  let result = [];
  if (string === undefined) {throw new Error (`You have to set the string into repeater`);}
  if (options.addition === null) {options.addition = `null`;}
  if (options.string === null) {options.addition = `null`;}
  if (options.repeatTimes === undefined) {options.repeatTimes = 1;}
  if (options.separator === undefined) {options.separator = `+`;}
  if (options.addition === undefined) {options.addition = ``;}
  if (options.additionRepeatTimes === undefined && options.addition !== ``) {options.additionRepeatTimes = 1;}
  if (options.additionSeparator === undefined) {options.additionSeparator = `|`;}
  for (let i = 0; i < options.additionRepeatTimes; i++) {additionInformation.push(options.addition);}
  for (let i = 0; i < options.repeatTimes; i++) {result.push(string + additionInformation.join(options.additionSeparator));}
  return result.join(options.separator);
}

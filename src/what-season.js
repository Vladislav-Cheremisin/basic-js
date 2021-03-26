const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    if (date.getMonth !== new Date(2020, 12, 12).getMonth) {throw new Error();}
    else if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {return `winter`}
    else if (date.getMonth() >= 2 && date.getMonth() < 5) {return `spring`}
    else if (date.getMonth() >= 5 && date.getMonth() < 8) {return `summer`}
    else if (date.getMonth() >= 8 && date.getMonth() < 11) {return `autumn`}
  } else {return `Unable to determine the time of year!`}
};


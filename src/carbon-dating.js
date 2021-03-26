const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const validParam = parseFloat(sampleActivity);
  if (typeof (sampleActivity) === "string" && validParam > 0 && validParam < MODERN_ACTIVITY){
    return Math.ceil(Math.log(MODERN_ACTIVITY / validParam) / (Math.LN2 / HALF_LIFE_PERIOD));
  } else {return false;}
};

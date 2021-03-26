const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (Array.isArray(array) === true) {
    let sortArray = [];
    let dreamTeam = ``;
    for (let x = 0; x < array.length; x++) {
      if (typeof array[x] === `string`) {sortArray.push(array[x].trim())};
    }
    sortArray = sortArray.join().toUpperCase().split(`,`).sort((function(a, b) {
      const alphString = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
      if (alphString.indexOf(a[0]) < alphString.indexOf(b[0])){return -1;}
      else if (alphString.indexOf(a[0]) > alphString.indexOf(b[0])){return 1;}
      else return 0;
    }))
    for (let y = 0; y < sortArray.length; y++) {dreamTeam += sortArray[y][0]}
    return dreamTeam;
  }
  return false;
}

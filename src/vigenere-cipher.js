const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(setting = true) {
    this.setting = setting;
  }
  encrypt(string, key) {
    const alph = `ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    if (string !== undefined && key !== undefined) {
        let keyModified = ``;
        let modificatorCounter = -1;
        let result = ``;
        string = string.toUpperCase();
        key = key.toUpperCase();
        while (key.length < string.length){key += key;}
        for (let i = 0; i < string.length; i++) {
          if(alph.indexOf(string[i].toUpperCase()) === -1) {
            keyModified += string[i].toUpperCase();
          }
          else {
            modificatorCounter++;
            keyModified += key[modificatorCounter];
          }
        }
        for (let x = 0; x < string.length; x++) {
          if(alph.indexOf(string[x]) === -1 || alph.indexOf(keyModified[x]) === -1) {
            result += string[x];
          } else {
            result += alph[alph.indexOf(string[x]) + alph.indexOf(keyModified[x])]
          }
        }
        if (this.setting === true) {return result;}
        else {return result.split(``).reverse().join(``);}
    } else {throw new Error(`Please enter correct arguments`)}
  }
  decrypt(string, key) {
    const alph = `ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    if (string !== undefined && key !== undefined) {
      let keyModified = ``;
        let modificatorCounter = -1;
        let result = ``;
        string = string.toUpperCase();
        key = key.toUpperCase();
        while (key.length < string.length){key += key;}
        for (let i = 0; i < string.length; i++) {
          if(alph.indexOf(string[i].toUpperCase()) === -1) {
            keyModified += string[i].toUpperCase();
          }
          else {
            modificatorCounter++;
            keyModified += key[modificatorCounter];
          }
        }
        for (let x = 0; x < string.length; x++) {
          if(alph.indexOf(string[x]) === -1 || alph.indexOf(keyModified[x]) === -1) {
            result += string[x];
          } else {
            result += alph[(alph.indexOf(string[x]) + 26) - alph.indexOf(keyModified[x])];
          }
        }
        if (this.setting === true) {return result;}
        else {return result.split(``).reverse().join(``);}
    } else {throw new Error(`Please enter correct arguments`)}
  }
}

module.exports = VigenereCipheringMachine;

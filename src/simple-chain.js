const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: ``,
  getLength() {
    const chainLengthCounter = chain => {
      let counter = 0;
      for (let i = 0; i < chain.length; i++) {
        chain[i] === `(` ? counter++: counter = counter;
      }
      return counter;
    }
    return chainLengthCounter(this.result);
  },
  addLink(value) {
    if (value !== undefined) {
      if (this.result === ``){this.result = `( ${value} )`;}
      else {this.result = `${this.result}~~( ${value} )`;}
    } else {
      if (this.result === ``){this.result = `( )`;}
      else {this.result = `${this.result}~~( )`;}
    }
    return this;
  },
  removeLink(position) {
    if (isNaN(position) === false && position !== Infinity && position !== -Infinity && Math.round(position) === position){
      let removeResult = [];
      for (let i = 0; i < this.result.split(`~`).length; i++) {
        if (this.result.split(`~`)[i] !== ``) {removeResult.push(this.result.split(`~`)[i]);}
      }
      if (position > 0 && position < removeResult.length) {
        removeResult.splice(position - 1, 1);
        this.result = removeResult.join(`~~`);
      } else {
        this.result = ``;
        throw new Error(`Chain number is invalid. Please use correct number`)
        }
    } else {
      this.result = ``;
      throw new Error(`Chain number is invalid. Please use correct number`)
      }
    return this;
  },
  reverseChain() {
    this.result = this.result.split(`~`).reverse().join(`~`);
    return this;
  },
  finishChain() {
    let tempResult = this.result;
    this.result = ``;
    return tempResult;
  }
};

module.exports = chainMaker;

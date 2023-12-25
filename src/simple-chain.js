const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',

  getLength() {
    return this.str.split('~~').length;
  },
  addLink(value) {
    let arr = [];
    if (this.str !== '') arr = [`${this.str}`];
    arr.push(`( ${value} )`);
    this.str = arr.join('~~');
    return this;
  },
  removeLink(position) {
    let arr = this.str.split('~~');
    if (!position 
      || (position ^ 0) !== position 
      || position > arr.length 
      || position <= 0) {
        this.str = '';
        throw new Error('You can\'t remove incorrect link!');
      }
    arr.splice(position - 1, 1);
    this.str = arr.join('~~');
    return this;
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let finishStr = this.str;
    this.str = '';
    return finishStr;
  }
};

module.exports = {
  chainMaker
};

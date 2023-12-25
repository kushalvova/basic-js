const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  str = String(str);
  let arrStr = [];
  let repeatTimes = options.repeatTimes == undefined ? 1 : options.repeatTimes;
  let separator = options.separator == undefined ? '+' : options.separator;
  let addition = String(options.addition);
  let arrAddition = [];
  let additionRepeatTimes = options.additionRepeatTimes == undefined ? 1 : options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator == undefined ? '|' : options.additionSeparator;
  
  for (let i = 0; i < additionRepeatTimes; i++ ) {
    arrAddition[i] = addition;
  };
  let strAddition = arrAddition.join(additionSeparator);
  if (strAddition == 'undefined') strAddition = '';
  for (let i = 0; i < repeatTimes; i++ ) {
    arrStr[i] = str + strAddition;
  };

  return arrStr.join(separator);
}

module.exports = {
  repeater
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  domains.forEach(element => {
    let arr = element.split('.').reverse();
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = '.' + arr.slice(0, i + 1).join('.');
    };
    newArr.forEach(element => {
      obj.hasOwnProperty(element) ? obj[element]++ : obj[element] = 1;
    });
  });
  return obj;
}

module.exports = {
  getDNSStats
};

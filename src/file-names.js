const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  function rename(names, duplicateName = names[0], count = 1, i = 0) {
    for (i; i < names.length; i++) {
      let firstDuplicateIndex = names.indexOf(duplicateName, i + 1);
      if (firstDuplicateIndex > 0) {
        names[firstDuplicateIndex] = duplicateName + `(${count})`;
        count++;
        rename (names, duplicateName, count, firstDuplicateIndex);
      };
      duplicateName = names[i + 1];
      count = 1;
    };
  };
  rename(names);
  return names;
};

module.exports = {
  renameFiles
};

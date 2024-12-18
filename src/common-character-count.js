const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Map = {};
  const s2Map = {};

  for (const char of s1) {
    s1Map[char] = (s1Map[char] || 0) + 1;
  }

  for (const char of s2) {
    s2Map[char] = (s2Map[char] || 0) + 1;
  }

  let commonCount = 0;
  for (const char in s1Map) {
    if (char in s2Map) {
      commonCount += Math.min(s1Map[char], s2Map[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};

// const { NotImplementedError } = require("../extensions/index.js");

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
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  const addition =
    "addition" in options
      ? new Array(options.additionRepeatTimes)
          .fill(options.addition + "")
          .join(additionSeparator)
      : "";

  const base = new Array(options.repeatTimes)
    .fill(str + "" + addition)
    .join(separator);

  return base;
}

module.exports = {
  repeater,
};

const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    const intActivity = parseFloat(sampleActivity);
    if (
      isNaN(intActivity) ||
      intActivity > MODERN_ACTIVITY ||
      intActivity < 1
    ) {
      return false;
    } else {
      const atomsRatio = MODERN_ACTIVITY / intActivity;
      const k = Math.LN2 / HALF_LIFE_PERIOD;
      const rateLaw = Math.log(atomsRatio);
      const elapsedTime = rateLaw / k;
      return Math.ceil(elapsedTime);
    }
  }
  return false;
}

module.exports = {
  dateSample,
};

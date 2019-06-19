import constants from "../constants";

/**
 * Determines index of target field
 *
 * @param {Number} position - Default field index
 * @param {Number} increment - Field amount of desired advancement
 * @param {String} color - Player color
 * @return {Number} Target field index
 */
export default (position, increment, color) => {
  const range = constants.positions.precedingHome[color];

  if (position >= range.start && position <= range.end) {
    if (position + increment > range.end) {
      return (
        constants.positions.home[color] - position - increment + range.end + 1
      );
    } else {
      return (position + increment) % 40;
    }
  } else {
    return (position + increment) % 40;
  }
};

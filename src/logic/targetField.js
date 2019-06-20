import constants from "../constants";

/**
 * Determines index of target field
 *
 * @param {Number} position - Default field index
 * @param {Number} increment - Field amount of desired advancement
 * @param {String} color - Player color
 * @return {Number} Target field index
 */
export default (pieces, position, increment, color) => {
  const range = constants.positions.precedingHome[color];
  let finalPosition = undefined;

  if (position >= range.start && position <= range.end) {
    if (position + increment > range.end) {
      finalPosition =
        constants.positions.home[color] - position - increment + range.end + 1;
    } else {
      finalPosition = (position + increment) % 40;
    }
  } else {
    finalPosition = (position + increment) % 40;
  }

  const filtered = pieces.filter(piece => piece.position === finalPosition);

  if (filtered.length > 0 && filtered[0].color === color) {
    return undefined;
  }

  return finalPosition;
};

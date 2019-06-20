import constants from "../constants";

/**
 * @typedef {Object} Points
 * @property {Array} points - Array of point indices
 * @property {Boolean} regular - Whether both ends of point range lie in the base circuit
 * @property {Number} [end] - End boundary index
 */

/**
 * Determines if field lies in the base circuit
 *
 * @param {Number} n - Field index
 * @return {Boolean} Whether field lies in the base circuit
 */
const isRegularField = n => n > -1 && n < 40;

/**
 * Projects all points between two boundaries
 *
 * @param {Number} start - Start boundary index
 * @param {Number} end - End boundary index
 * @return {Points} Information on points between boundaries
 */
export default (start, end) => {
  if (isRegularField(start) && isRegularField(end)) {
    if (end < start) {
      // wraparound

      return {
        points: [
          ...[...Array(40 - start).keys()].map(i => i + start),
          ...Array(end + 1).keys()
        ],
        regular: true
      };
    }

    return {
      points: [...Array(end - start + 1).keys()].map(i => i + start),
      regular: true
    };
  }

  return {
    points: [
      ...Array(
        constants.movement.bindings[Math.floor(end / 100) * 100] - start + 1
      ).keys()
    ].map(i => i + start),
    regular: false,
    end
  };
};

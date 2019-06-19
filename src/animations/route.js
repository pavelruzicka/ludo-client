import constants from "../constants";

import getAllPoints from "./points";

/**
 * Provides a set of directions to perform piece movement animation
 *
 * @param {Number} from - Source field index
 * @param {Number} to - Destination field index
 * @return {String[]} Set of directions
 */
export default (from, to) => {
  const { ranges, homes, bindings } = constants.movement;
  const route = getAllPoints(from, to);
  const path = [];

  for (let [index, node] of route.points.entries()) {
    const subsequentNode = route.points[index + 1];

    if (subsequentNode !== undefined) {
      const range = ranges.filter(
        r => subsequentNode >= r.start && subsequentNode <= r.end
      )[0];

      path.push([0, 39].includes(subsequentNode) ? "up" : range.direction);
    } else {
      if (!route.regular) {
        const homeBase = Math.floor(route.end / 100) * 100;
        const { direction } = homes[bindings[homeBase]];

        path.push(...Array(homeBase + 4 - route.end).fill(direction));
      }
    }
  }

  return path;
};

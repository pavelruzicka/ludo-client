import constants from "../constants";

import getAllPoints from "./points";

export default (from, to) => {
  const { ranges, homes, bindings } = constants.movement;
  const route = getAllPoints(from, to);
  const path = [];

  for (let [index, node] of route.points.entries()) {
    const subsequentNode = route.points[index + 1];

    if (subsequentNode) {
      const range = ranges.filter(
        r => subsequentNode >= r.start && subsequentNode <= r.end
      )[0];

      path.push(range ? range.direction : "up");
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

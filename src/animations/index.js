import constants from "../constants";

const isRegularField = n => n > -1 && n < 40;

const getAllPoints = (start, end) => {
  if (isRegularField(start) && isRegularField(end)) {
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

export default {
  analyzeRoute: (from, to) => {
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
  }
};

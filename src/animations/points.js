import constants from "../constants";

const isRegularField = n => n > -1 && n < 40;

export default (start, end) => {
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

import constants from "../constants";

export default (position, increment, color) => {
  const range = constants.positions.precedingHome[color];

  if (position >= range.start && position <= range.end) {
    if (position + increment > range.end) {
      return (
        constants.positions.home[color] - position - increment + range.end + 1
      );
    } else {
      return position + increment;
    }
  } else {
    return position + increment;
  }
};

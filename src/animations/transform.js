import constants from "../constants";

/**
 * @typedef {Object} Translation
 * @property {Number} x - X coordinate of translation
 * @property {Number} y - Y coordinate of translation
 */

/**
 * Transforms set of directions into translation coordinates
 *
 * @param {Array} directions - Set of directions
 * @return {Translation} Translation values
 */

export default directions => {
  const { translationValue } = constants.movement;
  const running = { x: 0, y: 0 };
  const transform = [];

  for (let direction of directions) {
    switch (direction) {
      case "left":
        running.x -= translationValue;
        break;
      case "right":
        running.x += translationValue;
        break;
      case "up":
        running.y -= translationValue;
        break;
      case "down":
        running.y += translationValue;
        break;
    }

    transform.push({ x: running.x.toFixed(1), y: running.y.toFixed(1) });
  }

  return transform;
};

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
  const running = { x: 0, y: 0 };
  const transform = [];

  for (let direction of directions) {
    switch (direction) {
      case "left":
        running.x -= 3.9;
        break;
      case "right":
        running.x += 3.9;
        break;
      case "up":
        running.y -= 3.9;
        break;
      case "down":
        running.y += 3.9;
        break;
    }

    transform.push({ x: running.x.toFixed(1), y: running.y.toFixed(1) });
  }

  return transform;
};

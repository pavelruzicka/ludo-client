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

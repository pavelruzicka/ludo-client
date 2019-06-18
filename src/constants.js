export default {
  positions: {
    start: {
      green: 0,
      red: 10,
      blue: 20,
      yellow: 30
    },
    def: {
      green: 600,
      red: 500,
      blue: 700,
      yellow: 800
    },
    home: {
      green: 203,
      red: 103,
      blue: 303,
      yellow: 403
    },
    precedingHome: {
      green: {
        start: 34,
        end: 39
      },
      red: {
        start: 4,
        end: 9
      },
      blue: {
        start: 14,
        end: 19
      },
      yellow: {
        start: 24,
        end: 29
      }
    }
  },
  movement: {
    ranges: [
      { start: 1, end: 4, direction: "right" },
      { start: 5, end: 8, direction: "up" },
      { start: 9, end: 10, direction: "right" },
      { start: 11, end: 14, direction: "down" },
      { start: 15, end: 18, direction: "right" },
      { start: 19, end: 20, direction: "down" },
      { start: 21, end: 24, direction: "left" },
      { start: 25, end: 28, direction: "down" },
      { start: 29, end: 30, direction: "left" },
      { start: 31, end: 34, direction: "up" },
      { start: 35, end: 38, direction: "left" }
    ],
    homes: {
      9: { direction: "down" },
      19: { direction: "left" },
      29: { direction: "up" },
      39: { direction: "right" }
    },
    bindings: { 100: 9, 200: 39, 300: 19, 400: 29 }
  }
};

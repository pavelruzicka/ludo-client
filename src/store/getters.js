export default {
  occupancyStatus: state => position => {
    const selection = state.pieces.filter(p => p.position === position)[0];

    if (selection) {
      return {
        occupied: true,
        by: { color: selection.color, piece: selection.piece }
      };
    } else {
      return { occupied: false };
    }
  }
};

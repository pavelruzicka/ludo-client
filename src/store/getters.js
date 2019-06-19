export default {
  occupancyStatus: state => position => {
    const selection = state.pieces.filter(p => p.position === position)[0];

    if (selection) {
      return {
        occupied: true,
        by: selection
      };
    } else {
      return { occupied: false };
    }
  },

  hasPiecesRemaining: state => state.remaining.length > 0,

  hasNoPiecesDeployed: state => state.remaining.length === 4,

  pieceToDeploy: state => state.remaining[0],

  color: state => state.color,

  awaitStatus: state => state.awaitStatus,

  animationAwait: state => state.animationAwait,

  lastRoll: state => state.lastRoll,

  transformStyle: state => state.transformStyle
};

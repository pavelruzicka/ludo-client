export default {
  occupancyStatus: state => (position, reverse = true) => {
    let selection = state.pieces.filter(p => p.position === position);

    if (reverse) {
      selection = selection.reverse();
    }

    if (selection.length > 0) {
      return {
        occupied: true,
        by: selection[0]
      };
    } else {
      return { occupied: false };
    }
  },

  pieces: state => state.pieces,

  hasPiecesRemaining: state => state.remaining.length > 0,

  hasNoPiecesDeployed: state => state.remaining.length === 4,

  pieceToDeploy: state => state.remaining[0],

  color: state => state.color,

  awaitStatus: state => state.awaitStatus,

  positionToCheck: state => state.positionToCheck,

  animationAwait: state => state.animationAwait,

  animationType: state => state.animationType,

  lastRoll: state => state.lastRoll,

  rollStatus: state => state.rollReady,

  transformStyle: state => state.transformStyle
};

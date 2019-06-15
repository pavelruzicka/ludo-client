import constants from "../constants";

const selectMatchingPiece = (state, color, piece) =>
  state.pieces.filter(p => p.color === color && p.piece === piece)[0];

export default {
  advancePiece: (state, payload) => {
    const { increment, color, piece } = payload;
    const selection = selectMatchingPiece(state, color, piece);

    if (selection) {
      const remainingPieces = state.pieces.filter(p => p !== selection);
      selection.position += increment;

      state.pieces = [...remainingPieces, selection];
    } else {
      throw new Error("Cannot advance a non-existent piece");
    }
  },

  deployPiece: (state, payload) => {
    const { color, piece } = payload;
    const selection = selectMatchingPiece(state, color, piece);

    if (selection) {
      if (selection.deployed) {
        throw new Error("Cannot redeploy a piece");
      } else {
        const remainingPieces = state.pieces.filter(p => p !== selection);
        selection.position = constants.positions.start[color];
        selection.deployed = true;

        state.pieces = [...remainingPieces, selection];
      }
    } else {
      throw new Error("Cannot deploy a non-existent piece");
    }
  },

  spawnSet: (state, payload) => {
    const { color } = payload;
    const defPosition = constants.positions.def[color];

    const pieces = ["a", "b", "c", "d"].map((piece, index) => ({
      color,
      piece,
      position: defPosition + index,
      deployed: false
    }));

    state.pieces.push(...pieces);
  }
};

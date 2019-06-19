export default (state, color, piece) =>
  state.pieces.filter(p => p.color === color && p.piece === piece)[0];

/**
 * Selects matching piece from piece bank
 *
 * @param {Object} state - Central app state
 * @param {String} color - Color of sought-after game piece
 * @param {String} piece - Notation of sought-after game piece
 * @return {Object} Matching piece
 */
export default (state, color, piece) =>
  state.pieces.filter(p => p.color === color && p.piece === piece)[0];

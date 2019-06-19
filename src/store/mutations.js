import constants from "../constants";

const selectMatchingPiece = (state, color, piece) =>
  state.pieces.filter(p => p.color === color && p.piece === piece)[0];

export default {
  /**
   * Move game piece forward a set number of fields
   *
   * @param {Object} state - Central app state
   * @param {Number} payload.increment - Desired amount of fields
   * @param {String} payload.color - Color of game piece to be moved
   * @param {String} payload.piece - Distinction-enabling game piece notation
   */

  advancePiece: (state, payload) => {
    const { increment, color, piece } = payload;
    const { precedingHome, home } = constants.positions;
    const selection = selectMatchingPiece(state, color, piece);

    if (!selection) {
      throw new Error("Cannot advance a non-existent piece");
    } else {
      const remainingPieces = state.pieces.filter(p => p !== selection);
      const { start, end } = precedingHome[color];

      if (selection.position >= start && selection.position <= end) {
        // possibly in zone preceding own home

        if (selection.position + increment <= end) {
          // unable to reach home, advance regularly
          selection.position += increment;
        } else {
          if (selection.position + increment <= end + 4) {
            // able to reach home, check occupancy
            const homePos =
              home[color] - selection.position - increment + end + 1;

            const field = state.pieces.filter(p => p.position === homePos)[0];

            if (!field) {
              // desired position not occupied
              selection.position = homePos;
              selection.deployed = false;
              selection.home = true;
            }
          } else {
            // dice roll out of home range, notify player
          }
        }
      } else {
        // not preceding own home
        selection.position += increment;

        if (selection.position > 39) {
          // ensure board circularity
          selection.position -= 40;
        }
      }

      state.pieces = [...remainingPieces, selection];
    }
  },

  /**
   * Deploy game piece from its default point to player's starting field
   *
   * @param {Object} state - Central app state
   * @param {String} payload.color - Color of game piece to be deployed
   * @param {String} payload.piece - Distinction-enabling game piece notation
   */

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
        state.remaining = state.remaining.filter(
          piece => piece !== selection.piece
        );
      }
    } else {
      throw new Error("Cannot deploy a non-existent piece");
    }
  },

  /**
   * Spawn a set of four game pieces into player's starting fields
   *
   * @param {Object} state - Central app state
   * @param {String} payload.color - Color of game pieces to spawned in
   */

  spawnSet: (state, payload) => {
    const { color } = payload;
    const defPosition = constants.positions.def[color];
    const notation = ["a", "b", "c", "d"];

    const pieces = notation.map((piece, index) => ({
      color,
      piece,
      position: defPosition + index,
      deployed: false,
      home: false
    }));

    state.pieces.push(...pieces);
    state.remaining = notation;
  },

  /**
   * Enable game piece selection mode
   *
   * @param {Object} state - Central app state
   * @param {Boolean} payload.target - Target boolean value to set
   */

  setAwaitStatus: (state, payload) => {
    state.awaitStatus = payload.target;
  },

  setAnimationAwait: (state, payload) => {
    state.animationAwait = payload.target;
  },

  /**
   * Save latest die roll value
   *
   * @param {Object} state - Central app state
   * @param {Number} payload.value - Target value to set
   */

  setLastRoll: (state, payload) => {
    state.lastRoll = payload.value;
  },

  setTransformStyle: (state, payload) => {
    state.transformStyle = {
      transform: `translate(${payload.x}rem, ${payload.y}rem)`
    };
  }
};

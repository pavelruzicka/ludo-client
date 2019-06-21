import matchingPiece from "../logic/matchingPiece";

import constants from "../constants";

export default {
  /**
   * Moves game piece forward a set number of fields
   *
   * @param {Object} state - Central app state
   * @param {Number} payload.increment - Desired amount of fields
   * @param {String} payload.color - Color of game piece to be moved
   * @param {String} payload.piece - Distinction-enabling game piece notation
   */
  advancePiece: (state, payload) => {
    const { increment, color, piece } = payload;
    const { precedingHome, home } = constants.positions;
    const selection = matchingPiece(state, color, piece);

    if (!selection) {
      throw new Error("Cannot advance a non-existent piece");
    } else {
      const remainingPieces = state.pieces.filter(p => p !== selection);
      const { start, end } = precedingHome[color];

      if (selection.position >= start && selection.position <= end) {
        if (selection.position + increment <= end) {
          selection.position += increment;
        } else {
          if (selection.position + increment <= end + 4) {
            const homePos =
              home[color] - selection.position - increment + end + 1;

            const field = state.pieces.filter(p => p.position === homePos)[0];

            if (!field) {
              selection.position = homePos;
              selection.deployed = false;
              selection.home = true;
            } else {
              console.error("Target home position already occupied");
            }
          }
        }
      } else {
        selection.position += increment;

        if (selection.position > 39) {
          selection.position -= 40;
        }
      }

      state.positionToCheck = selection.position;
      state.pieces = [...remainingPieces, selection];
    }
  },

  /**
   * Deploys game piece from its default point to player's starting field
   *
   * @param {Object} state - Central app state
   * @param {String} payload.color - Color of game piece to be deployed
   * @param {String} payload.piece - Distinction-enabling game piece notation
   */
  deployPiece: (state, payload) => {
    const { color, piece } = payload;
    const selection = matchingPiece(state, color, piece);

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
   * Spawns a set of four game pieces into player's starting fields
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

  eliminatePiece: (state, payload) => {
    const { color, piece } = payload;
    const selection = matchingPiece(state, color, piece);
    const notation = ["a", "b", "c", "d"];

    if (selection) {
      if (!selection.deployed) {
        throw new Error("Cannot eliminate a non-deployed piece");
      } else {
        const remainingPieces = state.pieces.filter(p => p !== selection);
        selection.position =
          constants.positions.def[color] + notation.indexOf(piece);
        selection.deployed = false;

        state.pieces = [...remainingPieces, selection];

        if (color === state.color) {
          state.remaining.push(piece);
        }
      }
    } else {
      throw new Error("Cannot deploy a non-existent piece");
    }
  },

  /**
   * Enables game piece selection mode
   *
   * @param {Object} state - Central app state
   * @param {Boolean} payload.target - Target boolean value to set
   */
  setAwaitStatus: (state, payload) => {
    state.awaitStatus = payload.target;
  },

  /**
   * Enables animation mode
   *
   * @param {Object} state - Central app state
   * @param {Number} payload.target - Current location of animated piece
   */
  setAnimationAwait: (state, payload) => {
    state.animationAwait = payload.target;
  },

  /**
   * Determines whether animation takes place inside base ring
   *
   * @param {Object} state - Central app state
   * @param {Number} payload.target - One of "default", "home"
   */
  setAnimationType: (state, payload) => {
    state.animationType = payload.target;
  },

  /**
   * Saves latest die roll value
   *
   * @param {Object} state - Central app state
   * @param {Number} payload.value - Target value to set
   */
  setLastRoll: (state, payload) => {
    state.lastRoll = payload.value;
  },

  /**
   * Saves latest animation translation step
   *
   * @param {Object} state - Central app state
   * @param {Number} payload.x - X coordinate to use
   * @param {Number} payload.y - Y coordinate to use
   */
  setTransformStyle: (state, payload) => {
    state.transformStyle = {
      transform: `translate(${payload.x}rem, ${payload.y}rem)`
    };
  }
};

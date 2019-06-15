import Vue from "vue";
import Vuex from "vuex";
import constants from "./constants";

Vue.use(Vuex);

const selectMatchingPiece = (state, color, piece) =>
  state.pieces.filter(p => p.color === color && p.piece === piece)[0];

export default new Vuex.Store({
  state: {
    pieces: [
      { position: 600, color: "green", piece: "a", deployed: false },
      { position: 601, color: "green", piece: "b", deployed: false },
      { position: 500, color: "red", piece: "a", deployed: false }
    ]
  },

  mutations: {
    advancePiece: (state, payload) => {
      const { increment, color, piece } = payload;
      const selection = selectMatchingPiece(state, color, piece);

      if (selection) {
        const remainingPieces = state.pieces.filter(p => p !== selection);
        selection.position += increment;

        state = [...remainingPieces, selection];
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
          selection.position = constants.startingPositions[color];
          selection.deployed = true;

          state = [...remainingPieces, selection];
        }
      } else {
        throw new Error("Cannot deploy a non-existent piece");
      }
    }
  },

  getters: {
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
  }
});

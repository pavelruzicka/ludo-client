import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pieces: [
      { position: 0, color: "green", piece: "a" },
      { position: 12, color: "yellow", piece: "b" },
      { position: 701, color: "blue", piece: "c" },
      { position: 101, color: "red", piece: "d" }
    ]
  },

  mutations: {
    advancePiece: (state, payload) => {
      const selection = state.pieces.filter(
        p => p.color === payload.color && p.piece === payload.piece
      )[0];

      if (selection) {
        const otherPieces = state.pieces.filter(p => p !== selection);
        selection.position += payload.increment;

        state = [...otherPieces, selection];
      } else {
        throw new Error("Cannot advance a non-existent piece");
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

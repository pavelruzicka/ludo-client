import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    piecePosition: 0
  },

  mutations: {
    advancePiece: (state, payload) => {
      state.piecePosition += payload.increment;
    }
  },

  getters: {
    piecePosition: state => state.piecePosition,

    occupancyStatus: state => position => ({
      occupied: state.piecePosition === position,
      by:
        state.piecePosition === position
          ? { color: "green", piece: "a" }
          : undefined
    })
  }
});

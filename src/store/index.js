import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const initialState = () => ({
  color: "red",
  remaining: [],
  awaitStatus: false,
  animationAwait: false,
  animationType: null,
  lastRoll: 0,
  positionToCheck: null,
  pieces: [
    { color: "green", piece: "b", deployed: true, home: false, position: 22 }
  ],
  transformStyle: { transform: "" }
});

export default new Vuex.Store({
  state: initialState(),
  actions,
  mutations,
  getters
});

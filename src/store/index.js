import Vue from "vue";
import Vuex from "vuex";
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
  pieces: [],
  transformStyle: { transform: "" }
});

export default new Vuex.Store({
  state: initialState(),
  mutations,
  getters
});

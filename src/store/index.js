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
  lastRoll: 0,
  pieces: [
    { color: "red", piece: "a", position: 103, deployed: false, home: true },
    { color: "red", piece: "b", position: 5, deployed: true, home: false },
    { color: "green", piece: "b", position: 7, deployed: true, home: false }
  ],
  transformStyle: { transform: "" }
});

export default new Vuex.Store({
  state: initialState(),
  mutations,
  getters
});

import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const initialState = () => ({
  color: "red",
  remaining: [],
  awaitStatus: false,
  lastRoll: 0,
  pieces: [
    { color: "yellow", piece: "a", position: 22, deployed: true, home: false }
  ],
  transformStyle: { transform: "" }
});

export default new Vuex.Store({
  state: initialState(),
  mutations,
  getters
});

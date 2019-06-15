import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const initialState = () => ({
  pieces: [
    { position: 600, color: "green", piece: "a", deployed: false },
    { position: 601, color: "green", piece: "b", deployed: false },
    { position: 500, color: "red", piece: "a", deployed: false }
  ]
});

export default new Vuex.Store({
  state: initialState(),
  mutations,
  getters
});

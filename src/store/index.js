import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const initialState = () => ({
  pieces: []
});

export default new Vuex.Store({
  state: initialState(),
  mutations,
  getters
});

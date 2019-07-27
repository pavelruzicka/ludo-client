<template>
  <div id="app">
    <div>
      <button @click="rollDie()">Roll die</button>
      <button @click="openLobby()">Lobby</button>
    </div>

    <transition name="cloak">
      <LobbyModal v-if="lobbyModalShown" />
    </transition>

    <transition name="cloak">
      <DieModal v-if="gameModalShown" @hide-modal="execute" />
    </transition>

    <transition name="cloak">
      <Cloak v-if="awaitStatus" />
    </transition>

    <Board :fields="fields" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Board from "./components/Board";

import Cloak from "./modals/Cloak";
import DieModal from "./modals/Die";
import LobbyModal from "./modals/Lobby";

export default {
  name: "app",

  components: { Board, Cloak, DieModal, LobbyModal },

  data() {
    return {
      gameModalShown: false,
      lobbyModalShown: false,
      dieRoll: undefined
    };
  },

  computed: {
    ...mapGetters(["color", "awaitStatus"])
  },

  created() {
    this.fields = Array(40).fill({ occupied: "", special: null, start: false });

    this.fields[0] = { occupied: "", special: "green", start: true };
    this.fields[10] = { occupied: "", special: "red", start: true };
    this.fields[20] = { occupied: "", special: "blue", start: true };
    this.fields[30] = { occupied: "", special: "yellow", start: true };

    this.fields = this.fields.map((field, index) => ({ ...field, index }));

    this.spawn();
  },

  methods: {
    spawn() {
      this.$store.commit("spawnSet", { color: "red" });
    },

    openLobby() {
      this.lobbyModalShown = true;
    },

    rollDie() {
      this.gameModalShown = true;
    },

    execute({ action }) {
      this.gameModalShown = false;

      if (action === "deploy") {
        const toDeploy = this.$store.getters.pieceToDeploy;

        // TODO: sort out piece collision

        this.$store.commit("setAnimationType", { target: "home" });
        this.$store.commit("deployPiece", {
          color: this.color,
          piece: toDeploy
        });
      } else if (action === "advance") {
        this.$store.commit("setAwaitStatus", { target: true });
        this.$store.commit("setAnimationAwait", { target: true });
      }
    }
  }
};
</script>

<style lang="sass" src="./styles/App.sass"></style>
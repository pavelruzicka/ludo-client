<template>
  <div id="app">
    <div>
      <button @click="rollDie()">Roll die</button>
      <button @click="test()">Move by five</button>
      <button @click="test2()">Move by four</button>
    </div>

    <transition name="cloak">
      <Modal v-if="modalShown" :roll="dieRoll" @hide-modal="execute"/>
    </transition>

    <transition name="cloak">
      <Cloak v-if="awaitStatus"/>
    </transition>

    <Board :fields="fields"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Board from "./components/Board";
import Modal from "./components/Modal";
import Cloak from "./components/Cloak";

export default {
  name: "app",

  components: { Board, Modal, Cloak },

  data() {
    return {
      modalShown: false,
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

    deploy() {
      this.$store.commit("deployPiece", { color: "red", piece: "a" });
    },

    rollDie() {
      //this.dieRoll = Math.floor(Math.random() * 6) + 1;
      this.dieRoll = 6;

      this.modalShown = true;
    },

    test() {
      this.$store.commit("advancePiece", {
        color: "red",
        piece: "a",
        increment: 5
      });
    },

    test2() {
      this.$store.commit("advancePiece", {
        color: "red",
        piece: "a",
        increment: 4
      });
    },

    execute({ action }) {
      this.modalShown = false;

      if (action === "deploy") {
        const toDeploy = this.$store.getters.pieceToDeploy;

        this.$store.commit("deployPiece", {
          color: this.color,
          piece: toDeploy
        });
      } else if (action === "advance") {
        this.$store.commit("setLastRoll", { value: this.dieRoll });
        this.$store.commit("setAwaitStatus", { target: true });
      }
    }
  }
};
</script>

<style lang="sass" src="./styles/App.sass"></style>
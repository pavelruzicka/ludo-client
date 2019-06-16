<template>
  <div id="app">
    <div>
      <button @click="spawn()">Spawn set</button>
      <button @click="deploy()">Deploy piece</button>
      <button @click="rollDie()">Roll die</button>
    </div>

    <transition name="modal">
      <Modal v-if="modalShown" :roll="dieRoll" @hideModal="modalShown = false"/>
    </transition>

    <Board :fields="fields"/>
  </div>
</template>

<script>
import Board from "./components/Board";
import Modal from "./components/Modal";

export default {
  name: "app",

  components: { Board, Modal },

  data() {
    return {
      modalShown: false,
      dieRoll: undefined
    };
  },

  created() {
    this.fields = Array(40).fill({ occupied: "", special: null, start: false });

    this.fields[0] = { occupied: "", special: "green", start: true };
    this.fields[10] = { occupied: "", special: "red", start: true };
    this.fields[20] = { occupied: "", special: "blue", start: true };
    this.fields[30] = { occupied: "", special: "yellow", start: true };

    this.fields = this.fields.map((field, index) => ({ ...field, index }));
  },

  methods: {
    spawn() {
      this.$store.commit("spawnSet", { color: "red" });
    },

    deploy() {
      this.$store.commit("deployPiece", { color: "red", piece: "a" });
    },

    advance() {
      this.$store.commit("advancePiece", {
        increment: this.rollDice(),
        color: "red",
        piece: "a"
      });
    },

    rollDie() {
      this.dieRoll = Math.floor(Math.random() * 6) + 1;

      this.modalShown = true;
    }
  }
};
</script>

<style lang="sass" src="./styles/App.sass"></style>

<style lang="sass">
.modal-enter-active, .modal-leave-active
  transition: all .3s ease

.modal-enter, .modal-leave-to
  opacity: 0
</style>
<template>
  <div id="app">
    <div>
      <button @click="spawn()">Spawn set</button>
      <button @click="rollDie()">Roll die</button>
    </div>

    <transition name="modal">
      <Modal v-if="modalShown" :roll="dieRoll" @hide-modal="execute"/>
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
      dieRoll: undefined,
      color: undefined
    };
  },

  created() {
    const { color } = this.$store.getters;
    this.color = color;

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

    rollDie() {
      this.dieRoll = Math.floor(Math.random() * 6) + 1;
      //this.dieRoll = 6;

      this.modalShown = true;
    },

    execute({ action }) {
      this.modalShown = false;

      if (action === "deploy") {
        const toDeploy = this.$store.getters.pieceToDeploy;

        this.$store.commit("deployPiece", {
          color: this.color,
          piece: toDeploy
        });
      } else if (action === "move") {
        this.$store.commit("setLastRoll", { value: this.dieRoll });
        this.$store.commit("setAwaitStatus", { target: true });
      }
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
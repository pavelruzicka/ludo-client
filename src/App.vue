<template>
  <div id="app">
    <div>
      <button @click="spawn()">spawn</button>
    </div>

    <Board :fields="fields"/>
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "app",

  components: { Board },

  data() {
    return {};
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
    rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    },

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
    }
  }
};
</script>

<style lang="sass" src="./styles/App.sass"></style>

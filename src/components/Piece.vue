<template>
  <div
    class="piece"
    :class="[occupancy && occupancy.occupied ? `piece--${occupancy.by.color}` : null]"
    @click="advancePiece()"
  ></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "piece",

  props: ["occupancy"],

  computed: {
    ...mapGetters(["awaitStatus"])
  },

  methods: {
    advancePiece() {
      if (this.awaitStatus) {
        const { color, piece } = this.occupancy.by;
        const increment = this.$store.getters.lastRoll;

        this.$store.commit("advancePiece", { color, piece, increment });
        this.$store.commit("setAwaitStatus", { target: false });
      } else {
        console.error("Cannot move this piece");
      }
    }
  }
};
</script>

<style lang="sass" src="../styles/Piece.sass"></style>
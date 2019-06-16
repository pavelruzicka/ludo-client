<template>
  <div
    :class="[
      'piece',
      occupancy && occupancy.occupied ? `piece--${occupancy.by.color}` : null,
      {
        'piece--awaiting': this.awaitStatus && this.color === this.occupancy.by.color
      }
    ]"
    @click="advancePiece()"
  ></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "piece",

  props: ["occupancy"],

  computed: {
    ...mapGetters(["awaitStatus", "color"])
  },

  methods: {
    advancePiece() {
      if (this.awaitStatus) {
        const { color, piece } = this.occupancy.by;
        const increment = this.$store.getters.lastRoll;

        if (color === this.color) {
          this.$store.commit("advancePiece", { color, piece, increment });
          this.$store.commit("setAwaitStatus", { target: false });
        } else {
          console.error("Cannot move this piece (different color)");
        }
      } else {
        console.error("Cannot move this piece (not awaiting selection)");
      }
    }
  }
};
</script>

<style lang="sass" src="../styles/Piece.sass"></style>
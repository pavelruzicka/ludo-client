<template>
  <div
    :class="[
      'piece',
      occupancy && occupancy.occupied ? `piece--${occupancy.by.color}` : null,
      {
        'piece--awaiting': isAwaiting
      }
    ]"
    @click="advancePiece()"
  ></div>
</template>

<script>
import { mapGetters } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "piece",

  props: ["occupancy", "index"],

  computed: {
    ...mapGetters(["awaitStatus", "color"]),

    isAwaiting() {
      return (
        this.awaitStatus &&
        this.color === this.occupancy.by.color &&
        this.occupancy.by.deployed &&
        this.index < 40
      );
    }
  },

  methods: {
    advancePiece() {
      if (this.awaitStatus) {
        const { color, piece } = this.occupancy.by;
        const increment = this.$store.getters.lastRoll;

        if (color === this.color) {
          this.$store.commit("setAwaitStatus", { target: false });

          setTimeout(() => {
            this.$store.commit("advancePiece", { color, piece, increment });
          }, 500);
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
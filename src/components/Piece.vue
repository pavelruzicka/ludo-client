<template>
  <div
    :class="[
      'piece',
      occupancy && occupancy.occupied ? `piece--${occupancy.by.color}` : null,
      {
        'piece--awaiting': isAwaiting
      }
    ]"
    :style="animationAwait === index ? transformStyle : null"
    @click="advancePiece()"
  ></div>
</template>

<script>
import animate from "../animations";
import getAllPoints from "../animations/points";

import { mapGetters } from "vuex";

export default {
  name: "piece",

  props: ["occupancy", "index"],

  computed: {
    ...mapGetters(["awaitStatus", "animationAwait", "color", "transformStyle"]),

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
          const self = this;
          const { points } = getAllPoints(this.index, this.index + increment);

          this.$store.commit("setAwaitStatus", { target: false });
          this.$store.commit("setAnimationAwait", { target: this.index });
          animate(self, this.index, this.index + increment);

          setTimeout(() => {
            self.$store.commit("setTransformStyle", { x: 0, y: 0 });
            self.$store.commit("advancePiece", { color, piece, increment });
            self.$store.commit("setAnimationAwait", { target: 0 });
          }, 300 * points.length);
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
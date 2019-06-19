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
import targetField from "../logic/targetField";

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
      if (!this.awaitStatus) {
        console.error("Cannot move this piece (not awaiting selection)");
      } else {
        const { color, piece } = this.occupancy.by;
        const increment = this.$store.getters.lastRoll;

        if (color !== this.color) {
          console.error("Cannot move this piece (different color)");
        } else {
          const self = this;

          this.$store.commit("setAwaitStatus", { target: false });
          this.$store.commit("setAnimationAwait", { target: this.index });

          const destination = targetField(this.index, increment, this.color);
          const directions = animate(self, this.index, destination);

          setTimeout(() => {
            self.$store.commit("setTransformStyle", { x: 0, y: 0 });
            self.$store.commit("advancePiece", { color, piece, increment });
            self.$store.commit("setAnimationAwait", { target: 0 });
          }, 300 * directions.length);
        }
      }
    }
  }
};
</script>

<style lang="sass" src="../styles/Piece.sass"></style>
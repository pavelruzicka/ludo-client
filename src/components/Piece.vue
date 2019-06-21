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
import targetField from "../logic/targetField";

import constants from "../constants";

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
          this.$store.commit("setAnimationType", {
            target: this.index < 500 ? "default" : "home"
          });

          const destination = targetField(
            this.$store.getters.pieces,
            this.index,
            increment,
            this.color
          );

          if (destination === undefined) {
            console.error("Destination position already occupied");
          } else {
            try {
              const directions = animate(self, this.index, destination);

              setTimeout(() => {
                self.$store.commit("setTransformStyle", { x: 0, y: 0 });
                self.$store.commit("advancePiece", { color, piece, increment });
                this.$store.commit("setAnimationAwait", { target: null });
              }, constants.movement.animationStepTime * directions.length);
            } catch (e) {
              console.error("Home overflow (dice roll too high)");
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="sass" src="../styles/Piece.sass"></style>
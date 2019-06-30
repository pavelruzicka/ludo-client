<template>
  <Structure :closeable="closeable" @close="execute(null)">
    <Die class="die" ref="die" @roll="rolled" />

    <div style="margin-top: 2rem">
      <ModalButton
        class="modal-button"
        :enabled="ableToAdvance"
        @click="execute('advance')"
        label="Advance piece"
      />
      <ModalButton
        class="modal-button"
        :enabled="ableToDeploy"
        @click="execute('deploy')"
        label="Deploy a new piece"
      />
    </div>
  </Structure>
</template>

<script>
import Structure from "./Structure";
import ModalButton from "../components/ModalButton";

import Die from "../die/Main";

import { mapGetters } from "vuex";
import constants from "../constants";

export default {
  name: "die",

  components: { Structure, ModalButton, Die },

  data() {
    return {
      roll: 0
    };
  },

  mounted() {
    setTimeout(() => {
      this.$refs.die.rollCube();
    }, 1);
  },

  computed: {
    ...mapGetters([
      "color",
      "rollStatus",
      "hasNoPiecesDeployed",
      "hasPiecesRemaining"
    ]),

    ableToDeploy() {
      if (this.roll === 0) {
        return false;
      }

      const startingPosition = constants.positions.start[this.color];
      const startingPointOccupancy = this.$store.getters.occupancyStatus(
        startingPosition
      );

      if (!startingPointOccupancy.occupied) {
        return this.roll === 6 && this.hasPiecesRemaining;
      } else {
        // starting point is occupied, check if by enemy
        if (startingPointOccupancy.by.color !== this.color) {
          console.log("enemy on starting point");
          return this.roll === 6 && this.hasPiecesRemaining;
        } else {
          // cannot deploy into own piece
          return false;
        }
      }
    },

    ableToAdvance() {
      if (this.roll === 0) {
        return false;
      }

      return !this.hasNoPiecesDeployed;
    },

    closeable() {
      if (this.roll === 0) {
        return false;
      }

      return !this.ableToDeploy && !this.ableToAdvance;
    }
  },

  methods: {
    execute(action) {
      this.$emit("hide-modal", { action });
    },

    rolled(dieValue) {
      this.roll = dieValue;

      this.$store.commit("setLastRoll", { value: dieValue });
      this.$store.commit("setRollStatus", { target: true });
    }
  }
};
</script>
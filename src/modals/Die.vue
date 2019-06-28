<template>
  <Structure :closeable="closeable" @close="execute(null)">
    {{ roll }}
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

import { mapGetters } from "vuex";
import constants from "../constants";

export default {
  name: "die",

  components: { Structure, ModalButton },

  data() {
    return {
      roll: 0
    };
  },

  created() {
    //this.roll = Math.floor(Math.random() * 6) + 1;
    this.roll = 6;

    this.$store.commit("setLastRoll", { value: this.roll });
    this.$store.commit("setRollStatus", { target: true });
  },

  computed: {
    ...mapGetters([
      "color",
      "rollStatus",
      "hasNoPiecesDeployed",
      "hasPiecesRemaining"
    ]),

    ableToDeploy() {
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
      return !this.hasNoPiecesDeployed;
    },

    closeable() {
      return !this.ableToDeploy && !this.ableToAdvance;
    }
  },

  methods: {
    execute(action) {
      this.$emit("hide-modal", { action });
    }
  }
};
</script>
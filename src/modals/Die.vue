<template>
  <Structure :disabled="hasNoPiecesDeployed || !ableToDeploy" @close="execute(null)">
    <Die :value="roll"/>

    <div style="margin-top: 2rem">
      <button
        @click="execute('advance')"
        :disabled="rollStatus ? hasNoPiecesDeployed : true"
      >Advance piece</button>
      <button
        @click="execute('deploy')"
        :disabled="rollStatus ? !ableToDeploy : true"
      >Deploy a new piece</button>
    </div>
  </Structure>
</template>

<script>
import dieSequence from "../logic/dieSequence";

import Structure from "./Structure";
import Die from "../components/Die";

import { mapGetters } from "vuex";
import constants from "../constants";

export default {
  name: "die",

  components: { Structure, Die },

  data() {
    return {
      roll: 0
    };
  },

  created() {
    const sequence = dieSequence(30);

    for (let i = 0; i < sequence.length; i++) {
      setTimeout(() => {
        this.roll = sequence[i];
      }, 100 * (i + 1));
    }

    setTimeout(() => {
      this.roll = sequence[sequence.length - 1];
      this.$store.commit("setLastRoll", { value: this.roll });
      this.$store.commit("setRollStatus", { target: true });
    }, 100 * sequence.length);
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
    }
  },

  methods: {
    execute(action) {
      this.$emit("hide-modal", { action });
    }
  }
};
</script>
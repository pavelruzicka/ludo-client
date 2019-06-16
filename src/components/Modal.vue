<template>
  <Cloak>
    <div class="modal">
      <span>{{ roll }}</span>

      <div style="margin-top: 2rem">
        <button @click="execute('advance')" :disabled="hasNoPiecesDeployed">Advance piece</button>
        <button @click="execute('deploy')" :disabled="!ableToDeploy">Deploy a new piece</button>
        <button @click="execute(null)" :disabled="!hasNoPiecesDeployed || ableToDeploy">Close modal</button>
      </div>
    </div>
  </Cloak>
</template>

<script>
import { mapGetters } from "vuex";

import Cloak from "./Cloak";

import constants from "../constants";

export default {
  name: "modal",

  components: { Cloak },

  props: ["roll"],

  computed: {
    ...mapGetters(["color", "hasNoPiecesDeployed", "hasPiecesRemaining"]),

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
          // enemy
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

<style lang="sass" src="../styles/Modal.sass"></style>
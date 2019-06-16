<template>
  <div class="mask">
    <div class="modal">
      <span>{{ roll }}</span>

      <div style="margin-top: 2rem">
        <button @click="execute('advance')" :disabled="hasNoPiecesDeployed">Advance piece</button>
        <button @click="execute('deploy')" :disabled="!ableToDeploy">Deploy a new piece</button>
        <button @click="execute(null)" :disabled="!hasNoPiecesDeployed || ableToDeploy">Close modal</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "modal",

  props: ["roll"],

  computed: {
    ...mapGetters(["hasNoPiecesDeployed"]),

    ableToDeploy() {
      // also check if starting point is free
      return this.roll === 6 && this.$store.getters.hasPiecesRemaining;
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
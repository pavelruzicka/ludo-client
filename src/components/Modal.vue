<template>
  <div class="mask">
    <div class="modal">
      <span>{{ roll }}</span>

      <div style="margin-top: 2rem">
        <button @click="execute('move')">Move piece</button>
        <button @click="execute('deploy')" :disabled="!ableToDeploy">Deploy a new piece</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",

  props: ["roll"],

  computed: {
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
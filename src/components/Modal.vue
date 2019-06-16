<template>
  <div class="mask" @click.self="hide()">
    <div class="modal">
      <span>{{ roll }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",

  props: ["roll"],

  methods: {
    hide() {
      this.$emit("hideModal");
    }
  }
};
</script>

<style lang="sass" src="../styles/Modal.sass"></style>
<template>
  <div class="die-face-background" :style="{ transform }">
    <div class="die-face">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "face",
  props: ["transform"]
};
</script>

<style lang="sass" src="../styles/Die.sass"></style>
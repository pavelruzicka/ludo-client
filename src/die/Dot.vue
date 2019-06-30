<template>
  <span class="dot" :style="{ top: top + 'px', left: left + 'px' }" />
</template>

<script>
export default {
  name: "dot",
  props: ["top", "left"]
};
</script>

<style lang="sass" src="../styles/Die.sass"></style>
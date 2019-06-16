<template>
  <div
    class="piece"
    :class="[occupancy && occupancy.occupied ? `piece--${occupancy.by.color}` : null]"
  ></div>
</template>

<script>
export default {
  name: "piece",

  props: ["occupancy"]
};
</script>

<style lang="sass" src="../styles/Piece.sass"></style>
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

<style lang="sass">
.piece
  height: 1.85rem
  flex-basis: 1.85rem
  border-radius: 50%
  opacity: 1
  box-shadow: inset 0px -8px 2px 0px rgba(black, 0.19), inset 0px -4px 0px 0px rgba(black, 0.12)

  $piece-colors: ("green": #44e56c, "red": #ff3f33, "blue": #1e98ff, "yellow": #fff166)

  @each $name, $color in $piece-colors
    &--#{$name}
      background: linear-gradient(to top, $color, lighten($color, 10%))
</style>

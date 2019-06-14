<template>
  <div class="piece piece--green"></div>
</template>

<script>
export default {
  name: "piece"
};
</script>

<style lang="sass">
.piece
  height: 1.85rem
  flex-basis: 1.85rem
  border-radius: 50%
  opacity: 1
  border-radius: 50%
  box-shadow: inset 0 -4px rgba(black, 0.19), inset 0px 0px 0px 2px rgba(black, .12)

  $piece-colors: ("green": #44e56c, "red": #ff3f33, "blue": #1e98ff, "yellow": #fff166)

  @each $name, $color in $piece-colors
    &--#{$name}
      background: linear-gradient(to top left, $color, darken($color, 27.5%))
</style>

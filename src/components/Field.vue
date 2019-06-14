<template>
  <div class="field">
    <div
      class="circle"
      :class="[
        special ? `circle--${special}` : null,
        empty ? `circle--empty` : null,
        start ? `circle--start` : null
      ]"
    >
      <Piece v-if="occupancy && occupancy.occupied"/>
    </div>
  </div>
</template>

<script>
import Piece from "./Piece.vue";

export default {
  name: "field",
  components: { Piece },
  props: ["empty", "special", "start", "occupancy"],

  created() {
    // console.log(this.occupancy);
  }
};
</script>

<style lang="sass">
.field
  padding: .45rem

.circle
  width: 3rem
  height: 3rem
  border: .2rem solid black
  flex: 0 0 3rem
  display: flex
  justify-content: center
  align-items: center
  border-radius: 50%

  &--empty
    border-color: transparent

  &--start:before
    content: '↑'
    display: flex
    justify-content: center
    align-items: center
    font-size: 2rem
    font-weight: bold
    height: 3rem
    right: 3.25rem
    position: absolute

  &--green
    background: rgb(52, 199, 89)

    &.circle--start
      transform: rotate(90deg)

  &--red
    background: rgb(255, 59, 48)

    &.circle--start
      transform: rotate(180deg)

  &--blue
    background: rgb(0, 122, 255)

    &.circle--start
      transform: rotate(270deg)

  &--yellow
    background: rgb(255, 204, 0)

    &.circle--start
      transform: rotate(360deg)
</style>

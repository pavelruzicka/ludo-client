<template>
  <div
    class="field"
    :class="[special ? `field--${special}` : null, empty ? `field--empty` : null, start ? `field--start` : null]"
  ></div>
</template>

<script>
export default {
  name: "field",
  props: ["empty", "special", "start"]
};
</script>

<style lang="sass">
.field
  width: 3rem
  height: 3rem
  border: .2rem solid black
  flex: 0 0 3rem
  display: flex
  justify-content: center
  align-items: center
  border-radius: 50%
  margin: .35rem

  &--empty
    border-color: transparent

  &--start:before
    content: '↑'
    display: flex
    justify-content: center
    align-items: center
    font-size: 2rem
    width: 3rem
    height: 3rem
    position: relative
    right: 3.25rem

  &--green
    background: rgb(52, 199, 89)

    &.field--start
      transform: rotate(90deg)

  &--red
    background: rgb(255, 59, 48)

    &.field--start
      transform: rotate(180deg)

  &--blue
    background: rgb(0, 122, 255)

    &.field--start
      transform: rotate(270deg)

  &--yellow
    background: rgb(255, 204, 0)
</style>

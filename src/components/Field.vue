<template>
  <div class="field" :class="[special ? `field--${special}` : null, empty ? `field--empty` : null]">
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  name: "field",
  props: ["empty", "special"]
};
</script>

<style lang="sass">
.field
  width: 2.5rem
  height: 2.5rem
  border: .2rem solid black
  flex: 0 0 2.5rem
  display: flex
  justify-content: center
  align-items: center
  border-radius: 50%
  margin: .35rem

  &--empty
    border-color: transparent

  &--green
    background: rgb(52, 199, 89)

  &--red
    background: rgb(255, 59, 48)

  &--blue
    background: rgb(0, 122, 255)

  &--yellow
    background: rgb(255, 204, 0)
</style>

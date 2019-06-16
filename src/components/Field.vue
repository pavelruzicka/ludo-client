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
      <Piece v-if="occupancy && occupancy.occupied" :occupancy="occupancy"/>
      <slot v-if="['red', 'green', 'blue', 'yellow'].includes(this.special)"></slot>
    </div>
  </div>
</template>

<script>
import Piece from "./Piece.vue";

export default {
  name: "field",
  components: { Piece },

  props: {
    empty: Boolean,
    special: String,
    start: Boolean,
    occupancy: Object
  },

  created() {
    // console.log(this.occupancy);
  }
};
</script>

<style lang="sass" src="../styles/Field.sass"></style>
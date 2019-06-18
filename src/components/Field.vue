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
      <Piece v-if="occupancy && occupancy.occupied" :occupancy="occupancy" :index="index"/>
    </div>
  </div>
</template>

<script>
import Piece from "./Piece";

export default {
  name: "field",
  components: { Piece },

  props: {
    empty: Boolean,
    special: String,
    index: Number,
    start: Boolean,
    occupancy: Object
  },

  created() {
    // console.log(this.occupancy);
  }
};
</script>

<style lang="sass" src="../styles/Field.sass"></style>
<template>
  <div class="die">
    <div
      class="dot"
      v-for="i in dots"
      :key="i"
      :class="{active: active ? active.includes(i) : false}"
    ></div>
  </div>
</template>

<script>
export default {
  name: "die",

  data() {
    return {
      dots: Array.from(Array(25).keys())
    };
  },

  computed: {
    active() {
      switch (this.value) {
        case 1:
          return [12];
          break;
        case 2:
          return [6, 18];
          break;
        case 3:
          return [4, 12, 20];
          break;
        case 4:
          return [6, 8, 16, 18];
          break;
        case 5:
          return [0, 4, 12, 20, 24];
          break;
        case 6:
          return [1, 3, 11, 13, 21, 23];
      }
    }
  },

  props: ["value"]
};
</script>

<style lang="sass" src="../styles/Die.sass"></style>
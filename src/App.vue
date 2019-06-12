<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {};
  },

  created() {
    this.fields = Array(40).fill({ occupied: 0, special: null });

    this.fields[0] = { occupied: 0, special: "green" };
    this.fields[10] = { occupied: 0, special: "red" };
    this.fields[20] = { occupied: 0, special: "blue" };
    this.fields[30] = { occupied: 0, special: "yellow" };
  }
};
</script>

<style lang="sass">

</style>

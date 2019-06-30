<template>
  <div :class="['die-container', className]">
    <Wrapper :spinTime="spinTime" :xRand="xRand" :yRand="yRand" />
  </div>
</template>

<script>
import Wrapper from "./Wrapper";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  name: "die",
  components: {
    Wrapper
  },
  props: {
    spinTime: {
      default: 4
    },
    spins: {
      default: 2
    },
    className: {}
  },

  data() {
    return {
      xRand: 0,
      yRand: 0
    };
  },

  methods: {
    getRandomDieThrow: () => Math.floor(Math.random() * 6 + 1),

    async rollCube() {
      const dieRoll = this.getRandomDieThrow();

      this.xRand = Math.floor(Math.random() * 6 * this.spins) * 4;
      this.yRand = Math.floor(Math.random() * 6 * this.spins) * 4;

      switch (dieRoll) {
        case 2:
          this.xRand++;
          break;
        case 3:
          this.yRand--;
          break;
        case 4:
          this.yRand++;
          break;
        case 5:
          this.xRand--;
          break;
        case 6:
          this.xRand -= 2;
          break;
      }

      await sleep(this.spinTime * 1000);
      this.$emit("roll", dieRoll);
    }
  }
};
</script>

<style lang="sass" src="../styles/Die.sass"></style>
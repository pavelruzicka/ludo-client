<template>
  <Face transform="translateZ(100px)">
    <Dot v-for="(dot, index) in dots" :key="index" :top="dot[0]" :left="dot[1]" />
  </Face>
</template>

<script>
import Dot from "../Dot";
import Face from "../Face";

export default {
  name: "face-one",
  components: {
    Dot,
    Face
  },

  data() {
    return {
      dots: [[85, 85]]
    };
  }
};
</script>
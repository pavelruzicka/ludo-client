<template>
  <Face transform="rotateY(90deg) translateZ(100px)">
    <Dot :top="45" :left="45" />
    <Dot :top="85" :left="85" />
    <Dot :top="125" :left="125" />
  </Face>
</template>

<script>
import Dot from "../Dot";
import Face from "../Face";

export default {
  name: "face-two",
  components: {
    Dot,
    Face
  }
};
</script>
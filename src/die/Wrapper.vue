<template>
  <div
    class="cube"
    :style="{
      'transition-duration': spinTime + 's',
      transform: `rotateX(${xRand * 90}deg) rotateY(${yRand * 90}deg)`,
    }"
  >
    <face-one />
    <face-two />
    <face-three />
    <face-four />
    <face-five />
    <face-six />
  </div>
</template>

<script>
import FaceOne from "./faces/One";
import FaceTwo from "./faces/Two";
import FaceThree from "./faces/Three";
import FaceFour from "./faces/Four";
import FaceFive from "./faces/Five";
import FaceSix from "./faces/Six";

export default {
  name: "wrapper",
  components: {
    "face-one": FaceOne,
    "face-two": FaceTwo,
    "face-three": FaceThree,
    "face-four": FaceFour,
    "face-five": FaceFive,
    "face-six": FaceSix
  },
  props: ["spinTime", "xRand", "yRand"]
};
</script>

<style lang="sass" src="../styles/Die.sass"></style>
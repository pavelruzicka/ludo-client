<template>
  <Face transform="translateZ(100px)">
    <Dot :top="85" :left="85" />
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
  }
};
</script>
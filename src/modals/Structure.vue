<template>
  <Cloak>
    <div class="modal">
      <slot></slot>
    </div>
  </Cloak>
</template>

<script>
import Cloak from "./Cloak";

export default {
  name: "structure",

  components: { Cloak }
};
</script>

<style lang="sass" src="../styles/Modal.sass"></style>
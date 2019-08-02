<template>
  <Structure :closeable="false" :buttonHidden="true">
    <img src="https://placehold.it/110x45" />

    <div class="button-row">
      <input class="modal-input" type="text" />
    </div>

    <div class="button-row">
      <div class="button-group">
        <ModalButton class="modal-button" :enabled="true" label="Create lobby" />
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "./Structure";
import ModalButton from "../components/ModalButton";

export default {
  name: "lobby",

  components: { Structure, ModalButton },

  data() {
    return {};
  }
};
</script>

<style lang="sass" src="../styles/Intro.sass"></style>
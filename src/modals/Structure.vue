<template>
  <Cloak>
    <div class="modal">
      <div class="header">
        <button
          v-if="!buttonHidden"
          class="close-button"
          :class="{disabled: !closeable}"
          @click="closeable ? close() : undefined"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"
            />
          </svg>
        </button>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </Cloak>
</template>

<script>
import Cloak from "./Cloak";

export default {
  name: "structure",

  components: { Cloak },

  props: ["closeable", "buttonHidden"],

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="sass" src="../styles/Modal.sass"></style>
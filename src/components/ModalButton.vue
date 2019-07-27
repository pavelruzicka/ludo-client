<template>
  <button :disabled="!enabled" @click="$emit('click')" :title="buttonTitle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      v-if="isIcon && iconLabel === 'copy'"
    >
      <path
        d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"
      />
      <path
        d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"
      />
      <path
        d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"
      />
    </svg>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script>
const labels = {
  copy: "Copy to clipboard"
};

export default {
  name: "modal-button",

  props: ["enabled", "label"],

  computed: {
    isIcon() {
      return this.label.startsWith("icon-");
    },

    iconLabel() {
      return this.label.replace("icon-", "");
    },

    buttonTitle() {
      if (this.isIcon) {
        return labels[this.iconLabel];
      }

      return this.label;
    }
  }
};
</script>

<style lang="sass" src="../styles/ModalButton.sass"></style>
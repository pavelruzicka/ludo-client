<template>
  <button :disabled="!enabled" @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
  name: "modal-button",

  props: ["enabled", "label"]
};
</script>

<style lang="sass" src="../styles/ModalButton.sass"></style>
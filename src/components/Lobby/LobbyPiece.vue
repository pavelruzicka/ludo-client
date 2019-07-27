<template>
  <div :class="['lobby-piece', `lobby-piece--${disabled ? 'disabled' : color}`]"></div>
</template>

<script>
export default {
  name: "lobbypiece",

  props: ["disabled", "color"],

  methods: {}
};
</script>

<style lang="sass" src="../../styles/LobbyPiece.sass"></style>
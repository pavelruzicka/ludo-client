<template>
  <Structure :closeable="false" :buttonHidden="true">
    <div class="pieces">
      <div class="piece-box">
        <LobbyPiece color="green" :disabled="false" />
        <LobbyStatus :ready="false" :disabled="false" />
        <div class="piece-nickname piece-nickname--self">
          <span>Player One</span>
        </div>
      </div>
      <div class="piece-box">
        <LobbyPiece color="red" :disabled="false" />
        <LobbyStatus :ready="false" :disabled="false" />
        <div class="piece-nickname piece-nickname--red">
          <span>Player Two</span>
        </div>
      </div>
      <div class="piece-box">
        <LobbyPiece color="blue" :disabled="true" />
        <LobbyStatus :ready="null" :disabled="true" />
        <div class="piece-nickname piece-nickname--default">
          <span>Blue</span>
        </div>
      </div>
      <div class="piece-box">
        <LobbyPiece color="yellow" :disabled="true" />
        <LobbyStatus :ready="null" :disabled="true" />
        <div class="piece-nickname piece-nickname--default">
          <span>Yellow</span>
        </div>
      </div>
    </div>

    <div class="button-row">
      <div class="button-group">
        <ModalButton
          class="modal-button"
          :enabled="true"
          @click="toggleLink()"
          :label="toggleLabel"
        />
      </div>
      <div class="button-group">
        <ModalButton class="modal-button" :enabled="true" label="Ready" />
        <ModalButton class="modal-button" :enabled="false" label="Start game" />
      </div>
    </div>

    <div class="button-row" v-if="linkShown">
      <input class="modal-input" type="text" :value="lobbyLink" readonly />
      <ModalButton class="modal-button" :enabled="true" @click="copyLink()" label="icon-copy" />
    </div>
  </Structure>
</template>

<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";

import Structure from "./Structure";
import ModalButton from "../components/ModalButton";

import LobbyPiece from "../components/Lobby/LobbyPiece";
import LobbyStatus from "../components/Lobby/LobbyStatus";

import { mapGetters } from "vuex";
import constants from "../constants";

Vue.use(VueClipboard);

export default {
  name: "lobby",

  components: { Structure, ModalButton, LobbyPiece, LobbyStatus },

  data() {
    return {
      lobbyLink: "https://placehold.er/lobby",
      linkShown: false
    };
  },

  computed: {
    toggleLabel() {
      return `${this.linkShown ? "Hide" : "Show"} lobby link`;
    }
  },

  methods: {
    toggleLink() {
      this.linkShown = !this.linkShown;
    },

    copyLink() {
      this.$copyText(this.lobbyLink);
    }
  }
};
</script>

<style lang="sass" src="../styles/Lobby.sass"></style>
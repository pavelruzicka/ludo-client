<template>
  <Structure :closeable="false" :buttonHidden="true">
    <img src="https://placehold.it/110x45?text=L+U+D+O" />

    <div class="button-row">
      <input
        class="modal-input"
        type="text"
        v-model="lobbyName"
        @keyup="clearError()"
        placeholder="Paste lobby name here"
      />
    </div>

    <span class="modal-error" v-if="errorMessage">{{ errorMessage }}</span>

    <div class="button-row">
      <div class="button-group">
        <ModalButton
          class="modal-button"
          :enabled="lobbyNameExists"
          @click="joinLobby()"
          label="Join lobby"
        />
      </div>
      <div class="button-group">
        <ModalButton
          class="modal-button"
          :enabled="true"
          @click="createLobby()"
          label="Create new lobby"
        />
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "./Structure";
import ModalButton from "../components/ModalButton";

import { api } from "../http/api";
import { getAlphanumeric } from "../util/getAlphanumeric";

export default {
  name: "lobby",

  components: { Structure, ModalButton },

  data() {
    return {
      lobbyName: "",
      errorMessage: ""
    };
  },

  computed: {
    lobbyNameExists() {
      return this.lobbyName !== "";
    },

    lobbyNameSanitized() {
      return this.lobbyName.trim();
    }
  },

  methods: {
    clearError() {
      this.errorMessage = "";
    },

    async joinLobby() {
      const lobby = this.lobbyNameSanitized;

      if (lobby.length !== 22) {
        this.errorMessage = "This lobby name is invalid.";
        return;
      }

      const lobbyExists = await api.invoke("lobby:exists", lobby);

      if (!lobbyExists) {
        this.errorMessage = "This lobby does not exist.";
        return;
      }

      await api.invoke("lobby:join", lobby);
      this.$emit("hide-modal", { lobby });
    },

    createLobby() {
      const lobby = getAlphanumeric(22);

      this.$emit("hide-modal", { lobby });
    }
  }
};
</script>

<style lang="sass" src="../styles/Intro.sass"></style>
<template>
  <div id="app">
    <div>
      <button @click="rollDie()">Roll die</button>
      <button @click="intro()">intro</button>
      <button @click="openLobby()">Lobby</button>
      <br />
      <hr />
      <button @click="create()">create</button>
      <button @click="join()">join</button>
      <button @click="leave()">leave</button>
      <button @click="lobbies()">lobbies</button>
      <button @click="players()">players</button>
    </div>

    <transition name="cloak">
      <IntroModal v-if="introModalShown" />
    </transition>

    <transition name="cloak">
      <LobbyModal v-if="lobbyModalShown" />
    </transition>

    <transition name="cloak">
      <DieModal v-if="gameModalShown" @hide-modal="execute" />
    </transition>

    <transition name="cloak">
      <Cloak v-if="awaitStatus" />
    </transition>

    <Board :fields="fields" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Board from "./components/Board";

import Cloak from "./modals/Cloak";
import DieModal from "./modals/Die";
import LobbyModal from "./modals/Lobby";
import IntroModal from "./modals/Intro";

const signalR = require("@aspnet/signalr");

const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://ludo.azurewebsites.net/game")
  .build();

connection.on("lobby:player-join", id => {
  console.log(`player ${id} joined lobby`);
});

connection.on("lobby:player-leave", id => {
  console.log(`player ${id} left lobby`);
});

connection.on("lobby:lobbies", lobbies => {
  console.log(`current lobbies: ${lobbies}`);
});

connection.on("lobby:players", players => {
  console.log(players);
});

export default {
  name: "app",

  components: { Board, Cloak, DieModal, LobbyModal, IntroModal },

  data() {
    return {
      gameModalShown: false,
      lobbyModalShown: false,
      introModalShown: false,
      dieRoll: undefined
    };
  },

  computed: {
    ...mapGetters(["color", "awaitStatus"])
  },

  mounted() {
    try {
      connection.start();
    } catch (e) {
      console.error(e);
    }
  },

  created() {
    this.fields = Array(40).fill({ occupied: "", special: null, start: false });

    this.fields[0] = { occupied: "", special: "green", start: true };
    this.fields[10] = { occupied: "", special: "red", start: true };
    this.fields[20] = { occupied: "", special: "blue", start: true };
    this.fields[30] = { occupied: "", special: "yellow", start: true };

    this.fields = this.fields.map((field, index) => ({ ...field, index }));

    this.spawn();
  },

  methods: {
    spawn() {
      this.$store.commit("spawnSet", { color: "red" });
    },

    intro() {
      this.introModalShown = true;
    },

    openLobby() {
      this.lobbyModalShown = true;
    },

    rollDie() {
      this.gameModalShown = true;
    },

    execute({ action }) {
      this.gameModalShown = false;

      if (action === "deploy") {
        const toDeploy = this.$store.getters.pieceToDeploy;

        // TODO: sort out piece collision

        this.$store.commit("setAnimationType", { target: "home" });
        this.$store.commit("deployPiece", {
          color: this.color,
          piece: toDeploy
        });
      } else if (action === "advance") {
        this.$store.commit("setAwaitStatus", { target: true });
        this.$store.commit("setAnimationAwait", { target: true });
      }
    },

    create() {
      connection.invoke("lobby:create", "test");
    },

    join() {
      connection.invoke("lobby:join", "test");
    },

    leave() {
      connection.invoke("lobby:leave");
    },

    lobbies() {
      connection.invoke("lobby:get-lobbies");
    },

    players() {
      connection.invoke("lobby:get-players", "test");
    }
  }
};
</script>

<style lang="sass" src="./styles/App.sass"></style>
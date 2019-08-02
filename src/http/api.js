const signalR = require("@aspnet/signalr");

export const api = new signalR.HubConnectionBuilder()
  .withUrl("https://ludo.azurewebsites.net/game")
  .build();

api.on("lobby:player-join", id => {
  console.log(`player ${id} joined lobby`);
});

api.on("lobby:player-leave", id => {
  console.log(`player ${id} left lobby`);
});

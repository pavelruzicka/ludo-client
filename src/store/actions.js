export default {
  advancePiece: ({ commit, getters }, { increment, color, piece }) => {
    commit("advancePiece", { increment, color, piece });

    const occupancy = getters.occupancyStatus(getters.positionToCheck, false);

    if (occupancy && occupancy.by.color !== color) {
      commit("setAnimationType", { target: "home" });
      commit("eliminatePiece", {
        color: occupancy.by.color,
        piece: occupancy.by.piece
      });
    }
  }
};

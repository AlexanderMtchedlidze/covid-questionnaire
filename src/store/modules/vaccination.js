const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  state() {
    return {
      vaccinated: null,
      stage: null,
      waitingFor: null,
    };
  },
  getters: {
    isVaccinationPageCompleted(_, getters) {
      return (
        (getters.vaccinated === "yes" && getters.stage) ||
        (getters.vaccinated === "no" && getters.waitingFor)
      );
    },
    vaccinated: (state) => getValue(state, "vaccinated"),
    stage: (state) => getValue(state, "stage"),
    waitingFor: (state) => getValue(state, "waitingFor"),
  },
};

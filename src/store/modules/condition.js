const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  state() {
    return {
      hadCovid: null,
      hadAntibodies: null,
      covidDate: null,
      antibodiesDate: null,
    };
  },
  getters: {
    isConditionPageCompleted(_, getters) {
      return (
        (getters.antibodiesDate && getters.antibodiesQuantity) ||
        getters.covidDate ||
        (getters.hadCovid && getters.hadCovid !== "yes")
      );
    },
    hadCovid: (state) => getValue(state, "hadCovid"),
    hadAntibodies: (state) => getValue(state, "hadAntibodies"),
    covidDate: (state) => getValue(state, "covidDate"),
    antibodiesDate: (state) => getValue(state, "antibodiesDate"),
    antibodiesQuantity: (state) => getValue(state, "antibodiesQuantity"),
  },
};

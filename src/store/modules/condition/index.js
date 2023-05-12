import getters from "./getters";

export default {
  state() {
    return {
      hadCovid: null,
      hadAntibodies: null,
      covidDate: null,
      antibodiesDate: null,
    };
  },
  getters,
};

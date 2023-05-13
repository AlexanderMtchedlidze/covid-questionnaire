import getters from "./getters";

export default {
  state() {
    return {
      had_covid: null,
      had_antibody_test: null,
      test_date: null,
      number: null,
      covid_sickness_date: null,
    };
  },
  getters,
};

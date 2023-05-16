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
  mutations: {
    setLocalStorageValues(state, localStorageValues) {
      Object.assign(state, localStorageValues);
    },
  },
  actions: {
    initializeFromLocalStorage(context) {
      const localStorageValues = {
        had_covid: localStorage.getItem("had_covid"),
        had_antibody_test: JSON.parse(
          localStorage.getItem("had_antibody_test")
        ),
        test_date: localStorage.getItem("test_date"),
        number: localStorage.getItem("number"),
        covid_sickness_date: localStorage.getItem("covid_sickness_date"),
      };

      context.commit("setLocalStorageValues", localStorageValues);
    },
  },
};

const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  isConditionPageCompleted(_, getters) {
    return (
      (getters.antibodiesDate && getters.antibodiesQuantity) ||
      getters.covidDate ||
      (getters.hadCovid && getters.hadCovid !== "yes")
    );
  },
  hadCovidOptions() {
    return [
      { label: "კი", value: "yes", id: "had_covid_yes" },
      { label: "არა", value: "no", id: "had_covid_no" },
      { label: "ახლა", value: "now", id: "had_covid_now" },
    ];
  },
  hadAntibodiesOptions() {
    return [
      { label: "კი", value: "yes", id: "had_antibodies_yes" },
      { label: "არა", value: "no", id: "had_antibodies_no" },
    ];
  },
  hadCovid: (state) => getValue(state, "hadCovid"),
  hadAntibodies: (state) => getValue(state, "hadAntibodies"),
  covidDate: (state) => getValue(state, "covidDate"),
  antibodiesDate: (state) => getValue(state, "antibodiesDate"),
  antibodiesQuantity: (state) => getValue(state, "antibodiesQuantity"),
};

const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  isConditionPageCompleted: (_, getters) =>
    getters.test_date ||
    (getters.had_covid === "yes" && getters.had_antibody_test) ||
    getters.hadCovid !== "yes",
  hadCovidOptions: () => [
    { label: "კი", value: "yes", id: "had_covid_yes" },
    { label: "არა", value: "no", id: "had_covid_no" },
    { label: "ახლა", value: "have_right_now", id: "had_covid_now" },
  ],
  hadAntibodyTestOptions: () => [
    { label: "კი", value: true, id: "had_antibody_test_true" },
    { label: "არა", value: false, id: "had_antibody_test_false" },
  ],
  had_covid: (state) => getValue(state, "had_covid"),
  had_antibody_test: (state) =>
    JSON.parse(getValue(state, "had_antibody_test")),
  test_date: (state) => getValue(state, "test_date"),
  number: (state) => getValue(state, "number"),
  covid_sickness_date: (state) => getValue(state, "covid_sickness_date"),
};

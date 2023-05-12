const getValue = (state, key) =>
  state[key] ? state[key] : localStorage.getItem(key);

export default {
  isConditionPageCompleted(_, getters) {
    return (
      (getters.antibodiesDate && getters.antibodiesQuantity) ||
      getters.covidDate ||
      (getters.hadCovid && getters.hadCovid !== "yes")
    );
  },
  isVaccinationPageCompleted(_, getters) {
    return (
      (getters.vaccinated === "yes" && getters.stage) ||
      (getters.vaccinated === "no" && getters.waitingFor)
    );
  },
  name(state) {
    return getValue(state, "name");
  },
  surname(state) {
    return getValue(state, "surname");
  },
  mail(state) {
    return getValue(state, "mail");
  },
  hadCovid(state) {
    return getValue(state, "hadCovid");
  },
  hadAntibodies(state) {
    return getValue(state, "hadAntibodies");
  },
  covidDate(state) {
    return getValue(state, "covidDate");
  },
  antibodiesDate(state) {
    return getValue(state, "antibodiesDate");
  },
  antibodiesQuantity(state) {
    return getValue(state, "antibodiesQuantity");
  },
  vaccinated(state) {
    return getValue(state, "vaccinated");
  },
  stage(state) {
    return getValue(state, "stage");
  },
  waitingFor(state) {
    return getValue(state, "waitingFor");
  },
};

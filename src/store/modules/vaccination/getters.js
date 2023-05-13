const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  vaccinatedOptions() {
    return [
      { label: "არა", value: "false", id: "vaccinated_no" },
      { label: "კი", value: "true", id: "vaccinated_yes" },
    ];
  },
  stageOptions() {
    return [
      {
        label: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
        value: "first_dose_and_registered",
      },
      { label: "სრულად აცრილი ვარ", value: "fully_vaccinated" },
      {
        label: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
        value: "first_dose_and_not_registered",
      },
    ];
  },
  waitingForOptions() {
    return [
      {
        label: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
        value: "registered_and_waiting",
      },
      { label: "არ ვგეგმავ", value: "not_planning" },
      {
        label: "გადატანილი მაქვს და ვგეგმავ აცრას",
        value: "recovered_and_planning",
      },
    ];
  },
  isVaccinationPageCompleted(_, getters) {
    return (
      (getters.vaccinated === "yes" && getters.stage) ||
      (getters.vaccinated === "no" && getters.waitingFor)
    );
  },
  vaccinated: (state) => getValue(state, "vaccinated"),
  stage: (state) => getValue(state, "stage"),
  waitingFor: (state) => getValue(state, "waitingFor"),
};

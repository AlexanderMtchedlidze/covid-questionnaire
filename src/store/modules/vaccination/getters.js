const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  hadVaccineOptions: () => [
    { label: "კი", value: "true", id: "had_vaccine_yes" },
    { label: "არა", value: "false", id: "had_vaccine_no" },
  ],
  vaccinationStageOptions: () => [
    {
      label: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
      value: "first_dosage_and_registered_on_the_second",
    },
    { label: "სრულად აცრილი ვარ", value: "fully_vaccinated" },
    {
      label: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
      value: "first_dosage_and_not_registered_yet",
    },
  ],
  iAmWaitingForOptions: () => [
    {
      label: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
      value: "registered_and_waiting",
    },
    { label: "არ ვგეგმავ", value: "not_planning" },
    {
      label: "გადატანილი მაქვს და ვგეგმავ აცრას",
      value: "had_covid_and_planning_to_be_vaccinated",
    },
  ],
  had_vaccine: (state) => getValue(state, "had_vaccine"),
  vaccination_stage: (state) => getValue(state, "vaccination_stage"),
  i_am_waiting: (state) => getValue(state, "i_am_waiting"),
};

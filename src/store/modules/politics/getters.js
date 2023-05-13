const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  isPoliticsPageCompleted: (_, getters) =>
    !!getters.non_formal_meetings && !!getters.number_of_days_from_office,
  meetingDays: () => [
    { label: "კვირაში ორჯერ", value: "twice_a_week" },
    { label: "კვირაში ერთხელ", value: "once_a_week" },
    { label: "ორ კვირაში ერთხელ", value: "once_in_a_two_weeks" },
    { label: "თვეში ერთხელ", value: "once_in_a_month" },
  ],
  officeWorkingDays: () => [
    { value: "0" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ],
  non_formal_meetings: (state) => getValue(state, "non_formal_meetings"),
  number_of_days_from_office: (state) =>
    getValue(state, "number_of_days_from_office"),
  what_about_meetings_in_live: (state) =>
    getValue(state, "what_about_meetings_in_live"),
  tell_us_your_opinion_about_us: (state) =>
    getValue(state, "tell_us_your_opinion_about_us"),
};

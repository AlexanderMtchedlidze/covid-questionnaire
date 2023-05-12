const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  isPoliticsPageCompleted(_, getters) {
    return getters.meetingFrequency && getters.officeWorkFrequency;
  },
  meetingDays() {
    return [
      { label: "კვირაში ორჯერ", value: "twice_a_week" },
      { label: "კვირაში ერთხელ", value: "once_a_week" },
      { label: "ორ კვირაში ერთხელ", value: "once_per_two_weeks" },
      { label: "თვეში ერთხელ", value: "once_a_month" },
    ];
  },
  officeWorkingDays() {
    return [
      { label: "0", value: "0_day_a_week" },
      { label: "1", value: "1_day_a_week" },
      { label: "2", value: "2_days_a_week" },
      { label: "3", value: "3_days_a_week" },
      { label: "4", value: "4_days_a_week" },
      { label: "5", value: "5_days_a_week" },
    ];
  },
  meetingFrequency: (state) => getValue(state, "meetingFrequency"),
  officeWorkFrequency: (state) => getValue(state, "officeWorkFrequency"),
  opinionAboutMeetings: (state) => getValue(state, "opinionAboutMeetings"),
  opinionAboutEnvironment: (state) =>
    getValue(state, "opinionAboutEnvironment"),
};

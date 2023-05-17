const ISOFormattedDate = (dateString) => {
  const [day, month, year] = dateString.split("/");

  const date = new Date(`20${year}`, month - 1, day);

  return date.toISOString();
};

export default {
  allGatheredData: (_, getters) => {
    const antibodies = {
      number: +getters.number,
    };
    if (getters.test_date) {
      antibodies.test_date = ISOFormattedDate(getters.test_date);
    }
    let object = {
      first_name: getters.first_name,
      last_name: getters.last_name,
      email: getters.email,
      had_covid: getters.had_covid,
      had_antibody_test: getters.had_antibody_test,
      antibodies,
      had_vaccine: JSON.parse(getters.had_vaccine),
      vaccination_stage: getters.vaccination_stage,
      non_formal_meetings: getters.non_formal_meetings,
      number_of_days_from_office: getters.number_of_days_from_office,
      what_about_meetings_in_live: getters.what_about_meetings_in_live,
      tell_us_your_opinion_about_us: getters.tell_us_your_opinion_about_us,
    };
    if (getters.covid_sickness_date) {
      object.covid_sickness_date = ISOFormattedDate(
        getters.covid_sickness_date
      );
    }
    return object;
  },
};

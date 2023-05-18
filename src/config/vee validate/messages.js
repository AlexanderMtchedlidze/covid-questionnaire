import { localize } from "@vee-validate/i18n";

export default {
  generateMessage: localize("ka", {
    names: {
      first_name: "სახელის ველი",
      last_name: "გვარის ველი",
      email: "მეილის ველი",
      covid_sickness_date: "პერიოდი",
    },
    messages: {
      required: "{field}ს შევსება სავალდებულოა",
      min: "{field} უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსაგან",
      email: "{field} უნდა ემთხვეოდეს ვალიდური მეილის ფორმატს",
    },
  }),
};

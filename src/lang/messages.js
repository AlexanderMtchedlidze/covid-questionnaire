import { localize } from "@vee-validate/i18n";

export default {
  generateMessage: localize("ka", {
    names: {
      first_name: "სახელის ველი",
      last_name: "გვარის ველი",
      email: "მეილის ველი",
      covidDate: "პერიოდი",
      antibodiesDate: 'რიცხვი',
      antibodiesQuantity: 'ანტისხეულების რაოდენობი',
      test_date: 'რიცხვი',
    },
    messages: {
      required: "{field}ს შევსება სავალდებულოა",
      min: "{field} უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსაგან",
      email: "{field} უნდა ემთხვეოდეს ვალიდური მეილის ფორმატს",
    },
  }),
};

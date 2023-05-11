import { localize } from "@vee-validate/i18n";

export default {
  generateMessage: localize("ka", {
    names: {
      name: "სახელის ველი",
      surname: "გვარის ველი",
      mail: "მეილის ველი",
      covidDate: "პერიოდი",
      antibodiesDate: 'რიცხვი',
      quantity: 'ანტისხეულების რაოდენობი'
    },
    messages: {
      required: "{field}ს შევსება სავალდებულოა",
      min: "{field} უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსაგან",
      email: "{field} უნდა ემთხვეოდეს ვალიდური მეილის ფორმატს",
    },
  }),
};

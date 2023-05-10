import { defineRule } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

defineRule("required", required);
defineRule("min", min);
defineRule("email", email);
defineRule("redberryEmail", (value) => {
  if (value && value.endsWith("@redberry.ge")) {
    return true;
  }
  return "მეილი უნდა მთავრდებოდეს @redberry.ge სუფიქსით";
});


export default {
  generateMessage: localize("ka", {
    names: {
      name: "სახელის ველი",
      surname: "გვარის ველი",
      mail: "მეილის ველი",
    },
    messages: {
      required: "{field}ს შევსება სავალდებულოა",
      min: "{field} უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსაგან",
      email: "{field} უნდა ემთხვეოდეს ვალიდური მეილის ფორმატს",
    },
  }),
};

import { defineRule } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("email", email);
defineRule("redberryEmail", (value) => {
  if (value && value.endsWith("@redberry.ge")) {
    return true;
  }
  return "მეილი უნდა მთავრდებოდეს @redberry.ge სუფიქსით";
});

defineRule("date_format", (value) => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(value)) {
    return "ფორმატი უნდა იყოს დდ/თთ/წწ";
  }

  return true;
});

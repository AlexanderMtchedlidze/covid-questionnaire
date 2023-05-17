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
  const regex = /^\d{2}\/\d{2}\/\d{2}$/;
  if (!regex.test(value)) {
    return "ფორმატი უნდა იყოს დდ/თთ/წწ";
  }

  const year = parseInt(value.substring(6, 8), 10);
  const month = parseInt(value.substring(3, 5), 10);
  const day = parseInt(value.substring(0, 2), 10);

  if (day < 1 || day > 31) {
    return "დღის მნიშვნელობა უნდა იყოს 1-31 შუალედში";
  }

  if (month < 1 || month > 12) {
    return "თვის მნიშვნელობა უნდა იყოს 1-12 შუალედში";
  }

  if (year < 19 || year > 23) {
    return "წლის მნიშვნელობა უნდა იყოს 19-23 შუალედში";
  }

  return true;
});

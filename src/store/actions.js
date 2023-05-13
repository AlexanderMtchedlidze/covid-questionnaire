import axios from "axios";

export default {
  setInputValue(context, payload) {
    context.commit("setInputValue", payload);
    localStorage.setItem(payload.name, payload.value);
  },
  async sendAllGatheredData(context) {
    try {
      const response = await axios.post(
        "https://covid19.devtest.ge/api/create",
        context.getters.allGatheredData
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  },
};

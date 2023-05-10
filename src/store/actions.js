export default {
  setInputValue(context, payload) {
    context.commit("setInputValue", payload);
    localStorage.setItem(payload.name, payload.value);
  },
};

export default {
  setInputValue(state, payload) {
    state[payload.name] = payload.value;
  },
};

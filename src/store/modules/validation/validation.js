export default {
  namespaced: true,
  state() {
    return {
      MIN_VALUE: 2,
    };
  },
  getters: {
    minValue(state) {
      return state.MIN_VALUE;
    },
  },
};

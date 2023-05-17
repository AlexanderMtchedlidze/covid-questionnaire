const getValue = (state, key) => state[key] || localStorage.getItem(key);

export default {
  state() {
    return {
      name: null,
      surname: null,
      email: null,
    };
  },
  getters: {
    first_name: (state) => getValue(state, "first_name"),
    last_name: (state) => getValue(state, "last_name"),
    email: (state) => getValue(state, "email"),
  },
};

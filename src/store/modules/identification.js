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
    name: (state) => getValue(state, "name"),
    surname: (state) => getValue(state, "surname"),
    mail: (state) => getValue(state, "mail"),
  },
};

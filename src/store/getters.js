const getValue = (state, key) => state[key] ? state[key] : localStorage.getItem(key);

export default {
  name(state) {
    return getValue(state, "name");
  },
  surname(state) {
    return getValue(state, "surname");  
  },
  mail(state) {
    return getValue(state, "mail");
  }
};
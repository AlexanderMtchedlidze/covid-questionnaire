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
  },
  hadCovid(state) {
    return getValue(state, "hadCovid");
  },
  hadAntibodies(state) {
    return getValue(state, "hadAntibodies");
  },
  covidDate(state) {
    return getValue(state, "covidDate"); 
  },
  antibodiesDate(state) {
    return getValue(state, "antibodiesDate"); 
  },
  antibodiesQuantity(state) {
    return getValue(state, "antibodiesQuantity"); 
  }
};
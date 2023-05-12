import { createStore } from "vuex";

import identificationModule from "./modules/identification.js";
import conditionModule from "./modules/condition.js";
import vaccinationModule from "./modules/vaccination.js";
import politicsModule from "./modules/politics.js";

const store = createStore({
  modules: {
    identification: identificationModule,
    condition: conditionModule,
    vaccination: vaccinationModule,
    politics: politicsModule,
  },

  actions: {
    setInputValue(context, payload) {
      context.commit("setInputValue", payload);
      localStorage.setItem(payload.name, payload.value);
    },
  },
  mutations: {
    setInputValue(state, payload) {
      state[payload.name] = payload.value;
    },
  },
});

export default store;

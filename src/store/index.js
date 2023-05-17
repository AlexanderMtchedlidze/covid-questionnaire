import { createStore } from "vuex";

import identificationModule from "./modules/identification/index.js";
import conditionModule from "./modules/condition/index.js";
import vaccinationModule from "./modules/vaccination/index.js";
import politicsModule from "./modules/politics/index.js";
import actions from "./actions.js";

const store = createStore({
  modules: {
    identification: identificationModule,
    condition: conditionModule,
    vaccination: vaccinationModule,
    politics: politicsModule,
  },
  actions,
  mutations: {
    setInputValue(state, payload) {
      state[payload.name] = payload.value;
    },
  },
});

export default store;

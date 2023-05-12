import { createStore } from "vuex";

import validationModule from "./modules/validation/validation.js";

import identificationModule from "./modules/identification.js";
import conditionModule from "./modules/condition.js";
import vaccinationModule from "./modules/vaccination.js";
import politicsModule from "./modules/politics.js";

import actions from "./actions.js";
import mutations from "./mutations.js";

const store = createStore({
  modules: {
    validation: validationModule,
    identification: identificationModule,
    condition: conditionModule,
    vaccination: vaccinationModule,
    politics: politicsModule,
  },

  actions,
  mutations,
});

export default store;

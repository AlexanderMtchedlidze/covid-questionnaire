import { createStore } from "vuex";
import validationModule from "./modules/validation/validation.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

const store = createStore({
  modules: {
    validation: validationModule,
  },
  state() {
    return {
      name: null,
      surname: null,
      email: null,
    };
  },
  actions,
  mutations,
  getters,
});

export default store;

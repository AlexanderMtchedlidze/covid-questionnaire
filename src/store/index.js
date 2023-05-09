import { createStore } from "vuex";
import validationModule from "./modules/validation/validation.js";

const store = createStore({
  modules: {
    validation: validationModule,
  },
});

export default store;

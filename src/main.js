import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import { defineAsyncComponent } from "vue";
const FormInput = defineAsyncComponent(() =>
  import("./components/form/FormInput.vue")
);
const InputLabel = defineAsyncComponent(() =>
  import("./components/form/InputLabel.vue")
);
const FormRadio = defineAsyncComponent(() =>
  import("./components/form/FormRadio.vue")
);
const NavigationWrapper = defineAsyncComponent(() =>
  import("./components/layout/nav/NavigationWrapper.vue")
);
const ForwardNavigation = defineAsyncComponent(() =>
  import("./components/layout/nav/ForwardNavigation.vue")
);
const BackwardNavigation = defineAsyncComponent(() =>
  import("./components/layout/nav/BackwardNavigation.vue")
);
const BaseForm = defineAsyncComponent(() =>
  import("./components/UI/BaseForm.vue")
);

const app = createApp(App);

app.component("FormInput", FormInput);
app.component("NavWrapper", NavigationWrapper);
app.component("ForwardNav", ForwardNavigation);
app.component("BackwardNav", BackwardNavigation);
app.component("InputLabel", InputLabel);
app.component("FormRadio", FormRadio);
app.component("BaseForm", BaseForm);

app.use(router);

app.use(store);

app.mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import { defineAsyncComponent } from "vue";
const TextInput = defineAsyncComponent(() =>
  import("./components/form/TextInput.vue")
);
const InputLabel = defineAsyncComponent(() =>
  import("./components/form/InputLabel.vue")
);
const RadioInput = defineAsyncComponent(() =>
  import("./components/form/radio/RadioInput.vue")
);
const GroupLabel = defineAsyncComponent(() =>
  import("./components/form/GroupLabel.vue")
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
const BaseWrapper = defineAsyncComponent(() =>
  import("./components/UI/BaseWrapper.vue")
);

const app = createApp(App);

app.component("TextInput", TextInput);
app.component("GroupLabel", GroupLabel);
app.component("NavWrapper", NavigationWrapper);
app.component("ForwardNav", ForwardNavigation);
app.component("BackwardNav", BackwardNavigation);
app.component("InputLabel", InputLabel);
app.component("RadioInput", RadioInput);
app.component("BaseWrapper", BaseWrapper);

app.use(router);

app.use(store);

app.mount("#app");

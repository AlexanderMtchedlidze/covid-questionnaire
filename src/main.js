import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import { defineAsyncComponent } from "vue";
const TheInput = defineAsyncComponent(() => import("./components/form/TheInput.vue"));
const TheNavigation = defineAsyncComponent(() => import("./components/layout/nav/TheNavigation.vue"));
const TheForward = defineAsyncComponent(() => import("./components/layout/nav/TheForward.vue"));

const app = createApp(App);

app.component('TheInput', TheInput);
app.component("TheNavigation", TheNavigation);
app.component("TheForward", TheForward);

app.use(router);

app.use(store);

app.mount("#app");

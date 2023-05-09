import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import { defineAsyncComponent } from "vue";
const TheInput = defineAsyncComponent(() => import("./components/form/TheInput.vue"));

const app = createApp(App);

app.component('the-input', TheInput);

app.use(router);

app.use(store);

app.mount("#app");

import { createRouter, createWebHistory } from "vue-router";
const IndexPage = () => import("./pages/IndexPage.vue");
import PersonIdentification from "./pages/PersonIdentification.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: IndexPage,
    },
    {
      path: "/identification",
      component: PersonIdentification,
    }
  ],
  history: createWebHistory(),
});

export default router;

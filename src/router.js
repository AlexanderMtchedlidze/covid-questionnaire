import { createRouter, createWebHistory } from "vue-router";
const IndexPage = () => import("./pages/IndexPage.vue");
const PersonIdentification = () => import("./pages/PersonIdentification.vue");
const CovidCondition = () => import("./pages/CovidCondition.vue");
const CovidVaccination = () => import("./pages/CovidVaccination.vue");

const router = createRouter({
  routes: [
    {
      path: "/",
      component: IndexPage,
    },
    {
      path: "/identification",
      component: PersonIdentification,
    },
    {
      path: "/condition",
      component: CovidCondition,
    },
    {
      path: "/vaccination",
      component: CovidVaccination,
    },
  ],
  history: createWebHistory(),
});

export default router;

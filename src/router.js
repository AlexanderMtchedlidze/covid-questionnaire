import { createRouter, createWebHistory } from "vue-router";
const IndexPage = () => import("./pages/IndexPage.vue");
const PersonIdentification = () => import("./pages/PersonIdentification.vue");
const CovidCondition = () => import("./pages/covid/CovidCondition.vue");
const CovidVaccination = () => import("./pages/covid/CovidVaccination.vue");
const CovidPolitics = () => import("./pages/covid/CovidPolitics.vue");

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
    {
      path: "/politics",
      component: CovidPolitics,
    },
    {
      path: "/thanks"
    },
    {
      path: "/:notFound(.*)"
    }
  ],
  history: createWebHistory(),
});

export default router;

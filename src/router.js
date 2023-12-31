import { createRouter, createWebHistory } from "vue-router";
const IndexPage = () => import("./pages/IndexPage.vue");
const PersonIdentification = () => import("./pages/PersonIdentification.vue");
const CovidCondition = () => import("./pages/CovidCondition.vue");
const CovidVaccination = () => import("./pages/CovidVaccination.vue");
const CovidPolitics = () => import("./pages/CovidPolitics.vue");
const ThankYou = () => import("./pages/ThankYou.vue");

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
      path: "/thank-you",
      component: ThankYou,
    },
  ],
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;

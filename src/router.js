import { createRouter, createWebHistory } from "vue-router";
const IndexPage = () => import("./pages/IndexPage.vue");

const router = createRouter({
  routes: [
    {
      path: "/",
      component: IndexPage,
    },
  ],
  history: createWebHistory(),
});

export default router;

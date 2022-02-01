import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NProgress from "nprogress";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/person/create",
    name: "PersonCreate",
    component: () => import("../views/person/PersonCreate.vue"),
  },
  {
    path: "/person/edit/:id",
    name: "PersonEdit",
    component: () => import("../views/person/PersonEdit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_API_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

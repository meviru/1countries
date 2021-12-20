import Vue from "vue";
import Router from "vue-router";
import FlagList from "./components/FlagsList.vue";
import FlagDetail from "./components/FlagDetail.vue";
import PageNotFound from "./components/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: FlagList,
    },
    {
      path: "/details/:id",
      name: "details",
      component: FlagDetail,
    },
    { path: "/:pathMatch(.*)*", component: PageNotFound },
  ],
});

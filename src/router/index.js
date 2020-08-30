import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FirstStep",
    component: () =>
      import(/* webpackChunkName: "FirstStep" */ "@/views/FirstStep.vue")
  },
  {
    path: "/result",
    name: "SecondStep",
    meta: {
      requireValidate: true
    },
    component: () =>
      import(/* webpackChunkName: "SecondStep" */ "../views/SecondStep.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireValidate)) {
    if (store.getters.isValidate) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;

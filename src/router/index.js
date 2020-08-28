import Vue from "vue";
import VueRouter from "vue-router";

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
    component: () =>
      import(/* webpackChunkName: "SecondStep" */ "../views/SecondStep.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

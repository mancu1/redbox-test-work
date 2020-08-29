import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/resetCss.css";
import "./plugins/element.js";
import "@/style/blocks.css";
import "@/style/colors.css";
import "@/style/font.css";
import "@/style/margins.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

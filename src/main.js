import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";

export const bus = new Vue();

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);




new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import VueI18n from "vue-i18n";
import { messages } from "./components/common/i18n";

import "./assets/css/icon.css";
import "./components/common/directives";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题

Vue.config.productionTip = false;
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh",
  messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

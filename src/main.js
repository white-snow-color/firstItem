import Vue from "vue";
// 导入axios
import axios from "axios";
// 导入组件
import App from "./App.vue";
import router from "@/router";
// 倒入element插件库
// import ElementUI from "element-ui";
// 设置element插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 设置bootstrap插件
import "@/assets/bootstrap-3.4.1-dist/css/bootstrap.min.css";
Vue.config.productionTip = false;
// 将axios挂在到vue原型上
Vue.prototype.$http = axios;
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");


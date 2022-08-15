//导入vue和vue-router的包
import Vue from "vue";
import VueRouter from "vue-router";
//导入需要的组件
import Login from "@/components/user/MyLogin.vue";
// import APP from "@/App.vue";
import Home from "@/components/user/MyHome.vue";
import EleM from "@/components/containers-user/EleployeeMagement.vue";
import Rights from "@/components/containers-user/Rights.vue";
import Active from "@/components/containers-user/Active.vue";
import Goods from "@/components/containers-user/Goods.vue";
import VIPs from "@/components/containers-user/VIPs.vue";
import Orders from "@/components/containers-user/Orders.vue";
import Purc from "@/components/containers-user/Purchase.vue";
import Dataes from "@/components/containers-user/Dataes.vue";
import EleIfor from "@/components/containers-user/EleIfor.vue";
//调用vue.use（）函数，把vueRouter装给插件vue
Vue.use(VueRouter);
//创建路由的实例对象
const router = new VueRouter({
  // 登录的路由规则
  routes: [
    //当访问/的时候，通过redirect 属性跳转到对应的路由规则
    { path: "/", redirect: "/login" },
    { path: "/home", redirect: "/eleIfor" },
    { path: "/login", component: Login },
    // { path: "/app", component: APP },
    // 后台主页的路由规则
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/ele",
          component: EleM,
        },
        {
          path: "/pruc",
          component: Purc,
        },
        {
          path: "/rightS",
          component: Rights,
        },
        {
          path: "/active",
          component: Active,
        },
        {
          path: "/goods",
          component: Goods,
        },
        {
          path: "/vips",
          component: VIPs,
        },
        {
          path: "/orders",
          component: Orders,
        },
        {
          path: "/dataes",
          component: Dataes,
        },
        {
          path: "/eleIfor",
          component: EleIfor,
        },
      ],
    },
  ],
});
//全局前置守卫
router.beforeEach((to,from,next)=>{
  if(to.path == '/home'){
    const token = localStorage.getItem('token');
    if(token){
      next();
    }else{
      next('/login');
    }
  }else{
    next();
  }
})
//向外共享路由的实例对象
export default router

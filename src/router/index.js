import Vue from "vue";
import VueRouter from "vue-router";
//布局组件
import Layout from "@/components/Layout.vue";
/****************中文 ***********/
//首页
import CHHome from "@/views/CH/home";
//关于我们
import CHAboutUs from "@/views/CH/aboutUs";
//服务范畴
import CHRange from "@/views/CH/range";
//使用条款
import CHVision from "@/views/CH/vision";
/****************英文 ***********/
//首页
import ENHome from "@/views/EN/home";
//关于我们
import ENAboutUs from "@/views/EN/aboutUs";
//服务范畴
import ENRange from "@/views/EN/range";
//使用条款
import ENVision from "@/views/EN/vision";
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "CH/home",
    children: [
      {
        path: "CH/home",
        component: CHHome,
        name: "CH/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "CH/aboutUs",
        component: CHAboutUs,
        name: "CH/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "CH/range",
        component: CHRange,
        name: "CH/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "CH/vision",
        component: CHVision,
        name: "CH/vision",
        meta: { title: "愿景", parent: "" }
      },
      // 英文
      {
        path: "EN/home",
        component: ENHome,
        name: "EN/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "EN/aboutUs",
        component: ENAboutUs,
        name: "EN/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "EN/range",
        component: ENRange,
        name: "EN/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "EN/vision",
        component: ENVision,
        name: "EN/vision",
        meta: { title: "愿景", parent: "" }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "cur"
});

export default router;

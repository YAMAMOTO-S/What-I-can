import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import products from "@/components/Products";
import recommen from "@/components/Recommen";
import GeoApp from "@/components/GeoApp";
import FURIMA from "@/components/Furima";
import meal from "@/components/meal";
import pros from "@/components/pros";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "products",
    component: products,
  },
  {
    path: "/recommen",
    name: "recommen",
    component: recommen,
  },
  {
    path: "/geo-app",
    name: "geo-app",
    component: GeoApp,
  },
  {
    path: "/furima",
    name: "furima",
    component: FURIMA,
  },
  {
    path: "/meal",
    name: "meal",
    component: meal
  },
  {
    path: '/pros',
    name: "pros",
    component: pros
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { y: 500 }
  }
});

export default router;

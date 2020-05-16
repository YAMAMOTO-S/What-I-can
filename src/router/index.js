import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import products from "@/components/Products";
import recommen from "@/components/Recommen";
import GeoApp from "@/components/GeoApp";
import FURIMA from "@/components/Furima";

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

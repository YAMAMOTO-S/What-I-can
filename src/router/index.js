import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import products from "@/components/Products";
import exchange from "@/components/Exchange";
import ArrayMethods from "@/components/ArrayMethod";
import Meal from "@/components/Meal";

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
    path: "/exchange",
    name: "exchange",
    component: exchange,
  },
  {
    path: "/arraymethods",
    name: "arraymethods",
    component: ArrayMethods,
  },
  {
    path: "/meal",
    name: "meal",
    component: Meal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

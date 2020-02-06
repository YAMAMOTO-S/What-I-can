import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import seatapp from '@/components/SeatApp'
import products from '@/components/Products'
import exchange from '@/components/Exchange'
import ArrayMethods from '@/components/ArrayMethod'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/seatapp',
    name: 'seatapp',
    component: seatapp
  },
  {
    path: '/products',
    name: 'products',
    component: products
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: exchange
  },
  {
    path: '/arraymethods',
    name: 'arraymethods',
    component: ArrayMethods
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

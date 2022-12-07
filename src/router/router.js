import Vue from 'vue'
import VueRouter from 'vue-router'
import vCart from '../views/v-cart'
import vAbout from '../views/AboutView.vue'
import McvMain from '../components/Main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'McvMain',
    component: McvMain,
  },

  {
    path: '/cart',
    name: 'vCart',
    component: vCart,
  },
  {
    path: '/about',
    name: 'vAbout',
    component: vAbout,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

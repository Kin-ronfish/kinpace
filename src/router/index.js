import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/paint',
    name: 'Paint',
    component: () => import('../views/paint.vue')
  },
  {
    path: '/diy',
    name: 'Diy',
    component: () => import('../views/diy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

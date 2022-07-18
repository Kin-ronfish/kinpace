import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('../views/CarView.vue')
  },
  {
    path: '/cars',
    name: 'cars',
    component: () => import('../views/CarProject.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

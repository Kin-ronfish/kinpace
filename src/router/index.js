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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
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
  },
  {
    path: '/live',
    name: 'Live',
    component: () => import('../views/live.vue')
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('../views/note.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

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
    component: () => import('../views/CarProject.vue')
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: () => import('../views/questionnaire/index.vue')
  },
  {
    path: '/createlist',
    name: 'CreateList',
    component: () => import('../views/questionnaire/create/createList.vue')
  },
  {
    path: '/createdetail',
    name: 'CreateDetail',
    component: () => import('../views/questionnaire/create/createDetail.vue')
  },
  {
    path: '/publishform',
    name: 'PublishForm',
    component: () => import('../views/questionnaire/publish/publishForm.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

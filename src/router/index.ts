import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage,
  },
]

let baseURL = '/'

if (window.location.hostname === 'localhost') {
  baseURL = '/'
}

const router = createRouter({
  history: createWebHistory(baseURL),
  routes,
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Startseite from '../components/Startseite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Startseite'
  },
  {
    path: '/Startseite',
    name: 'Startseite',
    component: Startseite
  },
]

const router = new VueRouter({
  routes
})

export default router

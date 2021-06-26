import Vue from 'vue'
import VueRouter from 'vue-router'
import Startseite from '../components/Startseite.vue'
import Slider from '../components/slider.vue'
import Carousel from '../components/Carousel.vue'
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
  {
    path: '/Slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/Carousel',
    name: 'Carousel',
    component: Carousel
  },
]

const router = new VueRouter({
  routes
})

export default router

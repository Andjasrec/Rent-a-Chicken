import Vue from 'vue'
import VueRouter from 'vue-router'
import Startseite from '../components/Startseite.vue'
import Slider from '../components/slider.vue'
import Carousel from '../components/Carousel.vue'
import Video from '../components/Video.vue'
import DeineEier from '../components/Startseite/DeineEier.vue'
import Huehner from '../components/Startseite/Hühner.vue'
import LiveCam from'../components/Startseite/LiveCam.vue'
import Start from '../components/Startseite/Startseite.vue'

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
  {
    path: '/Video',
    name: 'Video',
    component: Video
  },
  {
    path: '/DeineEier',
    name: 'DeineEier',
    component: DeineEier
  },
  {
    path: '/Huehner',
    name: 'Huehner',
    component: Huehner
  },
  {
    path: '/LiveCam',
    name: 'LiveCam',
    component: LiveCam
  },
  {
    path: '/Start',
    name: 'Start',
    component: Start
  },
]

const router = new VueRouter({
  routes
})

export default router

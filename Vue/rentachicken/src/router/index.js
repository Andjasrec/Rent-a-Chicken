import Vue from 'vue'
import VueRouter from 'vue-router'
import Slider from '../components/slider.vue'
import Carousel from '../components/Carousel.vue'
import DeineEier from '../components/Startseite/DeineEier.vue'
import Huehner from '../components/Startseite/Hühner.vue'
import LiveCam from'../components/Startseite/LiveCam.vue'
import Start from '../components/Startseite/Startseite.vue'
import eins from '../components/Indruction/1.vue'
import zwei from '../components/Indruction/2.vue'
import drei from '../components/Indruction/3.vue'
import vier from '../components/Indruction/4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/slider'
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
    component: Start,
  },
  {
    path: '/1',
    name: '1',
    component: eins,
    
  },
  {
    path: '/2',
    name: '2',
    component: zwei,
  },
  {
    path: '/3',
    name: '3',
    component: drei,
  },
  {
    path: '/4',
    name: '4',
    component: vier,
  },
]

const router = new VueRouter({
  routes
})

export default router

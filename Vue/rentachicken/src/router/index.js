import Vue from 'vue'
import VueRouter from 'vue-router'
import Slider from '../components/slider.vue'
import Carousel from '../components/Carousel.vue'
import Video from '../components/Video.vue'
import DeineEier from '../components/Startseite/DeineEier.vue'
import Huehner from '../components/Startseite/Hühner.vue'
import LiveCam from'../components/Startseite/LiveCam.vue'
import Start from '../components/Startseite/Startseite.vue'
import eins from '../components/Indruction/1.vue'
import zwei from '../components/Indruction/2.vue'
import drei from '../components/Indruction/3.vue'
import vier from '../components/Indruction/4.vue'
import slider2 from '../components/slider2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Start'
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
  {
    path: '/slider2',
    name: 'slider2',
    component: slider2,
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: "/home",
      name: "home",
      component: () => import('../views/HomePage.vue'),  
    },
    {
      path: "/home/art-gallery",
      name: "art-gallery",
      component: () => import('../views/ArtGallery.vue'),
    },
    {
      path: "/home/webinar",
      name: "webinar",
      component: () => import('../views/Webinar.vue'),
    },
    {
      path: "/home/competition",
      name: "competition",
      component: () => import('../views/Competition.vue'),
    },
  ]
})
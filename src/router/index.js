import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: "/home",
      name: "home",
      component: () => import('../views/HomePage.vue'),  
    },
    {
      path: "/about",
      name: "about",
      component: () => import('../views/AboutPage.vue'),  
    },
    {
      path: "/art-gallery",
      name: "art-gallery",
      component: () => import('../views/ArtGallery.vue'),
    },
    {
      path: "/webinar",
      name: "webinar",
      component: () => import('../views/Webinar.vue'),
    },
    {
      path: "/competition",
      name: "competition",
      component: () => import('../views/Competition.vue'),
    },
    {
      path: "/international",
      name: "internationalComp",
      component: () => import('../views/comp-international.vue')
    },
    {
      path: "/national",
      name: "nationalComp",
      component: () => import('../views/comp-national.vue')
    },
  ]
})
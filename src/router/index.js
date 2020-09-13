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
      path: "/virtual-art-exhibition",
      name: "virtual-art-exhibition",
      component: () => import('../views/VirtualArtExhibition.vue'),
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
      path: "/international-competition",
      name: "international-competition",
      component: () => import('../views/InternationalCompetition.vue')
    },
    {
      path: "/national-competition",
      name: "national-competition",
      component: () => import('../views/NationalCompetition.vue')
    },
  ]
})
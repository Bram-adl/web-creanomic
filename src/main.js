import Vue from 'vue'
import App from './App.vue'

import 'animate.css'
import '@/assets/scss/main.scss'

import { gsap } from 'gsap'

Vue.prototype.gsap = gsap
Vue.prototype.eventBus = new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

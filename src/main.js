import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'
import { gsap } from 'gsap'

Vue.prototype.gsap = gsap
Vue.prototype.eventBus = new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

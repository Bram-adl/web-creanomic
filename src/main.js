import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import 'animate.css'
import { gsap } from 'gsap'

Vue.use(FlagIcon)
Vue.prototype.gsap = gsap
Vue.prototype.eventBus = new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n,
}).$mount('#app')

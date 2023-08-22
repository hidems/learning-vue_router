import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { inspect } from '@xstate/inspect'

Vue.config.productionTip = false

inspect({
  iframe: false, // open in new window
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

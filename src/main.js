import Vue from 'vue'
import App from './App'
import router from './router'

import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

import '@/assets/styles/reset.css'
import '@/assets/styles/pc.css'
import '@/assets/styles/animate.css'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

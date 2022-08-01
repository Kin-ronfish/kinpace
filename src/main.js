import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bus from 'vue-bus'
import './plugins/vant.js'

Vue.config.productionTip = false
Vue.use(bus)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

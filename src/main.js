import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

import { router } from './router'
import directivas from '../src/directivas'


Vue.config.productionTip = false

new Vue({
  router,
  directivas,
  render: h => h(App),
}).$mount('#app')

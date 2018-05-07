// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import jQuery from 'jquery'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import "@/assets/css/base.css";

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

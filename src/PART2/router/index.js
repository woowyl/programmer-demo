import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import JsScroll from '../components/js/scroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/js/scroll',
      name: 'javaScript',
      component: JsScroll
    }
  ]
})

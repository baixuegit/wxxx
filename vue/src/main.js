// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* 全站级加载条 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import '@/assets/css/element/index.scss'
import '@/assets/css/global.scss'

import libs from './libs'
import Element from 'element-ui'

// import {
//   Button,
//   Input,
//   Select
// } from 'element-ui'

// Vue.use(Input)
// Vue.use(Button)
// Vue.use(Select)

Vue.use(Element)

Vue.use(libs)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})
/* eslint-disable no-new */

// 定义全局混入
Vue.mixin({
  data () {
    return {
      mixinName: 'baixue'
    }
  },
  created () {},
  methods: {
    hello () {
      console.log('mixin,混入的方法')
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

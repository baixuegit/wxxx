import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/views/index/my_index'
import Index from '@/views/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})

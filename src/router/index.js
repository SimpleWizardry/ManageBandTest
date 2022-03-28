import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/controllers-list',
      name: 'Controllers',
      component: () => import('../views/Controllers')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/Settings')
    }
  ]
})

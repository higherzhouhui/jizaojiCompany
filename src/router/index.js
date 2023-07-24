import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export const routesConfig = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/aboutUs',
    name: '关于我们',
    component: Home
  }
]

export default new Router({
  mode: 'history',
  routes: routesConfig
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Abount from '@/components/Abount'

Vue.use(Router)

export const routesConfig = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/about',
    name: '关于我们',
    component: Abount
  }
]

export default new Router({
  mode: 'history',
  routes: routesConfig
})

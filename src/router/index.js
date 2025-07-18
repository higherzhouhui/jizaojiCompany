import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SelectedCases from '@/components/SelectedCases'
import AppDevelopment from '@/components/AppDevelopment'
import WeChatDevelopment from '@/components/WeChatDevelopment'
import SystemDevelopment from '@/components/SystemDevelopment'
import AboutUs from '@/components/AboutUs'
import News from '@/components/News'

Vue.use(Router)

export const routesConfig = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/cases',
    name: '精选案例',
    component: SelectedCases
  },
  {
    path: '/app',
    name: 'APP开发',
    component: AppDevelopment
  },
  {
    path: '/wechat',
    name: '微信开发',
    component: WeChatDevelopment
  },
  {
    path: '/system',
    name: '系统开发',
    component: SystemDevelopment
  },
  {
    path: '/about',
    name: '关于我们',
    component: AboutUs
  },
  {
    path: '/news',
    name: '新闻动态',
    component: News
  }
]

export default new Router({
  mode: 'history',
  routes: routesConfig
})

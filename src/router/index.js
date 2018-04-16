import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import huitouke from '@/pages/huitouke'
import zhihuixin from '@/pages/zhihuixin'
import jukefu from '@/pages/jukefu'
import moshushi from '@/pages/moshushi'
import callus from '@/pages/callus'
import brand from '@/pages/brand'
import showcase from '@/pages/showcase'
import dynamic from '@/pages/dynamic'
import about from '@/pages/about'
import addus from '@/pages/addus'
import apply from '@/pages/apply'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
      // component: resolve => require(['@/pages/home'], resolve)
    },
    {
      path: '/huitouke',
      name: 'huitouke',
      component: huitouke
      // component: resolve => require(['@/pages/huitouke'], resolve)
    },
    {
      path: '/zhihuixin',
      name: 'zhihuixin',
      component: zhihuixin
      // component: resolve => require(['@/pages/zhihuixin'], resolve)
    },
    {
      path: '/jukefu',
      name: 'jukefu',
      component: jukefu
      // component: resolve => require(['@/pages/jukefu'], resolve)
    },
    {
      path: '/moshushi',
      name: 'moshushi',
      component: moshushi
      // component: resolve => require(['@/pages/moshushi'], resolve)
    },
    {
      path: '/callus',
      name: 'callus',
      component: callus
      // component: resolve => require(['@/pages/callus'], resolve)
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
      // component: resolve => require(['@/pages/brand'], resolve)
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: showcase
      // component: resolve => require(['@/pages/showcase'], resolve)
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
      // component: resolve => require(['@/pages/dynamic'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: about
      // component: resolve => require(['@/pages/about'], resolve)
    },
    {
      path: '/addus',
      name: 'addus',
      component: addus
      // component: resolve => require(['@/pages/addus'], resolve)
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply
      // component: resolve => require(['@/pages/apply'], resolve)
    }
  ]
})

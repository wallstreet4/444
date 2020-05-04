import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import index from '@/components/index'
import latest from '@/components/latest'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    { path: '/latest', name: 'latest', component: latest }

  ]
})
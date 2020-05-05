import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import index from '@/components/index'
import experience from '@/components/experience'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: index
    },{
      path: '/',
      name: 'experience',
      component: experience
    },

  ]
})
import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import index from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cha',
      component: () => import('../components/channel.vue')
    }, {
      path: '/occ',
      component: () => import('../components/occupation.vue')
    }, {
      path: '/tea',
      component: () => import('../components/teachers.vue')
    }
  ]
})

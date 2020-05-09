import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import index from '@/components/index'
import experience from '@/components/experience'
import passageway from '@/components/passageway'
import occupation from '@/components/occupation'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: index
    },{
      path: '/experience',
      name: 'experience',
      component: experience
    },{
      path: '/passageway',
      name: 'passageway',
      component: passageway
    },{
      path: '/',
      name: 'occupation',
      component: occupation
    },

  ]
})
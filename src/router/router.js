import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import index from '@/components/index'
import curriculum from '@/components/lrt/curriculum'
import onlinecourses from '@/components/lrt/onlinecourses'
 
Vue.use(Router)
 
export default new Router({
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
  routes: [
    { path: '/', name: 'index', component: index },
     { path: '/curriculum', name: 'curriculum', component: curriculum },
	 { path: '/onlinecourses', name: 'onlinecourses', component: onlinecourses },
  ]
})
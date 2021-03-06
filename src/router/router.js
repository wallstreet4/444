import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import index from '@/components/index'
import curriculum from '@/components/lrt/curriculum'
import onlinecourses from '@/components/lrt/onlinecourses'
import newmembers from "@/components/newmembers"
import memberlogin from "@/components/memberlogin"
import contactus from "@/components/contactus"
import learning from '@/components/learning'
import latest from '@/components/latest'
import wallstreet from '@/components/wallstreet'
import experience from '@/components/experience'
import studentchannel from '@/components/passageway'
import occupation from '@/components/occupation'

Vue.use(Router)
 
export default new Router({
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
  routes: [
    { path: '/', name: 'index', component: index },
     { path: '/curriculum', name: 'curriculum', component: curriculum },
	 { path: '/onlinecourses', name: 'onlinecourses', component: onlinecourses },
	 {
	 	path: '/enterprise',
	 	component: () => import('../components/enterprise.vue')
	 },
	 {
	 	path: '/learningjourney',
	 	component: () => import('../components/learningjourney.vue')
	 },{
	   path: '/channel',
	   component: () => import('../components/channel.vue')
	 }, {
	   path: '/occupation',
	   component: () => import('../components/occupation.vue')
	 }, {
	   path: '/teachers',
	   component: () => import('../components/teachers.vue')
	 },{
	 	path: "/newmembers",
	 	name: "newmembers",
	 	component: newmembers
	 },
	 {
	 	path: "/memberlogin",
	 	name: "memberlogin",
	 	component: memberlogin
	 },
	 {
	 	path: "/contactus",
	 	name: "contactus",
	 	component: contactus
	 },{ path: '/latest', name: 'latest', component: latest },
    { path: '/wallstreet', name: 'wallstreet', component: wallstreet },
	{ path: '/learning', name: 'learning', component: learning },{
      path: '/experience',
      name: 'experience',
      component: experience
    },{
      path: '/studentchannel',
      component: studentchannel
    },{
      path: '/because',
      component: occupation
    },
  ]
})




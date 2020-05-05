import Vue from 'vue'
import Router from 'vue-router'
//组件模块
import index from '@/components/index'
import newmembers from "@/components/newmembers"
import memberlogin from "@/components/memberlogin"
import contactus from "@/components/contactus"

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
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
		}
	]
})

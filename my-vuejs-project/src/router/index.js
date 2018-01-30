import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Detail from '@/components/Detail_page1'
import List1 from '@/components/list_page1'
import List2 from '@/components/list_page2'
import Login from '@/components/Login'
import Login2 from '@/components/Login2'
import Login3 from '@/components/Login3'
import Cart from '@/components/Cart'


Vue.use(Router)

export default new Router({
	  mode:"hash",
  routes: [ 
   	{
      path: '/index', 
      name: 'Header',
      component: Header
		},
  	{
      path: '/list1', 
      name: 'List1',
      component: List1
		},
		{
      path: '/list2', 
      name: 'List2',
      component: List2
		},
		{
      path: '/deatail1', 
      name: 'Detail',
      component: Detail
  },
	{
      path: '/login', 
      name: 'Login',
      component: Login
 },
 {
      path: '/sms-login', 
      name: 'Login2',
      component: Login2
 },
 {
      path: '/forget-pass', 
      name: 'Login3',
      component: Login3
 },
  {
      path: '/cart', 
      name: 'Cart',
      component: Cart
  }
  ]
}) 

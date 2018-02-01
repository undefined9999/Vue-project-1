import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	  mode:"hash",
  routes: [ 
   	{
      path: '/index', 
      name: 'Header',
      component: () => import('@/components/Header')
		},
  	{
      path: '/list1', 
      name: 'List1',
      component: () => import('@/components/list_page1')
		},
		{
      path: '/list2/:Attr_id/:Id', 
      name: 'List2',
      component: () => import('@/components/list_page2')
		},
		{
      path: '/detail1/:Id', 
      name: 'Detail',
      component: () => import('@/components/Detail_page1')
  },
	{
      path: '/login', 
      name: 'Login',
      component: () => import('@/components/Login')
 },
 {
      path: '/sms-login', 
      name: 'Login2',
      component: () => import('@/components/Login2')
 },
 {
      path: '/forget-pass', 
      name: 'Login3',
      component: () => import('@/components/Login3')
 },
 {
      path: '/login-suss', 
      name: 'Login4',
      component: () => import('@/components/Login4')
 },
  {

      path: '/cart', 
      name: 'Cart',
      component: () => import('@/components/Cart')
}
  ]
}) 

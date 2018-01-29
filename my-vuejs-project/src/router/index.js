import Vue from 'vue'
import Router from 'vue-router'

import List1 from '@/components/list_page1'
import List2 from '@/components/list_page2'

import Detail from '@/components/Detail_page1'



Vue.use(Router)

export default new Router({
  routes: [

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

  ]
}) 
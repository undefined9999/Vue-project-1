import Vue from 'vue'
import Router from 'vue-router'
import List1 from '@/components/list_page1'
import List2 from '@/components/list_page2'



Vue.use(Router)

export default new Router({
	mode : "hash",
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
	
  ]
}) 
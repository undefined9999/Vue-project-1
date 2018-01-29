import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

import Detail from '@/components/Detail_page1'
=======
import HelloWorld from '@/components/HelloWorld'
import Carousel from '@/components/Carousel'

import List1 from '@/components/list_page1'
import Header from '@/components/Header'




import Detail from '@/components/Detail_page1'

>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9
Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD

		{

      path: '/deatail1', 
      name: 'Detail',
      component: Detail
  }
=======
   
  	{

      path: '/list1', 
      name: 'List1',
      component: List1

		},



>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9
  ]
}) 
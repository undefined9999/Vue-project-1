import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import Carousel from '@/components/Carousel'
<<<<<<< HEAD
import List1 from '@/components/list_page1'
=======
import Header from '@/components/Header'

>>>>>>> eb05d64659ef731ef8e92d305a2eb4a9ac54ec3b
=======
import Detail from '@/components/Detail_page1'
>>>>>>> wuxin
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
      path: '/index', 
<<<<<<< HEAD
      name: 'Carousel',
      component: Carousel
  },
  		{
      path: '/index', 
      name: 'Carousel',
      component: Carousel
  },
  	{
<<<<<<< HEAD
      path: '/list1', 
      name: 'List1',
      component: List1
=======
      name: 'Header',
      component: Header
>>>>>>> eb05d64659ef731ef8e92d305a2eb4a9ac54ec3b
=======
      path: '/deatail1', 
      name: 'Detail',
      component: Detail
>>>>>>> wuxin
  }
  ]
}) 
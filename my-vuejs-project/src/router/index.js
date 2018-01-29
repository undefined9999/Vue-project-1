import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Carousel from '@/components/Carousel'
import Detail from '@/components/Detail_page1'
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
      name: 'Carousel',
      component: Carousel
  },
  		{
      path: '/index', 
      name: 'Carousel',
      component: Carousel
  },
  	{
      path: '/deatail1', 
      name: 'Detail',
      component: Detail
  }
  ]
}) 
import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail_page1'


Vue.use(Router)

export default new Router({
  routes: [
		{

      path: '/deatail1', 
      name: 'Detail',
      component: Detail
  },
  ]
}) 
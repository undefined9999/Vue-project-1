<template>
  <div id="app">
<<<<<<< HEAD
	  <router-view/>
	</div>
=======
    <router-view/>  
   	<detail></detail>
  </div>
>>>>>>> 39494d34e4afb1f351d30e5df0de7d78aef617f6
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>
  var rempx = document.documentElement.clientWidth / 4.2;
	document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";

	import Detail from '@/components/Detail_page1'

<<<<<<< HEAD
  var rempx = document.documentElement.clientWidth / 4.2;
	document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
=======
>>>>>>> 39494d34e4afb1f351d30e5df0de7d78aef617f6


	import { Toast } from 'mint-ui';
	import axios from 'axios'; 
	import Page1 from './components/list_page1';
  export default {
  name: 'App',
  components: {
  		Detail
  }
}
</script>

<style>
/*--------geyongwei--------*/	
	@import './assets/css/reset.css';
	@import './assets/css/iconfont/iconfont.css';
	@import './assets/css/iconfont/iconfont2.css';	
	
	*{
		box-sizing: border-box;
	}
	
#app{
	display: flex; flex-direction: column; width: 100%; height: 100%;
}
body, html {
  width: 100%;
  height: 100%;
}

</style>

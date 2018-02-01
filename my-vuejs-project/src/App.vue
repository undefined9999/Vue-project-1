<template>
  <div id="app">
<!--		<keep-alive>-->
    	<router-view></router-view>
<!--		</keep-alive>-->
  </div>
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>

<script>
  import Page1 from './components/list_page1';
  var rempx = document.documentElement.clientWidth / 4.2;
	document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
	import { Toast } from 'mint-ui';
	import axios from 'axios'; 
	
  export default {
  name: 'App',
  components: {
  		
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
		display: flex; 
		flex-direction: column; 
		width: 100%;
		height: 100%;
	}
body, html {
	  width: 100%;
	  height: 100%;
	}
</style>

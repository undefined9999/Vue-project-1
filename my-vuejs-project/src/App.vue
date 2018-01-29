<template>
  <div id="app">
    <router-view/>  
   	<detail></detail>
  </div>
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>
  var rempx = document.documentElement.clientWidth / 4.2;
	document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";

	import Detail from '@/components/Detail_page1'



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
#app{
	display: flex; flex-direction: column; width: 100%; height: 100%;
}
body, html {
  width: 100%;
  height: 100%;
}

</style>

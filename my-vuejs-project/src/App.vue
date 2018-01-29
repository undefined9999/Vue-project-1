<template>
  <div id="app">
    <router-view/>
    <commom-carousel></commom-carousel>
    <common-footer></common-footer>
    
  </div>
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>
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
	@import './assets/css/reset.css';
	@import './assets/css/iconfont/iconfont.css';	

html{height: 100%;}
body{display: flex;flex-direction: column;height:100%;}
#app{display: flex;flex-direction: column;height:100%;}

</style>

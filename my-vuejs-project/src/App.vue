<template>
  <div id="app">
<<<<<<< HEAD

    <router-view class="dpp"/>

=======
    <router-view/>
    <commom-carousel></commom-carousel>
    <common-footer></common-footer>
>>>>>>> eb05d64659ef731ef8e92d305a2eb4a9ac54ec3b
    
  </div>
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>
	  var rempx = document.documentElement.clientWidth / 4.2;
		document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
	import { Toast } from 'mint-ui';
	import axios from 'axios'; 
	import Page1 from './components/list_page1';
  export default {
  name: 'App',
  components: {
<<<<<<< HEAD
  	Page1
=======
  
>>>>>>> eb05d64659ef731ef8e92d305a2eb4a9ac54ec3b
  }
}
</script>

<style>
	
	@import './assets/css/reset.css';
<<<<<<< HEAD
	/*@import './assets/css/iconfont/iconfont.css';*/	
#app{
	display: flex; flex-direction: column; width: 100%; height: 100%;
}
.dpp{
	width: 100%; height: 100%; display: flex;
}
body, html {
  width: 100%;
  height: 100%;
}
=======
	@import './assets/css/iconfont/iconfont.css';	

html{height: 100%;}
body{display: flex;flex-direction: column;height:100%;}
#app{display: flex;flex-direction: column;height:100%;}

>>>>>>> eb05d64659ef731ef8e92d305a2eb4a9ac54ec3b
</style>

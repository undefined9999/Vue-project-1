<template>
  <div id="app">

    <router-view class="dpp"/>

    
  </div>
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'; 
	import Page1 from './components/list_page1';
  export default {
  name: 'App',
  components: {
  	Page1
  }
}
</script>

<style>
	
	@import './assets/css/reset.css';
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
</style>

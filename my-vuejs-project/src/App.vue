<template>
  <div id="app">
  	<common-header></common-header>	
    <router-view/>
    <common-footer></common-footer>
    
  </div>
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>
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
	/*@import './assets/css/iconfont/iconfont.css';*/	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

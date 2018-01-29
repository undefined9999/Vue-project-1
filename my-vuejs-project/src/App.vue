<template>
  <div id="app">
  	
    <router-view/>
   
   	<detail></detail>
  </div>
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>
	import Detail from '@/components/Detail_page1'
	import { Toast } from 'mint-ui';
	import axios from 'axios'; 
  export default {
  name: 'App',
  components: {
  		Detail
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

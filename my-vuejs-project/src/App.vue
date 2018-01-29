<template>
  <div id="app">
<<<<<<< HEAD
    <router-view/>  
   	<detail></detail>
  </div>
=======

	  <router-view/>
	</div>
>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9
</template>

<script type="text/javascript" src="./assets/js/zepto.jsv1.2.0.js"></script>
<script>

<<<<<<< HEAD
=======
  var rempx = document.documentElement.clientWidth / 4.2;
	document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";


>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9
	  var rempx = document.documentElement.clientWidth / 4.2;
		document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";

	import Detail from '@/components/Detail_page1'
<<<<<<< HEAD
=======

>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9
	import { Toast } from 'mint-ui';
	import axios from 'axios'; 
	import Page1 from './components/list_page1';
  export default {
  name: 'App',
  components: {

<<<<<<< HEAD
  		Detail

=======
>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9
  }
}
</script>

<style>
/*--------geyongwei--------*/	
	@import './assets/css/reset.css';

<<<<<<< HEAD
	/*@import './assets/css/iconfont/iconfont.css';*/	
#app{
	display: flex; flex-direction: column; width: 100%; height: 100%;
}

=======
	@import './assets/css/iconfont/iconfont.css';
#app{
	display: flex; flex-direction: column; width: 100%; height: 100%;
}
>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9
body, html {
  width: 100%;
  height: 100%;
}
<<<<<<< HEAD

	@import './assets/css/iconfont/iconfont.css';	

html{height: 100%;}
body{display: flex;flex-direction: column;height:100%;}
#app{display: flex;flex-direction: column;height:100%;}
=======
>>>>>>> 6b8cfdd41f8eb9f67f2e0c745643b532225ce4b9

</style>

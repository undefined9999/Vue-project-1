<template>
<main>
	<mt-swipe :auto="4000" v-for="item in arr_top">
		 <router-link to="">
		  <mt-swipe-item>
		    <img :src="item.imageUrl" >
		  </mt-swipe-item>		    	
		</router-link>
	</mt-swipe>

<!--<common-list></common-list>
<list-main></list-main>-->
</main>
</template>

<script>
//  import List from './List'
//  import List2 from './List2'
	import axios from 'axios';

  
export default {
  name: 'commom-carousel',
  data () {
    return {
      		arr_top: []
    }
  },
   components: {
// "common-list" : List,
// "list-main" : List2
  },
    mounted () {
			axios.get('/v4/api/billboard/home?__t=1516846822633')
	.then((response) => {
		//console.log(response);
		this.arr_top = response.data.data.billboards;
		this.$nextTick(function(){
			//console.log(this.arr_top);
			var sp = new Swiper(".swiper-container", {
				autoplay: true
			})
		})
	})
		.catch(function (error) {
			//console.log(error);
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
       @import '../assets/css/swiper.min.css';
     main{display: flex;flex: 1;background:#eee;overflow-y: auto;flex-direction: column;}
 .Carousel  a{display:flex;width:100%;height:100%;} 
  .Carousel  a img{height:1.8rem;}
</style>

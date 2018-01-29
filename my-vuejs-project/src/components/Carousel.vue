<template>
<main>
	<mt-swipe :auto="4000" class="Carousel" >
	  <mt-swipe-item v-for="item in arr_top" class="Carousel1">
	  	<router-link to="">
	  		<img v-lazy.container="item.pic"/>
	  	</router-link>  	
	  </mt-swipe-item>
	</mt-swipe>
	<carousel-list1></carousel-list1>
	<carousel-list2></carousel-list2>
	<carousel-list3></carousel-list3>
<!--<common-list></common-list>
<list-main></list-main>-->
</main>
</template>

<script>
	import axios from 'axios';
import Carousel_list1 from '@/components/Carousel_list1'
 import Carousel_list2 from '@/components/Carousel_list2'
 import Carousel_list3 from '@/components/Carousel_list3'
  
export default {
  name: 'commom-carousel',
  data () {
    return {
      		arr_top: []
    }
  },
   components: {
'carousel-list1' : Carousel_list1,
'carousel-list2' : Carousel_list2,
'carousel-list3' : Carousel_list3
  },
    mounted () {
			axios.get('/api/home/index')
	.then((response) => {
//		console.log(response);
		this.arr_top = response.data.data.ad.items;
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
     .Carousel{
     	display:flex;width:100%;height:180px;
     	.Carousel1{
     		display:flex;width:100%;height:180px;
     		a{
     			display:flex;width:100%;height:180px;
     			img{width:100%;height:180px;}
     		} 
     	}
     .mint-swipe-items-wrap {
     	 position: relative;overflow: hidden;
          height: 100%;width: 100%;
		}	
     }
     
</style>

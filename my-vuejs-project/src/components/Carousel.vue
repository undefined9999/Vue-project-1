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
	<carousel-list4></carousel-list4>
	<carousel-list5></carousel-list5>
	<carousel-list6></carousel-list6>
	<carousel-list7></carousel-list7>
			<aside>
				<p class="iconfont icon-QQ"></p>
				<p class="iconfont icon-icon-test-copy"></p>
			</aside>
</main>
</template>

<script>
	import axios from 'axios';
import Carousel_list1 from '@/components/Carousel_list1'
 import Carousel_list2 from '@/components/Carousel_list2'
 import Carousel_list3 from '@/components/Carousel_list3'
  import Carousel_list4 from '@/components/Carousel_list4'
  import Carousel_list5 from '@/components/Carousel_list5'
  import Carousel_list6 from '@/components/Carousel_list6'
    import Carousel_list7 from '@/components/Carousel_list7'
  
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
'carousel-list3' : Carousel_list3,
'carousel-list4' : Carousel_list4,
'carousel-list5' : Carousel_list5,
'carousel-list6' : Carousel_list6,
'carousel-list7' : Carousel_list7
  },
    mounted () {
			axios.get('/api/home/index')
	.then((response) => {
//		console.log(response);
		this.arr_top = response.data.data.ad.items;
//		console.log(this.arr_top)
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
     main{flex: 1;background:#eee;overflow-y: auto;flex-direction: column;}
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
     aside{
            p:nth-of-type(1){
                position: fixed; bottom: 1rem; font-size: 0.45rem; right: 0.1rem; color: #0086B3;
            }
            p:nth-of-type(2){
                position: fixed; bottom: 0.6rem; font-size: 0.4rem; right: 0.13rem; color: #DF5000;
            }
        }
</style>

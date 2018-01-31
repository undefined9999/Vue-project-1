<template>
	<div class="hotList">
        <div class="hotContent">
            <div class="item" v-for="item in arr_top">
                   <router-link to="">
                   	<img v-lazy.container="item.index_img" alt="" />
                   	 <div class="text ellips">
                   	 	{{item.name}}
                   	 </div>
                   </router-link>                 
                </div>
        </div>
</div>
</template>

<script>
	import axios from 'axios';
 
export default {
  name: 'carousel-list1',
  data () {
    return {
      		arr_top: []
    }
  },
   components: {

  },
    mounted () {
			axios.get('/api/home/index')
	.then((response) => {
//		console.log(response);
		this.arr_top = response.data.data.lively1;
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
 .hotList {
    width: 100%;background-color: #fff;height: 104px;
  display:flex;align-items: center;
    overflow: hidden;
   .hotContent {
		    width: 100%;height:100%;overflow-x: scroll;
		    white-space: nowrap;font-size: 0;
		      .item {
				    display: inline-block;
				    padding-top:10px;
				    width: 83px;height: 83px;
				    margin-right: .25rem;
				    position: relative;	    
				    img {
						    display: block;
						    width: 83px;
						    height: 83px;
						    border-radius: 5px;
						    position: absolute;
						    bottom: 0;
						    z-index: 1;
						}
					 .text {
				    position: absolute;
				    left: 0;bottom: 0;
				    font-size: 12px;width: 100%;
				  padding:2px 0;
				    text-align: center;
				    background: rgba(0,0,0,.5);
				    color: #fff;z-index: 6;
				    border-bottom-left-radius: 5px;
				    border-bottom-right-radius: 5px;			 
				  }
				}
		}
}
</style>

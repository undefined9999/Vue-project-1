<template>
	<div id="xinpin">
 <div class="index-pdt ui-box" v-for="ite in arr_top">
 	   <div class="box-hd mui-clearfix">
                    <div class="tit fl">
                    	<i class="iconfont icon-fenlei">
                    		
                    	</i>{{ite.wap_name}}</div>
                    <router-link to="" class="more fr" >更多+</router-link>
                </div>
 	     <ul class="plist mui-row">
 	     	<li class="mui-col-xs-6" v-for="item in arr_top1">
 	     		<router-link to="">
 	     			<div class="figure">
 	     				<img v-lazy.container="item.items.img" alt="" />
 	     			</div>
 	     			                      
                            <div class="cnt">
                                <div class="name">{{item.items.title}}</div>
                                <div class="bottom">
                                    <div class="price">￥{{item.items.price}}</div>
                   
                                </div>
                            </div>
 	     		</router-link>
 	     	</li>
 	     </ul>
 </div>
 </div>
</template>

<script>
	import axios from 'axios';
  
export default {
  name: 'carousel-list3',
  data () {
    return {
      		arr_top: [],
      		arr_top1:[],
      		arr_top2:[],
      		arr_top3:[],
      		arr_top4:[]
    }
  },
   components: {
// "common-list" : List,
// "list-main" : List2
  },
    mounted () {
			axios.get('/api/home/index')
	.then((response) => {
		console.log(response);
		this.arr_top = response.data.data.floor;
		this.arr_top1=response.data.data.floor[0].attribute;
		this.arr_top2 = response.data.data.floor[0].attribute;
		console.log(this.arr_top)
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
      #xinpin{
      	display: flex; flex-direction: column; width: 100%; height: 100%;
      }
  .index-pdt {
    margin-bottom: 10px;width:100%;height:585px;
}
.ui-box {
    position: relative;
    background-color: #fff;
}
.box-hd{
	width:100%;height:43px;
}
.plist{
	width:100%;height:542px;display:flex;flex-wrap: wrap;
	li{
		width:50%;height:258px;display:flex;flex-wrap: wrap;
		img{
			width:100%;height:173px;
		}
	}
}
</style>

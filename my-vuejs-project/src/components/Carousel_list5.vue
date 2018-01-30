<template>
  <div class="index-category ui-box">
  	       <div class="box-hd mui-clearfix">
            <div class="tit fl">
            	<i class="iconfont icon-fenlei"></i>
            	评论列表
            </div>
            <router-link to="" class="more fr" >
	                    	更多+
	        </router-link>
        </div>
         <div class="ui-border-t">
         	<div class="evaluate-list ui-list">
         		<div class="item" v-for="ite in arr_top">
                    <div class="figure-box">
                        <div class="figure">
                        	<router-link to="">
                        		<img :src="ite.items.img" alt="" />
                        	</router-link>
                    		</div>
            				</div>
                    <div class="flex-col cnt">
                        <div class="name">
                        	<router-link to="">
                        		{{ite.items.title}}
                        	</router-link>
                        </div>
                        <div class="info">
                            <div class="ui-star value-4">
                                <div class="inner"></div>
                            </div>
                            <div class="time">
                            	2018-01-29 09:19:14
                            </div>
                        </div>
                        <div class="post">
													{{ite.content}}                        
                        </div>
                    </div>
                </div>
         	 </div>
         </div>
  </div>
</template>

<script>
	import axios from 'axios';
  
export default {
  name: 'carousel-list5',
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
		this.arr_top = response.data.data.comments.data;
//		console.log(this.arr_top)
//		console.log()
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
 .ui-box {
    margin: 10px 0;background-color: #fff;
}
.box-hd{
	width:100%;height:43px;padding:0 10px;line-height:43px;
	 .tit{
	 	color:#444;font-size:15px;
	 }
	 .more{
	 	font-size:12px;color:#ca0e25;
	 }
}
.ui-list{
  padding:0 10px;background:#fff;
   .item{
    border:0;color:#666;padding:12px 0;display:flex;
    justify-content:space-bwtten;
     .figure{
      width:60px;border:1px solid #d7d7d7;
      img{
        width:100%;
      }
     }
   }
}
.cnt{
	width:100%;padding-left:5px;
	a{
		font-size: 13px !important;
	}
}
.info{
	display:flex;align-items: center;justify-content: space-between;
	height:20px;
	.ui-star{
		background:url(http://www.dinghuapai.cn/wap/img/star2.png) no-repeat left top;width:64px;height:10px;background-size: auto 100%;
		.inner{
			width:50px;background:url(http://www.dinghuapai.cn/wap/img/star1.png) no-repeat left top;height:100%;background-size: auto 100%;
		}
	}
	.time{
		color:#c0c0c0;font-size: 12px;box-sizing: border-box;
	}
}
</style>

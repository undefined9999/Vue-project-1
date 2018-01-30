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
                        		青春不散/19枝红玫瑰
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
		console.log(response);
		this.arr_top = response.data.data.comments.data;
		console.log(this.arr_top)
		console.log()
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
</style>

<template>
<div class="wap-footer ui-box">
	<div class="bar">
        <router-link class="item" to="">登录</router-link>
        <router-link class="item" to="">注册</router-link>
        <router-link class="item" to="">购物车</router-link>
        <button class="item"  @click="top()">返回顶部</button>
 	</div>
	    <div class="hotline ui-border-t">
            <i class="iconfont icon-dianhua"></i> 24小时订花热线：
            <span class="tel">{{arr_top.plane}}</span>
	    </div>
		    <div class="ft ui-border-t">
	            <div class="links">
	                <router-link to="">关于订花派</router-link>
	                <router-link to="">订单查询</router-link>
	                <router-link to="">在线补款</router-link>
	                <router-link to="">客服</router-link>
	            </div>
		    </div>
    			<div class="ft ui-border-t">
		            <div class="links">
		                <a href="http://www.dinghuapai.cn/?type=pc">电脑版</a>
		                <span>|</span>
		                <a href="http://www.dinghuapai.cn/?type=wap">触屏版</a>
		            </div>
		            <div class="copyright">Copyright© 2009-2017 订花派 版权所有</div>
		        </div>
</div>
</template>

<script>
	import axios from 'axios';
  
	export default {
	  name: 'carousel-list7',
	  data () {
	    return {
	      		arr_top: []
	    }
	  },
	   components: {
	
	  },
	  methods:{
	  	top : function(){
	  		 $("main").animate({scrollTop:0}, 500);
	  	}
	  },
	    mounted () {
			axios.get('/api/home/index')
			.then((response) => {
		//		console.log(response);
				this.arr_top = response.data.data;
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
.wap-footer {
    font-size: 14px;color: #666;background:#fff;
    .bar{
    	display:flex;overflow:hidden;
    	.item{
    		display: flex;height:39px;margin: 0 -1px 0 1px;
    		justify-content: center;align-items: center;
    		width:25%;border:1px solid #eee;background:#fff;
    	}
    }
}
.hotline {
    padding: 10px 0 9px;
    line-height: 24px;
    text-align: center;
    border-bottom: 1px solid #eee;
}
 .ft {
    padding: 16px 0;
    font-size: 13px;
    line-height: 20px;
    color: #666;border-bottom: 1px solid #eee;
		 .links {
			    font-size: 0;
			    text-align: center;display: flex;flex-wrap: nowrap;
			    justify-content:center;
			    a{
			    	padding:0 5px;font-size:10px;
			    	width:20%;border-right:1px solid #000 ;
			    }
			    a:last-child{
			    	border:0;
			    }
			}
}
.copyright{
	text-align: center;padding-top:2px;
}
</style>

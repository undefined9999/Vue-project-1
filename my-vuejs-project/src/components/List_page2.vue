<template>
	<div class="page2">
		<header>
			<div class="left_">
				&lt;
			</div>
			<div class="top">
				<span class="iconfont icon-fangdajing">
				</span>
				<input type="text" name="" id="" value="请输入关键字" placeholder="请输入关键字"/>
			</div>
			<div class="dao_hang">	
				导航
			</div>
		</header>
		<section>
			<div class="main_top">
				<p>
					当前分类&nbsp;:&nbsp;{{hua.name}}
				</p>
				<p>
					已选择&nbsp;:&nbsp;{{lei.name}} 
				</p>
			</div>
			<div class="main_mid">
				<p>
					<a href="javascript:;" class="list_1" @click="into_mast()" style="background: #ca0e25; color: #fff;">
						默认
					</a>
					<a href="javascript:;" class="list_1" @click="into_mast()">
						价格
						<span class="iconfont icon-jiantou"></span>
					</a>
					<a href="javascript:;" class="list_1" @click="into_mast()">
						销量
						<span class="iconfont icon-jiantou"></span>
					</a>
					<a href="javascript:;" class="list_1" @click="into_mast()">
						最新
						<span class="iconfont icon-jiantou"></span>
					</a>
					<a href="javascript:;" class="list_1" @click="into_mast()">
						鲜花分类
						<span class="iconfont icon-funnel">
							
						</span>
					</a>
				</p>	
			</div>
			

			<div class="main_bot" id="container">
				<!--向上加载更多-->
				<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul>
					<li v-for="item in list">
						<a href="javascript:;">
							<img :src="item.img" v-lazy.container="item.img"/>
							<p>{{item.title}}</p>
							<p>￥{{item.price}}</p>
						</a>
					</li>
				</ul>
				</mt-loadmore>
			</div>
			<aside>
				<p class="iconfont icon-QQ"></p>
				<p class="iconfont icon-icon-test-copy"></p>
			</aside>
		</section>
	</div>
</template>



<script>
	
var rempx = document.documentElement.clientWidth / 4.2;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";	
	
import axios from 'axios';
export default {
	name: "List-page2",
	data: function() {
		return {
			 hua : "",
			 lei : "",
			 list : [],
			 allLoaded: false
		}
		
	},
	mounted() {
		axios.get("/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=1023_123&sort=")
		.then((res)=>{
			console.log(res)
			this.hua = res.data.data.category;
			this.lei = res.data.data.selected;
			this.list = res.data.data.goodsList.data
		})
	},
	methods: {
		//  向上加载更多
	    loadTop() {
	      console.log("loadTop");
	      setTimeout(() => {
	        Toast('数据重新加载完成');
	        this.$refs.loadmore.onTopLoaded();
	      }, 3000)
	    },
	    loadBottom() {
	      
	    },
	    into_mast () {
			$(".list_1").click(function(){
				$(this).css("background","#ca0e25").siblings().css("background","#f4f4f4")
				$(this).css("color","#fff").siblings().css("color","#666")
			})
	    }
  }

}


</script>




<style scoped lang="scss">
	@import '../assets/css/List_page2.scss';
</style>
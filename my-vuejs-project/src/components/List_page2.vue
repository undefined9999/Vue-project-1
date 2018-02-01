<template>
	<div class="page2">
		<!--遮罩层-->
		<div class="loadingDiv" v-if="loading"></div>
		<!--header-->
		<header>
			<router-link to="/list1" class="left_">
				&lt;
			</router-link>
			<div class="top">
				<span class="iconfont icon-fangdajing">
				</span>
				<input type="text" name="" id="" value="请输入关键字" placeholder="请输入关键字"/>
			</div>
			<a class="dao_hang">	
				导航
			</a>
		</header>
		<section>
			<div class="main_top">
				<p>
					当前分类&nbsp;:&nbsp;{{hua.name}}
				</p>
				<p>
					已选择&nbsp;:&nbsp;
					<a>
						{{$store.state.huaname[0]}}x
					</a>	
				</p>
			</div>
			<div class="main_mid">
				<p>
					<a href="javascript:;" class="list_1" @click="into_mast1()" style="background: #ca0e25; color: #fff;">
						默认
					</a>
					<a href="javascript:;" class="list_1" @click="into_mast2()">
						价格
						<span class="iconfont icon-jiantou"></span>
					</a>
					<a href="javascript:;" class="list_1" @click="into_mast3()">
						销量
						<span class="iconfont icon-jiantou"></span>
					</a>
					<a href="javascript:;" class="list_1" @click="into_mast4()">
						最新
						<span class="iconfont icon-jiantou"></span>
					</a>
					<a href="javascript:;" class="list_1"  @click="hideMenu()">
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
						<router-link to="/deatail1">
							<img :src="item.img" v-lazy.container="item.img"/>
							<p>{{item.title}}</p>
							<p>￥{{item.price}}</p>
						</router-link>
					</li>
				</ul>
				<!--    下拉加载更多      -->
				<infinite-loading @infinite="infiniteHandler"></infinite-loading>  
				</mt-loadmore>
			</div>
			<aside>
				<p class="iconfont icon-QQ"></p>
				<p class="iconfont icon-icon-test-copy"></p>
			</aside>
			<nav class="menu" :class="{show: showFlag}" @click.self="hideMenu()">
				<div class="list_tit">					
					<div class="tit_top">
						<p>筛选</p>
					</div>
					<div class="tit_main">
						<div class="main_list" v-for="item in items">
							<p>
								{{item.name}}
							</p>
							<span>
								全部
							</span>
							<span v-for="ite in item.attr_vaues">
								{{ite.name}}
							</span>
						</div>	
					</div>	
				</div>
			</nav>
		</section>
	</div>
</template>



<script>
	
var rempx = document.documentElement.clientWidth / 4.2;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";	

import { Indicator } from 'mint-ui'; // 加载中
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';

export default {
	name: "List-page2",
	data: function() {
		return {
			 hua : "",
			 lei : "",
			 list : [],
			 allLoaded: false,
			 items : [],
			 list_l : [],
			 itemss : [],
			 showFlag : false,
			 tiao : "",
			 loading : false
		}
		
	},
	components: {
   		 InfiniteLoading,
 	 },
	methods: {
	//  向下加载更多
	    infiniteHandler($state) {
	      setTimeout(() => {
	    	this.getData();
	        $state.loaded();
	      }, 1000);
	    },
	    getData() {
	    	var Attr_id = this.$route.params.Attr_id;
			var Id = this.$route.params.Id;
			var tiao = this.tiao;
			axios.get(`/api/product/goods-list?state=goodsList&page=${this.page ++}&cid=1029&filter=${Attr_id}_${Id}&sort=${tiao}`).then((response) => {
				var len = response.data.data.goodsList.data.length;
				for(var i = 0;i<len;i++){
					this.list.push(response.data.data.goodsList.data[i])
				}	
			
			})		
		},
		dian_dian(loading) {
			this.loading = true;
	 		Indicator.open({
	 			text : "",
	 			spinnerType : "triple-bounce"
	 		})
		},
		//   默认列表
		into_mast1() {
			this.dian_dian();
//			console.log(tiao)
			this.tiao = 'def-desc';
			setTimeout(()=>{
				this.tiao1(this.tiao)
			})
			$(".list_1").click(function(){
				$(this).css("background","#ca0e25").siblings().css("background","#f4f4f4")
				$(this).css("color","#fff").siblings().css("color","#666")
			})
			
		},
		tiao1(tiao){
			var Attr_id = this.$route.params.Attr_id;
			var Id = this.$route.params.Id;
			axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Attr_id}_${Id}&sort=${tiao}`)
			.then((res)=>{
//				console.log(res)
				this.hua = res.data.data.category;
				this.lei = res.data.data.selected;
				this.list = res.data.data.goodsList.data;
				this.items = res.data.data.attulist;
				this.loading = false;
				Indicator.close();
			})	
		},
		//  价格列表
		into_mast2() {
			this.dian_dian();
//			console.log(tiao)
			this.tiao = 'price-asc'
			setTimeout(()=>{
				console.log(this)
				this.tiao2(this.tiao)			
			},10)
			$(".list_1").click(function(){
				$(this).css("background","#ca0e25").siblings().css("background","#f4f4f4")
				$(this).css("color","#fff").siblings().css("color","#666")
			})		
		},
		tiao2(tiao){
			var Attr_id = this.$route.params.Attr_id;
			var Id = this.$route.params.Id;
			axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Attr_id}_${Id}&sort=${tiao}`)
			.then((res)=>{
				console.log(res)
				this.hua = res.data.data.category;
				this.lei = res.data.data.selected;
				this.list = res.data.data.goodsList.data;
				this.items = res.data.data.attulist;
				this.loading = false;
				Indicator.close();
			})
		},
		//  销量列表
		into_mast3() {
			this.dian_dian();
//			console.log(tiao)
			this.tiao = 'sale-desc'
			setTimeout(()=>{
				this.tiao3(this.tiao)
			})
			this.$nextTick(function(){
				$(".list_1").click(function(){
					$(this).css("background","#ca0e25").siblings().css("background","#f4f4f4")
					$(this).css("color","#fff").siblings().css("color","#666")
				})	
			})	
		},
		tiao3 (tiao){
			var Attr_id = this.$route.params.Attr_id;
			var Id = this.$route.params.Id;
			axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Attr_id}_${Id}&sort=${tiao}`)
			.then((res)=>{
	//				console.log(res)
				this.hua = res.data.data.category;
				this.lei = res.data.data.selected;
				this.list = res.data.data.goodsList.data;
				this.items = res.data.data.attulist;
				this.loading = false;
				Indicator.close();
			})
		},
		//  最新列表
		into_mast4() {
			this.dian_dian();
//			console.log(tiao)
			this.tiao = 'new-desc'
			setTimeout(()=>{
				this.tiao4(this.tiao)
			})
			this.$nextTick(function(){		
				$(".list_1").click(function(){
					$(this).css("background","#ca0e25").siblings().css("background","#f4f4f4")
					$(this).css("color","#fff").siblings().css("color","#666")
				})
			})	
		},
		tiao4 (tiao){
			var Attr_id = this.$route.params.Attr_id;
			var Id = this.$route.params.Id;
			axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Attr_id}_${Id}&sort=${tiao}`)
			.then((res)=>{
//				console.log(res)
				this.hua = res.data.data.category;
				this.lei = res.data.data.selected;
				this.list = res.data.data.goodsList.data;
				this.items = res.data.data.attulist;
				this.loading = false;
				Indicator.close();
			})	
		},
		//  向上加载更多
	    loadTop() {
	      console.log("loadTop");
	      setTimeout(() => {
	        Toast('数据重新加载完成');
	        this.$refs.loadmore.onTopLoaded();
	      }, 3000)
	    },
	    loadBottom() {
	       // 占位效果，使其不报错
	    },
	    hideMenu () {
			this.showFlag = !this.showFlag;			
		}
 	},
 	beforeMount() {
 		this.loading = true;
 		Indicator.open({
 			text : "",
 			spinnerType : "triple-bounce"
 		})
 	},
	mounted() {
		var Attr_id = this.$route.params.Attr_id;
		var Id = this.$route.params.Id;
		axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Attr_id}_${Id}&sort=`)
		.then((res)=>{
//			console.log(res)
			this.hua = res.data.data.category;
			this.lei = res.data.data.selected;
			this.list = res.data.data.goodsList.data;
			this.items = res.data.data.attulist;
			this.loading = false;
			Indicator.close();
		}),
		axios.get("/api/product/category")
		.then((res)=>{
//			console.log(res)
			this.itemss = res.data.data.label;
			this.loading = false;
			Indicator.close();
		})
	},

}


</script>




<style scoped lang="scss">
	@import '../assets/css/List_page2.scss';
</style>
<template>
	<div class="page1">
		<div class="loadingDiv" v-if="loading"></div>
		<header>
			<div class="top">
				<span class="iconfont icon-fangdajing">
				</span>
				<input type="text" name="" id="" value="请输入关键字" placeholder="请输入关键字"/>
			</div>
			<a class="iconfont icon-gouwuche">	
			</a>
		</header>
		<section>
			<div class="sec_top">
				<ul>
					<li v-for="item in list">
						<router-link to="/list2">
							<p><img :src="item.img"/></p>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="sec_list">
				<div class="list_left" v-if="items">
					<ul>
						<li class="tiao_1" @click="height_tiao1">
							{{items[0].name}}
						</li>
						<li class="tiao_2" @click="height_tiao2">
							{{items[1].name}}
						</li>
						<li class="tiao_3" @click="height_tiao3">
							{{items[2].name}}
						</li>
						<li class="tiao_4" @click="height_tiao4">
							{{items[3].name}}
						</li>
						<li class="tiao_5" @click="height_tiao5">
							{{items[4].name}}
						</li>
						<li class="tiao_6" @click="height_tiao6">
							{{items[5].name}}
						</li>
						<li class="tiao_7" @click="height_tiao7">
							{{items[6].name}}
						</li>
						<li class="tiao_8" @click="height_tiao8">
							{{items[7].name}}
						</li>
					</ul>
				</div>
				<div class="list_right">
					<div v-for="item in items" class="list_rig">
						<h2>
							{{item.name}}
						</h2>
						<div>						
							<ul>								
								<li v-for="ite in item.values" >
									<router-link :to="{name : 'List2' , params : {Attr_id : ite.attr_id,Id : ite.id}}">
										<span></span>
										<span @click="huaName(ite.name)">{{ite.name}}</span>
										<img v-lazy="ite.img" :src="ite.img" @click="huaName(ite.name)"/>
									</router-link>
								</li>
							</ul>
						</div>	
					</div>
				</div>
			</div>
			
			<aside>
				<p class="iconfont icon-QQ"></p>
				<p class="iconfont icon-icon-test-copy"></p>
			</aside>
		</section>
		<common-footer></common-footer>
	</div>
</template>



<script>
	
import { Indicator } from 'mint-ui'; // 加载中
import Footer from '@/components/Footer'
var rempx = document.documentElement.clientWidth / 4.2;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";	
	
import axios from 'axios';
export default {
	name: "list-page1",
	data: function() {
		return {
			items : null,
			list : [],
			loading : false
		}
	},
	 components: {
      'common-footer' : Footer 
  	},
  	beforeMount() {
		this.loading = true;
		Indicator.open({
			text :'',
			spinnerType:'triple-bounce' //  设置圈圈类型triple-bounce
		})
	},	
  	methods : {
  		// vuex数据管理
  		huaName(ite){
  			this.$store.dispatch("huaNameA", ite);
  			console.log(ite)
  		},
  		// 列表scrolltop事件
		height_tiao1(){
			this.$nextTick(function(){
				$(".tiao_1").click(function(){					
					$(".list_right").animate({"scrollTop":0},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		},
		height_tiao2(){
			this.$nextTick(function(){
				$(".tiao_2").click(function(){					
					$(".list_right").animate({"scrollTop":105},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		},
		height_tiao3(){
			this.$nextTick(function(){
				$(".tiao_3").click(function(){					
					$(".list_right").animate({"scrollTop":250},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		},
		height_tiao4(){
			this.$nextTick(function(){
				$(".tiao_4").click(function(){					
					$(".list_right").animate({"scrollTop":720},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		},
		height_tiao5(){
			this.$nextTick(function(){
				$(".tiao_5").click(function(){					
					$(".list_right").animate({"scrollTop":1200},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		},
		height_tiao6(){
			this.$nextTick(function(){
				$(".tiao_6").click(function(){					
					$(".list_right").animate({"scrollTop":1800},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		},
		height_tiao7(){
			this.$nextTick(function(){
				$(".tiao_7").click(function(){					
					$(".list_right").animate({"scrollTop":2300},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		},
		height_tiao8(){
			this.$nextTick(function(){
				$(".tiao_8").click(function(){					
					$(".list_right").animate({"scrollTop":1000},0)
					$(this).css({"background":"#fff","border-left":"3px solid #ca0e25","color":"#ca0e25"}).siblings().css({"background":"#f4f4f4","border-left":"none","color":"#000"})
				})
			})	
		}		
	},
	mounted() {
		$("#foot li:nth-of-type(2) a").css("color","#ca0e25");
		axios.get("/api/product/category")
		.then((res)=>{
//			console.log(res)
			this.items = res.data.data.label;
			this.list = res.data.data.category;
			this.loading = false;
			Indicator.close();  //  dom元素加载完成后圈圈消失
		})
	},
	
}
</script>




<style scoped lang="scss">
	@import '../assets/css/list_page1.scss';
</style>
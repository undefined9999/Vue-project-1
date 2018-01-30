<template>
	<div class="page1">
		<header>
			<div class="top">
				<span class="iconfont icon-fangdajing">
				</span>
				<input type="text" name="" id="" value="请输入关键字" placeholder="请输入关键字"/>
			</div>
			<div class="iconfont icon-gouwuche">	
			</div>
		</header>
		<section>
			<div class="sec_top">
				<ul>
					<li v-for="item in list">
						<a href="javascript:;">
							<p><img :src="item.img"/></p>
							<p>{{item.name}}</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="sec_list">
				<div class="list_left">
					<ul v-for="item in items">
						<li @click="color_change()">
							{{item.name}}
						</li>
					</ul>
				</div>
				<div class="list_right">
					<div v-for="item in items" class="list_rig">
						<h2>
							{{item.name}}
						</h2>
						<div>
							<a href="javascript:;">
								<ul>
									<li v-for="ite in item.values">
										<span></span>
										<span>{{ite.name}}</span>
										<img v-lazy="ite.img" :src="ite.img"/>
									</li>
								</ul>
							</a>
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
	import Footer from '@/components/Footer'
var rempx = document.documentElement.clientWidth / 4.2;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";	
	
import axios from 'axios';
export default {
	name: "list-page1",
	data: function() {
		return {
			items : [],
			list : []	
		}
	},
	 components: {
      'common-footer' : Footer
  },
	mounted() {
		$("#foot li:nth-of-type(2) a").css("color","#ca0e25");
		axios.get("/api/product/category")
		.then((res)=>{
			console.log(res)
			this.items = res.data.data.label;
			this.list = res.data.data.category;
		})
	},
	methods : {
		color_change (){
			this.style.color = "red"
		}
	}
}
</script>




<style scoped lang="scss">
	@import '../assets/css/list_page1.scss';
</style>
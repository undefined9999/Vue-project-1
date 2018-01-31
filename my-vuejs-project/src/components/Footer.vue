<template>
	<footer>
		<ul id="foot">
			<li>
				<router-link to="/index">
					<i class="iconfont icon-shouye"></i>
					<span>首页 </span>
				</router-link>
			</li>
			<li>
				<router-link to="/list1">
					<i class="iconfont icon-fenlei"></i>
					<span>分类</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<i class="iconfont icon-iconset0316"></i>
					<span>购物车</span>
				</router-link>
			</li>
			<li @click="myur()">
				<router-link to="" >
					<i class="iconfont icon-home"></i>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
import axios from 'axios';
export default {
	name: "common-footer",
	data: function() {
		return {
			 detail:true,
			 url : ''
		}
	},
	methods:{
		myur(){
			var that = this;
			//console.log(this.$store.state.username.length)
			if(this.$store.state.username.length){
				that.$router.push({path : "/login-suss"});
			}else{
				that.$router.push({path : "/login"});
			}
		}
	},
	mounted() {
 		
	}
}
</script>

<style scoped lang="scss">
	footer{
		display:flex;background:#fff;width:100%;height:44px;box-shadow: 1px 1px 3px rgba(0,0,0,.3);
		 ul{
		 	display: flex;justify-content: space-around;height:100%;width:100%;
			li{
				display:flex;justify-content: space-around;width:25%;
				height:100%;
				a{
					display:flex;height:40px;
					justify-content: space-around;
					flex-direction: column;
					align-items: center;
					i{
						padding-bottom:3px;font-size:20px;
					}
				}
				
			}
		 }
	}
</style>
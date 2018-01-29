<template>
	<div class="page1">
		<header>
			<div class="top">
				<span class="iconfont icon-fangdajing">
				</span>
				<input type="text" name="" id="" value="请输入关键字" placeholder="请输入关键字"/>
			</div>
			<div class="iconfont icon-iconset0316">	
			</div>
		</header>
		<section></section>
		<footer></footer>
	</div>
</template>

<script>
var rempx = document.documentElement.clientWidth / 4.2;
		document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";	
	
import axios from 'axios';
export default {
	name: "list-page1",
	data: function() {
		return {
			items : []
		}
	},
	mounted() {
		axios.get("/api/product/category")
		.then((res)=>{
			console.log(res)
			this.items = res.data.data.label;
		})
	}
}
</script>

<style scoped lang="scss">
	@import '../assets/css/list_page1.scss';
</style>
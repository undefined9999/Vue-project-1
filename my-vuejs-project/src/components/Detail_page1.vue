<template>
	<div class="detail">
		<div class="mui-bar detail-action-bar">
			<div class="info">
				合计：
				<span id="count-price" class="price">243</span>
				元
			</div>
			<span class="btn warning">加入购物车</span>
			<a href="javascript:;" class="btn primary">立即购买</a>
		</div>
		<div class="mui-content">
			<div class="banner-out detail-focus" style="margin: 0;">
				<div class="banner-box">
					 <mt-swipe :auto="4000">
				      <mt-swipe-item v-for="item in list">
				        <img :src="item" />				       
				      </mt-swipe-item>
				    </mt-swipe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: "Detail-page1",
	data: function() {
		return {
			 list: [
		        "images/2017/09/01/1504261692885708.jpeg",
		        "images/2017/09/01/1504261712532219.jpeg",
		        "images/2017/09/01/1504261720228935.jpeg",
		        "images/2017/09/01/1504261730746959.jpeg",
		        "images/2017/09/01/1504261742470802.jpeg",
		        "images/2017/09/01/1504261754425910.jpeg",
		        "images/2017/09/01/1504261659377129.jpeg"
      		]
		}
	},
	mounted() {
	
	}
}
</script>
<script type="text/javascript">
		var rempx = document.documentElement.clientWidth / 4.2;
		document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
</script>
<style scoped lang="scss">
	.detail-action-bar {
    display: flex;
    padding: 0;
    bottom: 0;
    height: 0.46rem;
    line-height: 0.46rem;
    background-color: #fff;
    width: 100%;
}
.mui-bar {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
    height: 0.5rem;
    padding-right: 0.1rem;
    padding-left: 0.1rem;
    background-color: #f7f7f7;
    border-bottom: 0;
    backface-visibility: hidden;
}
.detail-action-bar .info {
    display: block;
    width: .1px;
    flex: 1;
    padding: 0 0.1rem;
    font-size: 0.14rem;
    color: #444;
}
.detail-action-bar .info .price {
    margin-right: 0.05rem;
    font-size: 0.18rem;
    color: #f00909;
}
.detail-action-bar .btn.warning {
    background-color: #ff9500 !important;
}
.detail-action-bar .btn {
    position: relative;
    z-index: 2;
    display: block;
    width: 30%;
    padding: 0;
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 0.14rem;
}
.detail-action-bar .btn.primary {
    background-color: #ca0e25 !important;
}
.detail-action-bar .btn {
    position: relative;
    z-index: 2;
    display: block;
    width: 30%;
    padding: 0;
    margin: 0;
    color: #fff;
    text-align: center;
    font-size:0.14rem;
}
.detail-action-bar~.mui-content {
    padding-bottom: 0.46rem;
}
.mui-bar-nav ~ .mui-content {
    padding-top: 0.5rem;
}
.banner-out {
    width: 100%;
    height: 12rem;
}
.banner-box {
    position: fixed;
    top: 0.6rem;
    left: 0;
    right: 0;
}
</style>
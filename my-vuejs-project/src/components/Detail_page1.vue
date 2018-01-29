<template>
	<div class="detail">
		<div class="mui-bar detail-action-bar">
			<div class="info">
				合计：
				<span id="count-price" class="price">243</span> 元
			</div>
			<span class="btn warning">加入购物车</span>
			<a href="javascript:;" class="btn primary">立即购买</a>
		</div>
		<div class="mui-content">
			<!--banner-->
			<div class="banner-out detail-focus" style="margin: 0;">
				<div class="banner-box">
					<mt-swipe :auto="4000">
						<mt-swipe-item v-for="item in list">
							<img :src="item" style="width: 100%;height: 100%;" />
						</mt-swipe-item>
					</mt-swipe>
				</div>
			</div>
			<!--scroll-out-->
			<div class="scroll-out">
				<div class="ui-box detail-focus">
					<div class="basic-info ui-border-t">
						<div class="mui-clearfix" style="height: 0.3rem;">
							<div class="ptit fl">岁月静好/19朵粉玫瑰</div>
							<div class="info-row fr">
								编号:
								<span>12396</span>
							</div>
						</div>
						<div class="basic-info-out">
							<div class="hd">
								<div class="rbox">
									<div class="price">
										<span style="color: #333;display: inline-block;width: 0.57rem;font-size: 0.14rem;">
											<span>订花派价</span>
										</span>
										<span class="num" id="itemprice">￥243</span>
									</div>
									<span class="only-moblie">手机专享价</span>
									<span style="display:inline-block;line-height:26px;font-size:10px;margin-left:3px;vertical-align:middle;color:#f00909;">
										已省
										<span>5</span> 元
									</span>
								</div>
							</div>
						</div>
					</div>
					<!--detail-discount-->
					<div class="ui-box detail-discount">
						<div class="item">
							<span class="label">优惠满减</span> 满199减5元，满399减15元，满599减30元
						</div>
					</div>
					<!--detail-value-->
					<div class="ui-box detail-value">
						<div class="key">数量：</div>
						<div class="cnt flex-col">
							<div class="mui-numbox" data-numbox-min="1" data-numbox-max="30">
								<button class="mui-btn mui-btn-numbox-minus" type="button" disabled style="width: 0.3rem;">
									<i class="iconfont icon-reduce">-</i>
								</button>
								<input type="number" value="1" class="mui-input-numbox" disabled style="float: left;" />
								<button class="mui-btn mui-btn-numbox-plus" type="button" style="float: right;width: 0.3rem;">
									<i class="iconfont icon-plug">+</i>
								</button>
							</div>
						</div>
					</div>
					<!--detail-tabs-box-->
					<div class="detail-tabs-box">
						<div class="detail-tabs swiper-pagination-clickable swiper-pagination-bullets">
							<span class="item swriper-pagination-bullet swiper-pagination-bullet-active">
								商品详情
								<i></i>
							</span>
							<span class="item swriper-pagination-bullet ">
								用户评价
								<i></i>
							</span>
							<span class="item swriper-pagination-bullet ">
								鲜花问答
								<i></i>
							</span>
						</div>
						<!--ui-border-b-->
						<div class="detail-desc ui-border-b">
							<div class="detail-stand">
								<div class="item">
									<div class="k">材料</div>
									<div class="v">19朵粉玫瑰，桔梗，尤加利</div>
								</div>
								<div class="item">
									<div class="k">包装</div>
									<div class="v">粉色韩式包装</div>
								</div>
								<div class="item">
									<div class="k">花语</div>
									<div class="v">一种圆润不腻耳的音乐，一种淡定深厚的从容，一种无怨无悔不求回报的大气，一种不会喧闹永远温馨的的微笑，一种洗刷了偏激的淡泊，一种无需声张的厚实，一种并不陡峭却高不可攀的高度。</div>
								</div>
								<div class="item">
									<div class="k">附送</div>
									<div class="v">免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)</div>
								</div>
								<div class="item">
									<div class="k">配送</div>
									<div class="v">全国（可配送至全国1000多城市，市区免配送费）</div>
								</div>
							</div>
							<!--pics-->
							<div class="pics">
								<div class="swiper-slide">
									<div id="app_images" v-html="app_imgs">
											
									</div>
									<div style="width: 100%;">
									<img :src ="item"  v-for="item in add_img1" style="width: 100%;height: 100%;"/>
									</div>
									
								</div>
							</div>
						</div>
						<!--ui-box-rec-->
						<div class="ui-box ui-box-rec">
							
						</div>
						
						
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script type="text/javascript" src="../assets/js/zepto.jsv1.2.0.js"></script>
<script>
	import axios from 'axios';
	
	export default {
		name: "Detail-page1",
		data: function() {
			return {
				list: [],
				app_imgs:{},
				add_img1:[
					"http://www.dinghuapai.cn/uploads/store/04.jpg",
					"http://www.dinghuapai.cn/uploads/store/05.jpg",
					"http://www.dinghuapai.cn/uploads/store/06.jpg",
					"http://www.dinghuapai.cn/uploads/store/07.jpg",
					"http://www.dinghuapai.cn/uploads/store/09.jpg"
				]
			}
		},
		mounted() {
			axios.get('/api/product/index?id=12396')
				.then((response) => {
					console.log(response.data.data.detail.description);
					this.list = response.data.data.detail.images;
					this.app_imgs = response.data.data.detail.description;
					var imgs = response.data.data.detail.description
					imgs = imgs.replace(/770px/g,"100%")
					console.log(imgs)
					this.app_imgs = imgs
					console.log(typeof this.app_imgs)	
					
				})
		}
	}
</script>

<style scoped lang="scss">
	@import '../assets/css/swiper.min.css';
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
		font-size: 0.14rem;
	}
	
	.detail-action-bar~.mui-content {
		padding-bottom: 0.46rem;
	}
	
	.mui-bar-nav~.mui-content {
		padding-top: 0.5rem;
	}
	
	.banner-box {
		position: fixed;
		top: 0.6rem;
		left: 0;
		right: 0;
		height: 4.43rem;
	}
	
	.banner-out {
		width: 100%;
		height: 5rem;
	}
	/*scroll-out*************************** ***** */
	
	.scroll-out {
		z-index: 1;
		position: relative;
		background-color: #fff;
	}
	
	.ui-box {
		position: relative;
		background-color: #fff;
	}
	
	.detail-focus .basic-info {
		position: relative;
		z-index: 4;
		padding: 0.1rem 0.1rem 0;
	}
	
	.fl {
		float: left;
	}
	
	.detail-focus .basic-info .ptit {
		padding: 0 0 0.1rem;
		overflow: hidden;
		font-size: 0.14rem;
		line-height: 0.2rem;
		color: #444;
		max-width: 75%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.detail-focus .basic-info .info-row {
		font-size: 0.13rem;
		color: #999;
	}
	
	.detail-focus .basic-info .hd {
		margin-bottom: 0.1rem;
		line-height: 0.26rem;
		width: 75%;
	}
	
	.detail-focus .basic-info .hd .rbox {
		font-size: 0;
		white-space: nowrap;
	}
	
	.detail-focus .basic-info .price {
		display: inline-block;
		color: #f00909;
		font-size: 0.14rem;
		vertical-align: middle;
		margin-right: 0.1rem;
	}
	
	.detail-focus .basic-info .price .num {
		font-size: 0.2rem;
		line-height: 0;
	}
	
	.detail-focus .basic-info .only-moblie {
		display: inline-block;
		vertical-align: middle;
		padding: 0 0.05rem;
		height: 0.2rem;
		line-height: 0.2rem;
		font-size: 0.1rem;
		color: #f67a0c;
		background-color: #fff4eb;
		border: 1px solid #f67a0c;
		border-radius: 0.04rem;
	}
	/********************detail-discount*********************/
	
	.detail-discount {
		padding: 0.1rem;
	}
	
	.detail-discount .item {
		line-height: 0.22rem;
		color: #8d8d8d;
		font-size: 0.12rem;
	}
	
	.detail-discount .label {
		display: inline-block;
		vertical-align: middle;
		margin: -1px 0.05rem 0 0;
		padding: 0 0.05rem;
		line-height: 0.18rem;
		color: #fff;
		background-color: #f67a0c;
		-webkit-border-radius: 0.04rem;
		border-radius: 0.04rem;
	}
	/******************detail-value**********************/
	
	.detail-value {
		padding: 0.08rem 0.1rem;
		margin-bottom: 0.1rem;
		display: flex;
	}
	
	.detail-value .key {
		font-size: 0.14rem;
		line-height: 0.28rem;
		color: #999;
	}
	
	.detail-value .cnt {
		font-size: 0.14rem;
		margin-right: -0.08rem;
		overflow: hidden;
	}
	
	.flex-col {
		display: block;
		width: .1px;
		flex: 1;
	}
	
	.detail-value .mui-numbox {
		width: 0.6rem;
		height: 0.28rem;
		padding: 0 0.3rem;
	}
	
	.mui-numbox {
		border: solid 0.01rem #bbb;
		overflow: hidden;
		display: inline-block;
		height: 0.35rem;
		border-radius: 0.03rem;
		background-color: #efeff4;
		vertical-align: top;
		position: relative;
		padding: 0px 0.4rem 0px 0.4rem;
		width: 1.2rem;
		vertical-align: middle;
	}
	
	.detail-value .mui-numbox [class*=btn-numbox] {
		width: 0.2rem;
	}
	
	.mui-numbox [class*=numbox-btn][disabled],
	.mui-numbox [class*=btn-numbox][disabled] {
		color: #c0c0c0;
	}
	
	.mui-numbox .mui-numbox-btn-minus,
	.mui-numbox .mui-btn-numbox-minus {
		left: 0px;
		border-top-left-radius: 0.03rem;
		border-bottom-left-radius: 0.03rem;
	}
	
	.mui-numbox [class*=numbox-btn],
	.mui-numbox [class*=btn-numbox] {
		width: 0.4rem;
		height: 100%;
		position: absolute;
		top: 0px;
		border: none;
		border-radius: 0px;
		font-size: 0.18rem;
		color: #555;
		line-height: 100%;
		font-weight: normal;
		overflow: hidden;
		padding: 0px;
		background-color: #f9f9f9;
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
	}
	
	.detail-value .mui-numbox .mui-input-numbox {
		font-size: 0.14rem;
		line-height: 0.26rem;
	}
	
	.mui-numbox .mui-numbox-input,
	.mui-numbox .mui-input-numbox {
		width: 100% !important;
		height: 100%;
		text-align: center;
		border: none !important;
		border-left: solid 1px #ccc !important;
		border-right: solid 1px #ccc !important;
		margin: 0px;
		/* padding: 0px 0.03rem !important;*/
		display: inline-block;
		border-radius: 0px !important;
		text-overflow: ellipsis;
		word-break: normal;
		overflow: hidden;
	}
	
	button[disabled],
	html input[disabled] {
		cursor: default;
	}
	/*******************detail-tabs-box **********************/
	
	.detail-tabs-box {
		height: 46px;
	}
	
	.detail-tabs {
		position: relative;
		z-index: 5;
		display: flex;
		height: 0.46rem;
		line-height: 0.46rem;
		background-color: #fff;
	}
	
	.swiper-pagination-clickable .swiper-pagination-bullet {
		cursor: pointer;
	}
	
	.detail-tabs .item {
		position: relative;
		display: block;
		width: .1px;
		flex: 1;
		width: auto;
		height: auto;
		color: #444;
		font-size: 0.15rem;
		text-align: center;
		background: none;
		cursor: pointer;
		opacity: 1;
	}
	
	.detail-tabs .swiper-pagination-bullet-active {
		color: #ca0e25;
		background: none;
	}
	/************************ui-border-b************************/
	
	.detail-desc {
		margin-bottom: 0.1rem;
		background-color: #fff;
	}
	
	.detail-desc {
		margin-bottom: 0.1rem;
		background-color: #fff;
	}
	
	.detail-stand .item {
		padding: 0.07rem 0;
		overflow: hidden;
		line-height: 0.2rem;
		border-bottom: 0.01rem dotted #ccc;
	}
	
	.detail-stand .item .k {
		float: left;
		width: 0.5rem;
		color: #8a8a8a;
	}
	
	.detail-stand .item .v {
		margin-left: 0.5rem;
		color: #444;
	}
	
	.detail-stand {
		padding: 0.15rem 0.1rem 0.18rem;
		font-size: 0.12rem;
	}
	/***********************pics****************************/
.detail-desc 
			{.pics {
				padding: 0 0.05rem;
				img{
					    display: block;
					   
					}
				
			}
}	
.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
	height: auto;
}
.swiper-slide {
	flex-shrink: 0;
	width: 100%;
	height: 100%;
	position: relative;
}


 #app_images{ 
		p{
			max-width:100%;
		} 
 }

</style>
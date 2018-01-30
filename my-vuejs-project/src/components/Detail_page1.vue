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
							</span>							
							
							<span class="item swriper-pagination-bullet ">
								用户评价								
							</span>
																											
							<span class="item swriper-pagination-bullet ">
								鲜花问答							
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
							<div class="rec-hd">也许你还喜欢</div>
							<div class="rec-list mui-row" style="height: 100%; width: 100%;background: #FFFFFF;z-index: 10;">
							
								<div class="mui-col-xs-6 col" v-for="item in hots">
									<a href="" class="item" style=" border: 1px solid #CCCCCC;">
										<img :src ="item.img" style="width: 100%;"/>
										<div class="cnt">
											<div class="name" >{{item.title}}</div>
											<div class="price">
												￥{{item.price}}
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						
						
					</div>
					
					
					
					
				</div>
			</div>

		</div>
			
			
		<!--fixed QQ-->
		<div id="dhp_kefu">
		<a href="" class="qq" style="background: #5294D0;">
			<i class="iconfont icon-QQ"></i>
		</a>
		<a href="">
			<i class="iconfont icon-icon-test-copy"></i>
		</a>
	</div>
	</div>
		
</template>

<script type="text/javascript" src="../assets/js/zepto.jsv1.2.0.js"></script>
<script>
	import axios from 'axios';
	import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
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
				],
				add_img2:[],
				add_title:[],
				add_price:[],
				hots:[]
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
					console.log( response.data.data.hots[1])
					for(var i = 0;i<response.data.data.hots.length;i++){
						this.hots.push(response.data.data.hots[i])
					}
						
					
					
				})
		}
	}
</script>

<style scoped lang="scss">
	@import '../assets/css/swiper.min.css';
	@import '../assets/css/iconfont/iconfont2.css';
	@import '../assets/css/Detail_page1.scss';
	
</style>
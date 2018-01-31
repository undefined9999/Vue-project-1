<template>
	<div class="cart">
		<header class="mui-bar mui-bar-nav mui-bar-nav-primary" style="background: #CA0E25;">
			<a href=""></a>
			<div class="title">
				<div class="center" style="color: #FFFFFF;">我的购物车</div>
			
			</div>
			<a href="javascript:;" class="btn right topmenu-btn">
				<span style="color: #FFFFFF;" @click="myur()">导航</span>
			</a>
		</header>
		<!---------------------------------------->
		<div class="mui-bar detail-action-bar">
			<div class="info">
				合计：
				<span id="count-price" class="price">{{end_money}}</span>
				元
			</div>
			<span class="btn primary">
				去结算(
				<span>{{$store.state.cart.length}}</span>
				)
			</span>
		</div>
		
		<!--购物车为空-->
		
		<div class="mui-content" >
			<div class="ui-notice cart-empty" style="display: block;"  v-if="flag">
				
				<img class="img-ico" src="http://www.dinghuapai.cn/wap/img/cart-empty.png" />
				<div class="desc">购物车还没有任何商品</div>
			
			<div class="btn-wrap">
				<a href="" class="ui-btn-primary ui-btn-md" style="color: #FFFFFF;padding:9px;font-size: 0.14rem;line-height: 0.3rem;border-radius: 0.05rem;">去逛逛</a>
			</div>
			</div>
			
			<div class="cart-items">
				<div class="cart-item">
					<div class="figure">
						<a href="">
							<img :src="$store.state.cart[0].detail.img" />
						</a>
					</div>
					<div class="cnt">
						<div class="name">
							<a href="" >{{$store.state.cart[0].detail.title}}</a>
						</div>
						<div class="action">
							数量：
							<div class="mui-numbox" data-numbox-min="1" data-numbox-max="90">
								<button class="mui-btn mui-btn-numbox-minus" @click="minus()">
									<i>-</i>
								</button>
								<span class="mui-input-numbox">{{count}}</span/>
								<button class="mui-btn mui-btn-numbox-plus" @click="plus()">
									<i>+</i>
								</button>
							</div>
							<div class="del" @click="del()">
								<i class="iconfont icon-fangdajing"></i>
							</div>
						</div>
						
						<div>
							价格:
							<span class="price" data-price="129">
								{{$store.state.cart[0].detail.mobile_price}}
							</span>
						</div>
						
					</div>
				</div>
			</div>
			
			
		</div>
		
		<!--<div class="ui-box ui-box-rec">
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
							</div>-->
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

<script>
import axios from 'axios';
export default {
	name: "Cart",
	data: function() {
		return {
			flag:false,
			list: [],
			app_imgs:{},
			count:1
		}
	},
	mounted() {
		this.myur();
//		axios.get('/api/product/index?id=12396')			
//				.then((response) => {					
///*********也许你喜欢的列表***********/				
//					this.list = response.data.data.detail.images;
//					this.app_imgs = response.data.data.detail.description;
//					var imgs = response.data.data.detail.description
//					imgs = imgs.replace(/770px/g,"100%")
////					console.log(imgs)
//					this.app_imgs = imgs
////					console.log(typeof this.app_imgs)	
////					console.log( response.data.data.hots[1])
//					for(var i = 0;i<response.data.data.hots.length;i++){
//						this.hots.push(response.data.data.hots[i])
//					}
//					
//				})			
	},
	methods:{
		myur(){
//			this.$store.state.cart = null;

			console.log(this.$store.state.cart);
		},
		del(){ 	       			this.$store.dispatch("delToCartA");
		},
		minus(i) {
	       //实现减少购买数量  
           this.count--;
			this.$emit('input', {res: this.count, other: '--'})
			if(this.count < 1){
				this.count = 1;
			}
        },
        plus(i) {
           this.count++;
			this.$emit('input', {res: this.count, other: '++'})
        },
//      end(){
//      	var end_money = 0;
//      	for(var i = 0;i < this.$store.state.cart.length;i++){
//      		end_money = end_money + this.$store.state.cart.mobile_price[i].price*
//      	}
//      }
	
	}
}
</script>

<style scoped lang="scss">
	@import '../assets/css/Cart.scss';
</style>
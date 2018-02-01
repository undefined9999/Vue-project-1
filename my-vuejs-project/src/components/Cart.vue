<template>
	<div class="cart">
		<header class="mui-bar mui-bar-nav mui-bar-nav-primary" style="background: #CA0E25;">
			<router-link to="/index" class="left_">
				<a href="" style="color: #FFFFFF;">&lt;</a>
			</router-link>
			<div class="title">
				<div class="center" style="color: #FFFFFF;">我的购物车</div>
			
			</div>
			<a href="javascript:;" class="btn right topmenu-btn">
				<span style="color: #FFFFFF;" @click="foots()">导航</span>
			</a>
		</header>
		<common-footer v-if="flag"></common-footer>
		<!---------------------------------------->
		
		<div class="mui-bar detail-action-bar">
			<div class="info">
				合计：
				<span id="count-price" class="price" v-if="$store.state.cart == null">0.00</span>
				<span id="count-price" class="price" v-if="$store.state.cart != null">{{cartsprice}}</span>
				元
			</div>
			<router-link :to="{name : 'Login'}" id="defBack" class="back-btn mui-action-back" style="width:30%">
			<span class="btn primary" style="width:100%">
				去结算(
				<span v-if="$store.state.cart">{{$store.state.cart.length}}</span>
				)
			</span>
			</router-link>
		</div>
		
		<!--购物车为空-->
		
		<div class="mui-content" >
			<div class="ui-notice cart-empty" style="display: block;"  v-if="$store.state.cart == null">
				
				<img class="img-ico" src="http://www.dinghuapai.cn/wap/img/cart-empty.png" />
				<div class="desc">购物车还没有任何商品</div>			
			<div class="btn-wrap">
				<router-link :to="{name : 'List2' , params : {Attr_id : 1001,Id : 2}}" id="defBack" class="back-btn mui-action-back">
				<a href="" class="ui-btn-primary ui-btn-md" style="color: #FFFFFF;padding:9px;font-size: 0.14rem;line-height: 0.3rem;border-radius: 0.05rem;">去逛逛</a></router-link>
			</div>
			</div>
			
			<div class="cart-items" v-if="$store.state.cart">
				<div class="cart-item" v-for="ite in carts">
					<div class="figure">
						<a href="">
							<img :src="ite.detail.img" />
						</a>
					</div>
					<div class="cnt">
						<div class="name">
							<a href="javascript:;" >{{ite.detail.title}}</a>
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
								<i class="iconfont icon-iconset0316"></i>
							</div>
						</div>
						
						<div>
							价格:
							<span class="price" data-price="129">
								{{ite.detail.mobile_price}}
							</span>
						</div>
						
					</div>
				</div>
			</div>
			
			
		</div>
		
		<div class="ui-box ui-box-rec" v-if="$store.state.cart != null">
								<div class="rec-hd">也许你还喜欢</div>
								<div class="rec-list mui-row" style="height: 100%; width: 100%;background: #FFFFFF;z-index: 10;">
								
									<div class="mui-col-xs-6 col" v-for="item in hots">
										<a href="javascript:;" class="item" style=" border: 1px solid #CCCCCC;">
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
	import Footer from '@/components/Footer'
import axios from 'axios';
import { MessageBox } from 'mint-ui';
export default {
	name: "Cart",
	data: function() {
		return {			
			list: [],
			app_imgs:{},
			hots:[],
			count:1,
			detail:[],
			flag: false,
			carts:this.$store.state.cart,
			cartsprice:null
		}
	},
	mounted() {
		this.commonprice();
		console.log(this.carts)
		axios.get('/api/product/index?id=12396')			
				.then((response) => {					
/*********也许你喜欢的列表***********/				
					this.list = response.data.data.detail.images;
					this.app_imgs = response.data.data.detail.description;
					var imgs = response.data.data.detail.description
					imgs = imgs.replace(/770px/g,"100%")
//					console.log(imgs)
					this.app_imgs = imgs
//					console.log(typeof this.app_imgs)	
//					console.log( response.data.data.hots[1])
					for(var i = 0;i<response.data.data.hots.length;i++){
						this.hots.push(response.data.data.hots[i])
					}
					
				})			
	},
	methods:{
		foots : function(){
				this.flag =! this.flag;
	//			console.log(this.flag)
			},
			commonprice(){
				var that = this;
		$.each(this.carts, function(index,value) {
	 that.cartsprice += value.detail.mobile_price;
//	 console.log(value.detail.mobile_price)
//	 console.log(that.cartsprice)
			});			
			},
		del(){ 	       			
			
			MessageBox.confirm('', {
                message: '你确定删除该商品吗？',
                title: '提示',
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(action => {
                if (action == 'confirm') {
//                  console.log('确定');
        			this.$store.dispatch("delToCartA");
        			this.commonprice();
                }
            }).catch(err => {
                if (err == 'cancel') {
//                  console.log('取消');
                }
            })
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
        	var that = this;
           this.count++;
			this.$emit('input', {res: this.count, other: '++'})		
			for(var i = 0;i<this.$store.state.cart.detail.length;i++){
				this.detail.push(that.$store.state.cart.detail[i])
			}
        }	
	},
	components: {
	      'common-footer' : Footer
	  },
}
</script>

<style scoped lang="scss">
	@import '../assets/css/Cart.scss';
	footer{
	position: absolute;top:0.5rem;
	z-index:99;
}
</style>
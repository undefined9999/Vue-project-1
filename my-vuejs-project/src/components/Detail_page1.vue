<template>
	
			
	<div class="detail">
		<div class="loadingDiv" v-if="loading">
			玩命加载中......
		</div>
		<div class="mui-bar detail-action-bar">
			<div class="info">
				合计：
				<span id="count-price" class="price" v-if="cart.detail">{{cart.detail.mobile_price}}</span> 元
			</div>
			
				<span class="btn warning" @click.stop="addToCart()">加入购物车</span>
			
			<router-link :to="{name : 'Login'}" id="defBack" class="back-btn mui-action-back" style="width:30%">
			<a href="javascript:;" class="btn primary" style="height: 100%;width: 100%;">立即购买</a>
			</router-link>
		</div>
		<div class="mui-content">
			<!--banner-->
			<div class="banner-out detail-focus" style="margin: 0;">
				<!--//////////////////////////////////-->
					<header>
	    <router-link :to="{name : 'List2' , params : {Attr_id : 1001,Id : 2}}" id="defBack" class="back-btn mui-action-back">&lt;</router-link>
	    <div class="title">
	        <div class="center">商品详情</div>
	    </div>
	    <router-link to="" class="btn right topmenu-btn" ><span @click="foots()">导航</span></router-link>  
	</header>
	<common-footer v-if="flag"></common-footer>
	<!------------------------------------------->
				<div class="banner-box">
					<mt-swipe :auto="4000">
						<mt-swipe-item v-for="item in list" :key="item.id">
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
							<div class="ptit fl" v-if="cart.detail">{{cart.detail.title}}</div>
							<div class="info-row fr">
								编号:
								<span v-if="cart.detail">{{cart.detail.id}}</span>
							</div>
						</div>
						<div class="basic-info-out">
							<div class="hd">
								<div class="rbox">
									<div class="price">
										<span style="color: #333;display: inline-block;width: 0.57rem;font-size: 0.14rem;">
											<span v-if="">{{cart.price_name}}</span>
										</span>
										<span class="num" id="itemprice" v-if="cart.detail">￥{{cart.detail.mobile_price}}</span>
									</div>
									<span class="only-moblie">手机专享价</span>
									<span style="display:inline-block;line-height:26px;font-size:10px;margin-left:3px;vertical-align:middle;color:#f00909;">
										已省
										<span v-if="cart.detail">{{cart.detail.lisheng}}</span> 元
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
								<button class="mui-btn mui-btn-numbox-minus" type="button"  style="width: 0.3rem;" @click="minus()">
									<i class="iconfont icon-reduce" >-</i>
								</button>
								<span class="mui-input-numbox" disabled style="float: left;width: 0.3rem;" >{{count}}</span>
								<button class="mui-btn mui-btn-numbox-plus" type="button" style="float: right;width: 0.3rem;" @click="plus()">
									<i class="iconfont icon-plug" >+</i>
								</button>
							</div>
						</div>
					</div>
					</div>
					<!--detail-tabs-box-->
				
					<div class="detail-tabs-box searchBar" id="searchBar">
						<div class="detail-tabs swiper-pagination-clickable swiper-pagination-bullets" :class="{'isFixed':searchBarFixed}">		
							
							  <mt-button  @click.native.prevent="active = 'tab-container1'" class="item swriper-pagination-bullet swiper-pagination-bullet-active">商品详情</mt-button>  
							  <mt-button  @click.native.prevent="active = 'tab-container2'" class="item swriper-pagination-bullet ">用户评价</mt-button>  
							  <mt-button  @click.native.prevent="active = 'tab-container3'" class="item swriper-pagination-bullet ">鲜花问答	</mt-button>  
						</div>
						
					</div>
						<div class="page-tab-container">  
					      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
					       
					       <mt-tab-container-item id="tab-container1">  
					            <!-- cell组件 -->  
					          <mt-cell>
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
											<img :src ="item"  v-for="item in add_img1" :key="item.id" style="width: 100%;height: 100%;"/>
											</div>
											
										</div>
									</div>
								</div>
				  		          	
				        
				    		  </mt-cell>  
								 <!--ui-box-rec-->
							<div class="ui-box ui-box-rec">
								<div class="rec-hd">也许你还喜欢</div>
								<div class="rec-list mui-row" style="height: 100%; width: 100%;background: #FFFFFF;z-index: 10;">
								
									<div class="mui-col-xs-6 col" v-for="item in hots" :key="item.id">
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
							</mt-tab-container-item>  
					        
					        <mt-tab-container-item id="tab-container2" >  
					            <!-- cell组件 -->  
					        <mt-cell>
					          	<div class="mod-infinite" >
					          		<div class="detail-reply">
					          			<div class="reply-item ui-border-b" v-for="item in user_pl" :key="item.id">
					          			
					          			<div class="avatar" >
					          					<a href="">
					          						<div class="img">
					          							<img  :src="item.item_img">
					          						</div>
					          						
					          					</a>
					          				</div>
					          				<div class="cnt">
					          					<div class="info">
					          						<div>
					          							<span class="uname">{{item.uname}}</span>
					          							<span class="pj good ui-border-l">{{item.pij}}</span>
					          						</div>
					          						<div class="time">2017-12-06 15:42:35</div>
					          					</div>
					          					<div class="reply">{{item.content}}</div>
					          					<div class="mui-content-padded">
					          						<img :src="item.img" style="width: 40px;height: 40px;margin-left: 3px;" v-if="item.img == '' ? false : true"/>
					          					</div>
					          				</div>
					          				
					          			</div>
					          			<infinite-loading @infinite="infiniteHandler"></infinite-loading>
					          		</div>
					          	</div>
					          	
					          </mt-cell>  
					          
					        </mt-tab-container-item> 
					        
					        <mt-tab-container-item id="tab-container3">  
					            <!-- cell组件 -->  
					          <mt-cell>
					          	<div class="detail-faq">
					          		<ul style="font-size: 0.14rem;">
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：你们的鲜花是怎么配送的？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答：我们是全国联盟店直接配送，目前拥有6000多家联盟配送店，所有鲜花均由所在地的配送店专人专车配送，鲜花都是当天现包现送，以保证我们鲜花的质量，下单后可以加我们客服的微信：13349292889，可以给你回图的</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0"> 问：收到的鲜化和图片是一模一样的吗？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答：鲜花的纯手工包扎完成，由于各地插花师对图片上花型的理解会有所不同，每一朵花的开放程度不同在加上各地的气候花材和包装材料也难免会有一些差异，但我们的保证鲜花的主花材、新鲜程度、数量、颜色与说明一致，与图片相似度在90%以上，您可放心订购。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：鲜花都是送到收花人手中吗？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答：一般情况下都是直接送到收花人手中的，特殊情况下如收花人不在，收花人据收，门卫不让进，收花人换地方等其他原因除外。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：收花人拒收怎么办？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答:鲜花已经做好后无法再次使用相应制作配送成本已经产生,因收花人或订花人的原因（非质量原因）导致无法送达或者拒绝签收的，鲜花款项将不能退还，情亲谅解。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：鲜花需要提前预定吗？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答：重大节日（情人节，母亲节，女王节）可提前半个月预定，因越早订价格质量都有保障，非重大节日可以提前1-10天预订，因特殊花材好安排，为了保障花的新鲜，所有的提前预定的订单都是当天现包现送的。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：可以在指定日期和时间送到吗？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答:可以指定日期送到，非节假日期间的上午或下午时间段送到（节日期间只承诺当天送到）建议至少提前1天订购为好，如果有其他特殊要求，可以和我们客服人员进行沟通，我们一定会尽力为您做到。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：鲜花的枝数和颜色会有变化吗？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答:鲜花的季节性较大，因此您在某一季节选择的某种花材可能会无法供应。按照寓意相同、类似花材、价值相同的替代原则替代，对于主要花材及包装材料，我们将在征求您的意见后进行处理，希望您能谅解。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：收花人不在怎么办？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答：收花人不在相应的地址，我们会联系收花人指定相应同事代收，如果收花人电话关机无人代收的情况会将鲜花带回，联系订购人确定后在配送，并收取相应配送费用。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问:送花前是否可以不通知收花人？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答：收花人不在相应的地址，我们会联系收花人指定相应同事代收，如果收花人电话关机无人代收的情况会将鲜花带回，联系订购人确定后在配送，并收取相应配送费用。</p>
					          				</div>
					          			</li>
					          			
					          			<li>
					          				<div class="mui-dedia-body">
					          					<p class="ask" style="padding:0.2rem 0 0.2rem 0">问：订单提交可以取消吗？</p>
					          					<p style="line-height: 0.2rem;color: #000000;">答：当订单状态改变后，就不可以取消订单或者退单，因为鲜花属于一次性消费品，请亲谅解！</p>
					          				</div>
					          			</li>
					          		</ul>
					          	</div>
					          	
					          </mt-cell>  
					        </mt-tab-container-item> 
					        
					      </mt-tab-container>  
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
	import { Indicator } from 'mint-ui';
	import axios from 'axios';
	import Footer from '@/components/Footer'
	import { TabContainer, TabContainerItem } from 'mint-ui';
	import InfiniteLoading from 'vue-infinite-loading';
	import { MessageBox } from 'mint-ui';
	export default {
		name: "Detail_page1",
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
				hots:[],
				active: 'tab-container1',
				user_pl:[],
				page:0,
				searchBarFixed:false,
				cart : ' ',
				count:1,
				flag:false,
				loading:false

			}
		},
		beforeMount(){
		
			this.loading = true;
			Indicator.open({
				text :'',
				spinnerType:'triple-bounce'
			});
		},
		mounted() {
			
			var Id = this.$route.params.Id;
			this.getData();			
			window.addEventListener('scroll', this.handleScroll);	
			
			axios.get(`/api/product/index?id=${Id}`)			
				.then((response) => {
//					console.log(response.data.data.detail.description);
/*************详情动态信息************/
//					console.log(response.data.data)
					this.cart = response.data.data;
//					console.log(this.cart);
					
/*********也许你喜欢的列表***********/				
					this.list = response.data.data.detail.images;
					this.app_imgs = response.data.data.detail.description;
					var imgs = response.data.data.detail.description;
					imgs = imgs.replace(/770px/g,"100%");
//					console.log(imgs)
					this.app_imgs = imgs;
//					console.log(typeof this.app_imgs)	
//					console.log( response.data.data.hots[1])
					for(var i = 0;i<response.data.data.hots.length;i++){
						this.hots.push(response.data.data.hots[i])
					}
				})
				Indicator.close();
				
		},
		 methods: {
            infiniteHandler($state) {
		      setTimeout(() => {
		    	this.getData();
		        $state.loaded();
		      }, 1000);
		    },
	      	getData() {
	    		axios.get(`/api/product/comments?page=${this.page+1}&id=12396`).then((response) => {
	//					console.log(response.data.data.comments.data)
				this.page++;
					for(var i = 0;i<response.data.data.comments.data.length;i++){
						this.user_pl.push(response.data.data.comments.data[i])
					}	
					this.loading = false;
					 Indicator.close();
				
				})		
			},
		    handleScroll () {
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//			  console.log(scrollTop)
			   var offsetTop = document.querySelector('#searchBar').offsetTop;
//			   console.log(offsetTop)
				if (scrollTop > 660) {
			 		this.searchBarFixed = true
//			 		console.log(1)
			 	} else {
			 		this.searchBarFixed = false
//			 		console.log(2)
			 	}
			},
			destroyed () {
				window.removeEventListener('scroll', this.handleScroll)
			}, 
			addToCart() {
				/*************弹出框***********/
				MessageBox.confirm('', {
	                message: '已加入购物车，是否去结算?',
	                title: '提示',
	                confirmButtonText: '确定',
	                cancelButtonText: '取消'
                      }).then(action => {
                      	
                      	
                if (action == 'confirm') {
                	var goods = this.cart;
                	console.log(this.cart)
//                  console.log('确定');
		this.$store.dispatch("addToCartA", goods);
					this.$nextTick(function(){
                     this.$router.push({path : "/cart"});
                	     })              
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
	           this.count++;
				this.$emit('input', {res: this.count, other: '++'})					
	        },
			foots : function(){
				this.flag =! this.flag;
	//			console.log(this.flag)
			},
			
		  },
		 components: {
		    InfiniteLoading,
		    'common-footer' : Footer
		 },
		
	}
</script>

<style scoped lang="scss">
	@import '../assets/css/swiper.min.css';
	@import '../assets/css/iconfont/iconfont2.css';
	@import '../assets/css/Detail_page1.scss';
	header{
	    display: flex;align-items: center;
	   justify-content: space-between;
	    height: 0.5rem;color: #666;padding:0 0.05rem;
	    background-color: #fff;width:100%;
 	.back-btn {
		    display: block;
		    padding: 0 0.05rem;
		}
}
footer{
	position: absolute;top:0.5rem;z-index: 999;
}
.loadingDiv {
		position: fixed;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		background: rgba(0,0,0,0.5);
		z-index: 999;
	}

</style>
<template>
	<div class="index-pdt ui-box" >
		<section v-for="ite in arr_top">
	 	   <div class="box-hd mui-clearfix">
                <div class="tit fl">
                	<i class="iconfont icon-fenlei"></i>
                	{{ite.wap_name}}
                </div>
                <router-link to="" class="more fr" >
                	更多+
                </router-link>
            </div>
	 	     <ul class="plist mui-row">
	 	     	<li class="mui-col-xs-6" v-for="item in ite.attribute">
	 	     		<router-link :to="{name : 'Detail' , params : {Id : item.item_id}}" class="link">
	 	     			<div class="figure">
	 	     				<img v-lazy.container="item.items.img" alt="" />
	 	     			</div>	 	     			                      
                        <div class="cnt">
                            <div class="name">{{item.items.title}}</div>
                            <div class="bottom">
                                <div class="price">￥{{item.items.price}}</div>            
                            </div>
                        </div>
	 	     		</router-link>
	 	     	</li>
	 	     </ul>
 	    </section>
	</div>
</template>

<script>
	import axios from 'axios';
  
	export default {
	  name: 'carousel-list3',
	  data () {
	    return {
	      		arr_top: []
	    }
	  },
	   components: {
	
	  },
	    mounted () {
			axios.get('/api/home/index')
			.then((response) => {
	//		console.log(response);
			this.arr_top = response.data.data.floor;
//			console.log(this.arr_top)
	//		console.log(this.arr_top[0].attribute[0].items.img)
			})
			.catch(function (error) {
				//console.log(error);
			});
	  	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
       @import '../assets/css/swiper.min.css';
  #xinpin{
      	display: flex; flex-direction: column; width: 100%; flex:1;
      }
  .index-pdt {
    margin-bottom: 10px;width:100%;display: flex; flex-direction: column; width: 100%; flex:1;
	}
	.ui-box {
	    position: relative;
	    background-color: #fff;
	}
	.box-hd{
		width:100%;height:43px;padding:0 10px;line-height:43px;
		 .tit{
		 	color:#444;font-size:15px;
		 }
		 .more{
		 	font-size:12px;color:#ca0e25;
		 }
	}
	.plist{
		width:100%;display:flex;flex-wrap: wrap;
		li{
			width:50%;display:flex;flex-wrap: wrap;
			padding:0 5px;margin-bottom:10px;
			.link{
				display:flex;flex-direction: column;border:1px solid #eee;padding:10px;
				.cnt{
					width:100%;height:100%;display: flex;
					flex-direction: column;text-align: center;
					justify-content: space-around;
					.name{
						font-size:14px;color:#444;
					}
					.price{
						color:#f00909;
					}
				}
				img{
				width:100%;height:173px;
			    }
			}			
		}
	}
</style>

<template>
	<div class="index-promo">
        <div class="list">
        	<div class="col" v-for="item in arr_top">
				<router-link to="">
                    <div class="tit">{{item.name}}</div>
                        <div class="figure">
        					<img v-lazy.container="item.index_img" alt="" />
                        </div>
                </router-link>              
            </div>
            <div class="col col-count">
                <router-link to="">
                    <div class="figure">
           				<img v-lazy.container="arr_top2.img" alt="" />
                    </div>
                    <div class="info">
                        <div class="name">
                            <div class="ellips">{{arr_top2.title}}</div>
                        </div>
                        <div class="price">￥{{arr_top2.special_price}}</div>
                    </div>
                    <div class="bar">
                        <div class="bar-tip">限时特惠(<span>{{arr_top2.discount}}</span>)折</div>
                    </div>
                </router-link>
            </div>
    	</div>
	</div>
</template>

<script>
	import axios from 'axios';
  
	export default {
	  name: 'carousel-list2',
	  data () {
	    return {
	      		arr_top: [],
	      		arr_top2:""
	    }
	  },
	   components: {
 
	  },
	    mounted () {
				axios.get('/api/home/index')
		.then((response) => {
	//		console.log(response);
			this.arr_top = response.data.data.lively2;
			this.arr_top2 = response.data.data.special;
	//		console.log(this.arr_top2)
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
.index-promo {
    margin-bottom: 10px;overflow: hidden;background-color: #fff;height:152px;width:100%;display:flex;flex-wrap:nowrap;
    .list{
    	display:flex;flex-wrap:nowrap;justify-content:space-around;width:100%;
	    .col {
			    width: 33%;height: 152px;
			    text-align: center;line-height: 1;border-right: 1px solid #f4f4f4;
		    img{
		    	width:93px;
		    }
		}
	}
}	
.col-count {
 width:34% !important;
    border-right: none;
}
.bar{
	background:#ca0e25;color:#fff;
}
</style>

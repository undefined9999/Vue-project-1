<template>
  <div class="ui-cells">
  	       <div class="box-hd mui-clearfix">
            <div class="tit fl">
            	<i class="iconfont icon-fenlei"></i>
            	{{arr_top.name}}
            </div>
            <router-link to="" class="more fr" >
	                    	更多+
	        </router-link>
        </div>
     <template to="" class="ui-cell" v-for="ite in arr_top.waparticle" >
                <mt-cell
					  :title="ite.title"
					  to=""
					  is-link
					  value="">
					</mt-cell>
     </template>
  </div>
</template>

<script>
	import axios from 'axios';
  
export default {
  name: 'carousel-list4',
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
		this.arr_top = response.data.data.article;
//		console.log(this.arr_top)
//		console.log()
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
 .ui-cells {
    margin: 10px 0;background-color: #fff;
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
</style>

<template>
      <div class="ft-service ui-border-t mui-row">
        <div class="mui-col-xs-6 col col-1">
        	<span class="ico"></span>
        	<div class="label">新鲜花材</div>
        	</div>
        <div class="mui-col-xs-6 col col-2">
        	<span class="ico"></span>
        	<div class="label">诚信可靠</div>
        </div>
        <div class="mui-col-xs-6 col col-3">
        	<span class="ico"></span>
        	<div class="label">1-3小时送花</div>
        </div>
        <div class="mui-col-xs-6 col col-4">
        	<span class="ico"></span>
        	<div class="label">200%退赔承诺</div>
        </div>
    </div>
</template>

<script>
	import axios from 'axios';
  
export default {
  name: 'carousel-list6',
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
		this.arr_top = response.data.data.comments.data;
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
 .ft-service {
    padding: 5px 10px;background-color: #fff;display:flex;flex-wrap:wrap;
    .col {
				    text-align: center;padding: 5px 0;width:50%;height:50px;
				    display:flex;line-height:50px;padding-left:5px;
				}
}
.ico {
    background: url(http://www.dinghuapai.cn/wap/img/ico/fs1.png);
    width:40px;height:40px;margin-right:10px;background-size: 100%;
}
.col-2 .ico{
	background: url(http://www.dinghuapai.cn/wap/img/ico/fs2.png);
	background-size: 100%
}
.col-3 .ico{
	background: url(http://www.dinghuapai.cn/wap/img/ico/fs3.png);
	background-size: 100%
}
.col-4 .ico{
	background: url(http://www.dinghuapai.cn/wap/img/ico/fs4.png);
	background-size: 100%
}
</style>

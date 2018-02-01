<template>
	<div class="solt">
		<div class="loadingDiv" v-if="loading"></div>
	<header>
    <router-link to="/login" id="defBack" class="back-btn mui-action-back"><</router-link>
    <div class="title">
        <div class="center">注册</div>
    </div>
    <router-link to="" class="btn right topmenu-btn" ><span @click="foots()">导航</span></router-link>  
</header>
 <common-footer v-if="flag"></common-footer>
 <!---------------------------------------------->
        <div class="mui-content">
    <div class="rl-main">
        <label class="rl-cell">
            <div class="ico">
            	<img src="http://www.dinghuapai.cn/wap/img/rl/mobile.png" alt="">
            </div>
            <input class="txtin" type="tel" placeholder="手机号" v-model="username">
        </label>
        <label class="rl-cell">
            <div class="ico">
            	<img src="http://www.dinghuapai.cn/wap/img/rl/yzm.png" alt="">          
           </div>
            <input class="txtin" type="password" placeholder="验证码" v-model="password">
            <div class="">
            <mt-button type="danger">获取验证码</mt-button>
            </div>
        </label>
        <mt-button type="danger" size="normal" @click.native="login">
        	立即登录
        </mt-button>
    </div>
</div>
			<aside>
		<p class="iconfont icon-QQ"></p>
		<p class="iconfont icon-icon-test-copy"></p>
			</aside>
 </div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import Footer from '@/components/Footer'
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
	name: "login2",
	data: function() {
		return {
			 flag: false,
			 username :[],
			 password : [],
			 loading:false
		}
	},
	methods:{
		foots : function(){
			this.flag =! this.flag;
//			console.log(this.flag)
		},
		login : function(){
			Toast({
				  message: '请输入手机号',
				  position: 'bottom',
				  duration: 2000
				});
		}	
	},
	beforeMount(){
	 	this.loading = true;
  		Indicator.open({
			  text: '',
			  spinnerType: 'triple-bounce'
			});
     },
	mounted() {
		setTimeout(()=>{
			this.loading = false;
			Indicator.close();
		},1000)
	        
	},
components: {
      'common-footer' : Footer
  },
}
</script>

<style scoped lang="scss">
.solt{
	height:100%;background:#fff;
}
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
	position: absolute;top:0.5rem;
}

.rl-main {
    margin:0.1rem 0.3rem;
    .mint-button--danger{
		width:100%;background:#ca0e25;display: block;
		color:#fff;height:0.39rem;
		font-size:0.2rem !important;
		text-align: center;line-height: 0.39rem;
		margin-top: 0.23rem;
	}
	.login-help{
		font-size:14px;color:#848484;display: flex;
		justify-content: space-between;margin-top:0.1rem;
	}
}
.rl-cell {
    height: 0.43rem;display: flex;align-items: center;
    border-bottom: 0.01rem solid #eee;width:100%;
    .ico{
    	img{
    		display: block;width:0.19rem ;
    	}
    }
    .txtin{
    	    padding: 0 0.1rem;margin: 0.01rem 0 0;
    height: 0.3rem;line-height: 0.3rem;font-size: 0.14rem;
    line-height: normal;border: none;
     background: transparent;
    }
    .mint-button--normal{
    	font-size:16px !important;margin-top:0;
    }
}
.login-other {
    margin: 0.3rem 0.13rem;
    .hd{
    	position: relative;margin-bottom: 0.15rem;
    text-align: center;font-size: 0;height: 0.02rem;
    width:100%;
    .tit{    	
	    position: absolute;
	    top: 50%;left: 50%;
	    transform: translate(-50%, -50%);
	    z-index: 2;font-size: 0.16rem;
	    line-height: 1;
	    color: #3f3f3f;
	    background-color: #fff;
	    }
    }
    .row{
    	font-size: 0;text-align: center;
    .col{
    	    display: inline-block;
    vertical-align: top;padding: 0.15rem;
	   .item{
    		  img{
				display: block;width: 0.5rem;
				height: 0.5rem;	    		  	
    		  }  
	    	}
	    }
    }
}
.hd:after{
	position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    pointer-events: none;
    box-sizing: border-box;
    border-top: 1px solid #eee;
    width: 200%;
    height: 200%;
    transform-origin: top left;
    transform: scale(0.5);
}
        aside{
            p:nth-of-type(1){
                position: fixed; bottom: 1rem; font-size: 0.45rem; right: 0.1rem; color: #0086B3;
            }
            p:nth-of-type(2){
                position: fixed; bottom: 0.6rem; font-size: 0.4rem; right: 0.13rem; color: #DF5000;
            }
        }
</style>
<template>
<div class="solt">
	<div class="loadingDiv" v-if="loading"></div>
	<header>
	    <router-link to="/index" id="defBack" class="back-btn mui-action-back">&lt;</router-link>
	    <div class="title">
	        <div class="center">登陆</div>
	    </div>
	    <router-link to="" class="btn right topmenu-btn" ><span @click="foots()">导航</span></router-link>  
	</header>
 		<common-footer v-if="flag"></common-footer>
 <!---------------------------------------------->
    <div class="mui-content">
	    <div class="rl-main">
	        <label class="rl-cell">
	            <div class="ico">
	            	<img src="http://www.dinghuapai.cn/wap/img/rl/user.png" alt="">
	            </div>
	            <input class="txtin" type="tel" placeholder="手机号" v-model="username">
	        </label>
	        <label class="rl-cell">
	            <div class="ico">
	            	<img src="http://www.dinghuapai.cn/wap/img/rl/pwd.png" alt="">          
	            </div>
	            <input class="txtin" type="password" placeholder="密码" v-model="password">
	        </label>
	        
	        <mt-button type="danger" size="normal" @click.native="login">
	        	立即登录
	        </mt-button>
	        <div class="login-help centerflex">
	            <div class="flex-col">
	            	<router-link to="/sms-login" style="color: #0d8ddb;text-decoration:underline;">短信登录</router-link>，免注册！
	            </div>
	            <div>
	            	<router-link to="/forget-pass">
	            		忘记密码
	            	</router-link>
	            </div>
	        </div>
	        <div class="login-other">
	            <div class="hd">
	            	<span class="tit">
	            		一键登录
	            	</span>
	            </div>
	            <div class="row">
	                <div class="col">
	                    <router-link to="" class="item">
	                    	<img src="http://www.dinghuapai.cn/wap/img/rl/qq.png"/>
	                    </router-link>
	                </div>
	            </div>
	        </div>
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
		name: "login",
		data: function() {
			return {
				 flag: false,
				 username :'',
				 password : '',
				 loading:false
			}
		},
		methods:{
			foots : function(){
				this.flag =! this.flag;
	//			console.log(this.flag)
			},
			login : function(){
	            if(this.username && this.password){
	            this.myax();
//               console.log(this.username,this.password)
                return;
	            }else{
	                Toast({
              		  message:'请输入手机号',
	                  position: 'bottom',
	                  duration: 2000
	                });
	            }				
			},
	        change(){	        
	        this.$router.push({path : "/login-suss"});
	//          console.log("aa")
	        },
	        myax(){
	             axios.post('/login4ajax',{
		         usrname : this.username,
		         psw : this.password
	           		})
	            .then((response) => {
	            	var name = this.username;
	            	var that = this;
	             console.log(response);
	                Toast({
	              	  message:response.data.message,
	                  position: 'bottom',
	                  duration: 2000
	                });
	//              console.log(this.res)
	                if(response.data.code == 1){
	                   this.change();
	                  that.$store.dispatch("setUserNameA",name);
	                }
	            })
                .catch(function (error) {
	                    //console.log(error);
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
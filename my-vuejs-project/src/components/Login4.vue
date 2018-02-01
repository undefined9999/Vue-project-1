<template>
	<div class="solt">
		<div class="loadingDiv" v-if="loading"></div>
			<header>
			    <router-link to="/login" id="defBack" class="back-btn mui-action-back"><</router-link>
 <!--------------------------------------------------------------------------------------------------------------------------------->
			    <div class="title">
			        <div class="center">个人中心</div>
			    </div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
			    <router-link to="" class="btn right topmenu-btn" ><span @click="foots()">导航</span></router-link>  
			</header>
 <!--------------------------------------------------------------------------------------------------------------------------------->
				<common-footer v-if="flag"></common-footer>
 <!--------------------------------------------------------------------------------------------------------------------------------->
		<div class="mui-content">
	 		<div class="index-user">
		        <div class="avatar">
		            <img src="http://www.dinghuapai.cn/wap/img/uc/dhp.png" alt=""/>
		        </div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
		        <div class="name" >
		        {{$store.state.username}}
		        </div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
		        <div class="level" >普通会员</div>
	    	</div>
		</div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
	    <div class="index-order">
	        <div class="group">
	                <div class="flex-col">
	                    <router-link to="" class="item">
	                        <img src="http://www.dinghuapai.cn/wap/img/uc/o1.png" class="ico"/>
	                        <div class="label">待付款</div>
	                    </router-link>
	                </div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
	                <div class="flex-col">
	                    <router-link to="" class="item">
	                        <img src="http://www.dinghuapai.cn/wap/img/uc/o2.png" class="ico"/>
	                        <div class="label">待配送</div>
	                    </router-link>
	                </div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
	                <div class="flex-col">
	                    <router-link to="" class="item">
	                        <img src="http://www.dinghuapai.cn/wap/img/uc/o3.png" class="ico"/>	
	                        <div class="label">待评价</div>
	                    </router-link>
	                </div>
	        </div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
	        <div class="all">
	            <i class="arrow"></i>
 <!--------------------------------------------------------------------------------------------------------------------------------->
	            <router-link to="" class="item">
	                <img src="http://www.dinghuapai.cn/wap/img/uc/o4.png" alt="" class="ico"/>
	                <div class="label">全部订单</div>
	            </router-link>
	        </div>
	    </div>
 <!--------------------------------------------------------------------------------------------------------------------------------->
		 <div class="index-menu mui-row ui-border-tb">
		  	<div class="col mui-col-xs-3" v-for="item in menu" :key="item.id">
		        <router-link to="" class="item">
		            <img class="ico" :src="item.img">
		            <div class="label">{{item.name}}</div>
		        </router-link>
		    </div>
		 </div>
		 <!---->
	 	<mt-button type="danger" size="large" @click.native="logout">
		        	退出
	    </mt-button>
 <!--------------------------------------------------------------------------------------------------------------------------------->
		<aside>
			<p class="iconfont icon-QQ"></p>
			<p class="iconfont icon-icon-test-copy"></p>
		</aside>
 <!--------------------------------------------------------------------------------------------------------------------------------->
 	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
import Footer from '@/components/Footer'
import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
	name: "login4",
	data: function() {
		return {
			 flag: false,
			 userinfo: '',
			 menu : [
			 {'id': 1,'name':'优惠券',    'img':'http://www.dinghuapai.cn/wap/img/uc/quan.png'},
			 {'id': 2,'name':'优惠码',    'img':'http://www.dinghuapai.cn/wap/img/uc/money.png'},
			 {'id': 3,'name':'我的评价',  'img':'http://www.dinghuapai.cn/wap/img/uc/pinjia.png'},
			 {'id': 4,'name':'我的足迹',  'img':'http://www.dinghuapai.cn/wap/img/uc/jiao.png'},
			 {'id': 5,'name':'个人信息',  'img':'http://www.dinghuapai.cn/wap/img/uc/user.png'},
			 {'id': 6,'name':'常用收货人','img':'http://www.dinghuapai.cn/wap/img/uc/list.png'},
			 {'id': 7,'name':'修改密码',  'img':'http://www.dinghuapai.cn/wap/img/uc/pwd.png'},
			 {'id': 8,'name':'在线咨询',  'img':'http://www.dinghuapai.cn/wap/img/uc/kefu.png'},
			 {'id': 9,'name':'关于订花派','img':'http://www.dinghuapai.cn/wap/img/uc/dhp.png'}
			 	],
			 	loading:false
		}
	},
	methods:{
		foots : function(){
			this.flag =! this.flag;
//			console.log(this.flag)
		},
		logout(){
			this.$store.dispatch("setUserNameA",'');
			this.$router.push({path : "/login"});
			Toast({
				  message: '已经退出',
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
	height:100%;background:#eee;
}
header{
	    display: flex;align-items: center;
	   justify-content: space-between;
	    height: 0.5rem; padding:0 0.05rem;
	    background-color: #ca0e25;width:100%;
	    color:#fff;
 .back-btn {
		    display: block;
		    padding: 0 0.05rem;
		    color:#fff;
		}
	span{
		color:#fff;
	}
}
/***********************************************************/
footer{
	position: absolute;top:0.5rem;
}
 aside{
        p:nth-of-type(1){
            position: fixed; bottom: 1rem; font-size: 0.45rem; right: 0.1rem; color: #0086B3;
        }
        p:nth-of-type(2){
            position: fixed; bottom: 0.6rem; font-size: 0.4rem; right: 0.13rem; color: #DF5000;
        }
    }
/**********************************************************/
 .index-user {
    overflow: hidden;
    height: 160px;
    color: #fff;
    font-size: 0;
    text-align: center;
    background: #d92943 url(http://www.dinghuapai.cn/wap/img/uc/userbg.jpg) no-repeat;
    background-size: cover;
    .avatar{
    	display: block;
	    margin: .45rem auto 0;
	    width: 60px;
	    height:60px;
	    border-radius: 50%;
	    background-color: #fff;
	    img{
	    	display: block;
		    width: 100%;
		    height: 100%;
		    border-radius: 50%;
	    }
    }
    .name{
    	margin:5px 0;
		    font-size: 12px;
		  height:15px;
    }
    .level{
    	font-size: 16px !important;
	    display: inline-block;
	    height: 30px;
	    font-size: .44rem;
	    color: rgba(255, 255, 255, 0.7);
	    background-color: rgba(0, 0, 0, 0.07);
	    border-radius: 100px;
    }
}
.index-order{
	display: flex;
    margin-bottom: 10px;
    height: 67px;
    text-align: center;
    background-color: #fff;
    width:100%;
    .group{
    	height:100%;width:80%;
    	flex-wrap: nowrap;display:flex;
    	justify-content:space-around;
    	border-right:1px solid #eee;
    	.flex-col{
    		height:100%;
			display: flex;
			justify-content: center;
			align-items:center;
			img{
				width:25px;
				height:27px;
				margin-bottom: 10px;
			}    	
    	}
    }
}
.all{
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	img{
		width:25px;
		height:27px;
		margin-bottom:10px;
	}
} 
.index-menu {
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    .mui-col-xs-3 {
	    width: 25%;border:1px solid #eee;
		 .item {
			    display: flex;
			    padding: 18px 0 0;
			    margin: 0 -1px -1px 0;
			    height: 90px;
			    font-size: 13px;
			    text-align: center;
			    color: #777;	
			    flex-direction: column;	
			    justify-content: center;
			    align-items: center;	    
			    img{
			    	width:30px;height:30px;display: block;
			    	margin-bottom:10px;
			    }
			    .label{
			    	width:100%;
			    }
			}
	}
} 
</style>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	username: "默认用户名",
	goods_name : []
}

// 持久化：从本地取出数据
if(localStorage.getItem("data")) {
	var data = JSON.parse(localStorage.getItem("data"));
	state = data;
}

function saveTolocal(state) {
	// 持久化：保存数据
	localStorage.setItem("data", JSON.stringify(state));
}

const mutations = {
	setUserName: function(state, username) {
		state.username = username;
		// 持久化：保存数据
		saveTolocal(state);
	},
	setGoods_Name: function(state, goods_info) {
		state.goods_name.push(goods_info);
		// 持久化：保存数据
		saveTolocal(state);
	},
}

const actions = {
	setUserNameA: function({commit}, username) {
		commit("setUserName", username)
	},
	setGoods_NameA: function({commit}, goods_info) {
		commit("setGoods_Name", goods_info)
	},
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
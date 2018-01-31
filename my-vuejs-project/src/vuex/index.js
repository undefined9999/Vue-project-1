import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	username: "",
	cart:[]
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

function delTolocal(state) {
	// 持久化：保存数据
	localStorage.removeItem("data", JSON.stringify(state));
}

const mutations = {
	setUserName: function(state, username) {
		state.username = username;
		// 持久化：保存数据
		saveTolocal(state);
	},
	addToCart: function(state, goods_info) {
		state.cart.push(goods_info);
		// 持久化：保存数据
		saveTolocal(state);
	},
	delToCart: function(state) {
		state.cart.pop();
		// 持久化：保存数据
		delTolocal(state);
	}
}

const actions = {
	setUserNameA: function({commit}, username) {
		commit("setUserName", username)
	},
	addToCartA: function({commit}, goods_info) {
		commit("addToCart", goods_info);
	},
	delToCartA: function({commit}) {
		commit("delToCart");
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
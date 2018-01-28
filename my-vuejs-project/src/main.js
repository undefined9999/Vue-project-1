// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex' // Vuex的配置文件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Header from './components/Header'
import Footer from './components/Footer'

Vue.config.productionTip = false
Vue.component("common-header", Header);
Vue.component("common-footer", Footer);

Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
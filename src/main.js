import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

//全局css样式重置
import './assets/reset.css'
//移动端1px问题
import './assets/border.css'
//解决移动端click300ms响应问题
// import fastClick from 'fastclick'  
// fastClick.attach(document.body); 
//vuex全局状态管理
import store from './store'
//vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

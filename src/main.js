import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index.js';
import echarts from 'echarts';
import axios from 'axios';//引入axios
import VueAxios from 'vue-axios';//引入axios
import SlideVerify from 'vue-monoplasty-slide-verify';//引入了拼图验证码  组件
import vueJsonp from 'vue-jsonp'//百度地图-jsonp
import BaiduMap from 'vue-baidu-map'//百度地图

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.websiteUrl='http://localhost:8888';
//Vue.prototype.websiteUrl='http://115.29.142.5:8888';
Vue.use(VueAxios,axios); //使用axios
Vue.use(SlideVerify); //使用滑块验证组件
Vue.use(vueJsonp);//百度地图-jsonp
Vue.use(BaiduMap, {
  ak: 'brdBS22T3Ic5zeAqnqHXGisSWhQNU91P'    //这个地方是官方提供的ak密钥
});



new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
});

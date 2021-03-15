import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/icon.css'

import axios from 'axios'
// import VueResouce from 'vue-resource' =>换成axios(一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端)
import Vuex from 'vuex' //状态管理
import App from './App.vue'
import store from './Vuex/store'
import router from './Router/index'
import * as echarts from 'echarts'
import VueI18n from 'vue-i18n' //多語言切換
import {messages} from './components/common/En-Zh'

//将$echarts属性全局化，在任何页面在通过this.$echarts调用;加$是为了避免和已被定义的数据、方法、计算属性产生冲突。
Vue.prototype.$echarts = echarts;

Vue.prototype.$axios = axios
// Vue.use(VueResouce);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(ElementUI,{size:'small'});

//开启debug模式
Vue.config.debug = true;

//创建带有选项的 VueI18n 实例
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})






console.log('ok')
//在webpack 中使用开发的Vue
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'
import app from './app.vue'
//在组件中使用axios
import axios from 'axios'
Vue.prototype.$axios = axios;

import './lib/MUI/css/mui.min.css'
import 'mint-ui/lib/style.css'
import './lib/MUI/css/icons-extra.css'

// 头部导入
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
    el:"#app",
    data:{
        msg:'123'
    },
    render:c => c(app),
    router,
    
})












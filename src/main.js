console.log('ok')
//在webpack 中使用开发的Vue
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'
import app from './app.vue'

import './lib/MUI/css/mui.min.css'
import 'mint-ui/lib/style.css'

// 头部导入
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue({
    el:"#app",
    data:{
        msg:'123'
    },
    render:c => c(app),
    router
})












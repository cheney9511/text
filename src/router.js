
import VueRouter from 'vue-router'

import home from './components/home.vue'
import contact from './components/contact.vue'
import shopcar from './components/shopcar.vue'
import search from './components/search.vue'




// 3.创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/contact',component:contact},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search}
    ],
    linkActiveClass:"mui-myclass" //自定义选中的类名
})


// 把路由对象暴露出去
export default router
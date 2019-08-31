

import Vue from 'vue'
import VueRouter from 'vue-router' //导入vue路由组件
import { Header } from 'mint-ui'; 
import 'mint-ui/lib/style.min.css'//导入mint-ui组件css
import './lib/mui/css/mui.min.css' //导入minui组件css
import './lib/mui/css/icons-extra.css'



//注册mint-ui组件
Vue.component(Header.name, Header);

//注册路由
Vue.use(VueRouter)


import App from './App.vue'
import router from './router.js'
var vm=new Vue({
    el:'#app',
    render:c=>c(App),
    router
   
})

//console.log('ok')

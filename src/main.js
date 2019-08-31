

import Vue from 'vue'

import { Header,Swipe, SwipeItem } from 'mint-ui'; 
import 'mint-ui/lib/style.min.css'//导入mint-ui组件css
import './lib/mui/css/mui.min.css' //导入minui组件css
import './lib/mui/css/icons-extra.css'



//注册mint-ui组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//注册路由
import VueRouter from 'vue-router' //导入vue路由组件
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)



import App from './App.vue'
import router from './router.js'
var vm=new Vue({
    el:'#app',
    render:c=>c(App),
    router
   
})

//console.log('ok')

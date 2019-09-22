

import Vue from 'vue'

//import { Header,Swipe, SwipeItem,Button,Lazyload  } from 'mint-ui'; 
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'//导入mint-ui组件css
import './lib/mui/css/mui.min.css' //导入minui组件css
import './lib/mui/css/icons-extra.css'



//注册mint-ui组件
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)
Vue.use(mintUI)
//注册路由
import VueRouter from 'vue-router' //导入vue路由组件
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http:www.ssrts' //修改请求域名
Vue.http.options.emulateJSON=true //设置表单提交的格式

//引入图片缩略图组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
     barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })

//引入Vuex状态管理
import Vuex from 'vuex'
Vue.use(Vuex)

var store=new Vuex.Store({
    state:{
      car:[]
    },
    mutations:{
       AddToCar(state,goodsInfo){
           var flag=false  //设置购物车是否有已添加的商品标志
           state.car.some(item=>{
             if(item.id==goodsInfo.id){
               item.count+=parseInt(goodsInfo.count);
               flag=true;
               return true;
             }
           });

           if(!flag){
             state.car.push(goodsInfo);
           }
       }
    },
    getters:{

    }
})



import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})


import App from './App.vue'
import router from './router.js'
import { stat } from 'fs'
var vm=new Vue({
    el:'#app',
    render:c=>c(App),
    router,
    Vuex
   
})

//console.log('ok')

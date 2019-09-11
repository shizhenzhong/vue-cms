import VueRouter from 'vue-router'


//导入tabbar组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsListContainer from './components/news/NewsListContainer.vue'
import NewsInfoContainer from './components/news/NewsInfoContainer.vue'
import PhotoList from './components/photo/photolist.vue'
import PhotoInfo from './components/photo/photoinfo.vue'
import vuepreview from './components/photo/vuepreview.vue'
var  router=new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsListContainer},
        {path:'/home/newsInf/:id',component:NewsInfoContainer},
        {path:'/home/photolist',component:PhotoList},
        {path:'home/photolist/:id',component:PhotoInfo},
        {path:"/home/vuepreview",component:vuepreview}
    ],
    linkActiveClass:'mui-active'
})

export default router
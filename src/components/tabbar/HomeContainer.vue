<template>
    <div>
        
       <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

       <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <img src="../../images/menu1.png"/>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                    <img src="../../images/menu2.png"/>
		                    <div class="mui-media-body">图片分享</div>
                            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodslist">
		                     <img src="../../images/menu3.png"/>
		                    <div class="mui-media-body">商品购买</div>
                            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/vuepreview">
		                     <img src="../../images/menu4.png"/>
		                    <div class="mui-media-body">留言反馈</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png"/>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu6.png"/>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
        
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import swiper from '../subComponents/swiper.vue'

export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    created(){
       this.getLunbotu()
    },
    methods:{
        getLunbotu(){
        this.$http.get("http://vue.study.io/api/getlunbo").then(result=>{
            if(result.body.status===0){
                this.lunbotuList=result.body.message;
            }else{
                Toast('获取图片失败');
            }
        })
        }
    },
    components:{
        swiper
    }

}
</script>
<style lang="scss" scoped>
    
   
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        background-color: #fff;
        border: 0;
        img{
            width: 50%;
            height: 50%;
        }

    }
</style>
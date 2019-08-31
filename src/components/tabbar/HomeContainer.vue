<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.url" alt="" >
            </mt-swipe-item>
           
        </mt-swipe>
        <h1>HomeContainer</h1>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';


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
    }

}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: green;
            }
            &:nth-child(3){
                background-color: aquamarine;
            }
            img{
                width:100%;
                height: 100%;
            }
        }
    }
</style>
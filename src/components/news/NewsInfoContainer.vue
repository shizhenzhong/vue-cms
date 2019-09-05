<template>
    <div class="newsInfo_container">
        <h1 class="title">{{newsInfo.title}}</h1>
        <p class="subTitle">
            <span>发表时间:{{newsInfo.addtime|dateFormat}}</span>
            <span>点击次数:{{newsInfo.click}}</span>
        </p>
        <hr>
       <!--新闻详情内容区-->
       <div class="content" v-html="newsInfo.content"></div>
       <!--评论子组件区-->
       <comment-box></comment-box>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import comments from '../subComponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            this.$http.get("api/getNewsInfo"+this.id).then(result=>{
                if(result.body.status===0){
                   this.newsInfo=result.body.message[0]
                }else{
                   Toast("获取新闻详情失败")
                }
            })
        }
    },
    component:{
        "comment-box":comments
    }
}
</script>
<style lang="scss">
    .newsInfo_container{
        padding:0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            color:red;
            margin: 15px 0;
        }
        .subTitle{
            font-size: 14px;
            color: #226aff;
            display: flex;
            justify-content:space-between;
        }
        .content{
            img{
                width: 100%;
            }
        }


    }

</style>
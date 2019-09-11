<template>
    <div class="photoinfo-container">
       <h3>{{photoinfo.title}}</h3>
       <p class="subtitle">
         <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
         <span>点击：{{photoinfo.click}}次</span>
       </p>
       <hr>
       
       <!---图片缩略区-->
       <div class="thumb">
         <vue-preview :slides="lists" @close="handleClose"></vue-preview>
       </div>
       <!---图片内容区----->
       <div class="content" v-html="photoinfo.content"></div>
       
       <!---图片评论区----->
       <ctm-box :id="id"></ctm-box>

    </div>
</template>
<script>

import comment from '../subComponents/comment.vue'
export default {
    data(){
      return{
          id:this.$route.params.id,
          photoinfo:{},
          lists:[]
      }
    },
    created(){
        this.getPhotoInfo();
    },
    methods: {

        //获取图片的详情
        getPhotoInfo(){
            this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.photoinfo=result.body.message[0];
                }
            });
        },
        getThumbs(){
             this.$http.get("api/getthumbimage/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.lists=result.body.message.forEach(item=>{
                        item.w=600,
                        item.h=400
                    });
                }
            });
        },
        handleClose () {
        console.log('close event')
      }
    },
    components:{
        "ctm-box":comment
    }
    
}
</script>
<style lang="scss" scoped>
    .photoinfo-container{
        padding: 3px;
        h3{
            font-size: 15px;
            color: #26a2ff;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            font-size: 13px;
            display: flex;
            justify-content: space-between;
        }
        .content{
           font-size: 13px;
           line-height: 30px;
        }
        .thumb{
            img{
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
        }
    }
</style>
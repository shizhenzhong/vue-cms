<template>
    <div class="goosinfo_container">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swiper :lunbotuList="lunbotulist"></swiper>
					</div>
				</div>
		</div>

        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				
		</div>


        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
		</div>
 
    </div>
</template>
<script>
import swiper from '../subComponents/swiper.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,  //获取商品图片id，
            lunbotulist:[]

        }
    },
    created(){
        this.getlunbolist();
    },
    methods: {
        getlunbolist(){
            this.$http.get("api/getlunbolist"+this.id)
            .then(res=>{
                if(res.body.status===0){
                    res.body.message.forEach(item=>{
                        item.url=item.src;
                    })
                    this.lunbotulist=res.body.message;
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
    .goosinfo_container{
          background-color: #eee;
          overflow: hidden;
    }
</style>
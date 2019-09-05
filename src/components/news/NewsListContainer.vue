<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left"  :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'><span>发表时间：{{item.pulishTime|dateFormat}}</span><span>点击次数：{{item.click}}次</span></p>
						</div>
					</router-link>
				</li>
              
				
			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newslist:[]
        }
    },
    created(){
         this.getNewsList();
    },
    methods: {
        getNewsList(){
            this.$http.get('/api/getNewsList').then(reult=>{
                if(result.body.status===0){
                   this.newslist=result.body.message
                }else{
                   
                     Toast('获取新闻列表失败')
                }
            });
        }
    }
}


</script>
<style lang="scss" scoped>
 .mui-media-body{
     font-size: 14px;
    .mui-ellipsis{
        font-size: 12px;
        color: #22a6ff;
        display:flex;
        justify-content: space-between;
    }
 }
</style>
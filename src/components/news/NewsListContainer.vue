<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left"  :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'><span>发表时间：{{item.pulishTime}}</span><span>点击次数：{{item.click}}次</span></p>
						</div>
					</a>
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
         getNewsList()
    },
    methods: {
        getNewsList(){
            this.$thhp.get('/api/getNewsList').then(reult=>{
                if(result.body.status===0){
                   Toast('获取新闻列表失败')
                }else{
                    this.newslist=result.body.message
                }
            })
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
<template>
    <div>
      	<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a  :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="item in cates" :key="item.id">
							{{item.title}}
						</a>
					
					</div>
				</div>

			</div>
    </div>
</template>
<script>

import mui from '../../lib/mui/js/mui.min.js'
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
           cates:[]
        }
	},
	created(){
        this.getCategories()
	},
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	       deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
       });
    },
    methods: {
        getCategories(){
			this.$http.get("api/getCategory").then(result=>{
				if(result.body.status===0){
                       this.cates=result.body.message.unshift({title:"全部",id:0})
				}else{
                   Toast("获取图片分类失败")
				}
			})
		}
    },
}
</script>
<style lang="scss" scoped>
     * { touch-action: pan-y; } 
</style>
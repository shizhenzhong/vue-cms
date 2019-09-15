<template>
    <div class="goosinfo_container">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swiper :lunbotuList="lunbotulist" :isfull="false"></swiper>
					</div>
				</div>
		</div>

        <div class="mui-card">
				<div class="mui-card-header">{{goodsInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					   <p>
                           市场价：<del>¥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价: <span class="now_price">¥{{goodsInfo.cell_price}}</span>
                       </p>
                       <p>
                           购买数量：<numbox :max="goodsInfo.stock_quantity"></numbox>
                       </p>
                       <p>
                           <mt-button type="primary" size="small">立即购买</mt-button>
                           <mt-button type="danger" size="small">加入购物车</mt-button>
                       </p>
					</div>
				</div>
				
		</div>


        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsInfo.goods_no}}</p>
                        <p>库存情况:{{goodsInfo.stock_quantity}}件</p>
                        <p>上架时间:{{goodsInfo.add_time| dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                   <mt-button type="primary" size="lager" plain @click="goDesc(id)">图文介绍</mt-button>
                   <mt-button type="danger" size="lager" plain @click="goComment(id)">商品评论</mt-button>
                </div>                    
		</div>
 
    </div>
</template>
<script>
import swiper from '../subComponents/swiper.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,  //获取商品图片id，
            lunbotulist:[],
            goodsInfo:{}

        }
    },
    created(){
        this.getlunbolist();
        this.getGoodsInfo();
    },
    methods: {
        getlunbolist(){
            this.$http.get("api/getlunbolist/"+this.id)
            .then(res=>{
                if(res.body.status===0){
                    res.body.message.forEach(item=>{
                        item.url=item.src;
                    })
                    this.lunbotulist=res.body.message;
                }
            })
        },
        getGoodsInfo(){
            this.$http.get("api/getGoodsInfo/"+this.id).then(result=>{
                if(result.body.status===0){
                     this.goodsInfo=result.body.message[0];
                }
            })

        },
        goDesc(id){
            this.$router.push({name:"goodsDesc",params:{id}});
        },
        goComment(id){
            this.$router.push({name:"goodsComment",params:{id}});
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
          .now_price{
              color:red;
              font-weight:bold;
              font-size: 16px;
          }
         .mui-card-footer{
             display: block;
             button{
                 margin: 15px 0;
             }
         }

    }
</style>
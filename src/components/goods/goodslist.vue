<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="" srcset="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">¥{{item.sell_price}}</span>
                    <span class="old">¥{{item.market_price}}</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
        <!-- <div class="goods-item">
            <img src="https://img11.360buyimg.com/cms/jfs/t25468/90/1862724202/251453/18c13d7/5bbead1dN46606f08.jpg!q95.webp" alt="" srcset="">
            <h1 class="title">OPPO K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏</h1>
            <div class="info">
                <p class="price">
                    <span class="new">¥1399.00</span>
                    <span class="old">¥1599.00</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img11.360buyimg.com/cms/jfs/t2s5468/90/1862724202/251453/18c13d7/5bbead1dN46606f08.jpg!q95.webp" alt="" srcset="">
            <h1 class="title">OPPO K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝</h1>
            <div class="info">
                <p class="price">
                    <span class="new">¥1399.00</span>
                    <span class="old">¥1599.00</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            goodslist:[],
            pageIndex:1
        }
    },
    created(){
       this.getGoodslist();
    },
    methods: {
        getGoodslist(){
            this.$http.get("api/getGoodslist?pageindex"+this.pageIndex)
            .then(result=>{
                if(result.body.status===0){
                    this.goodslist=ths.goodslist.concat(result.body.message);
                }
            });
        },
        getMore(){
            this.pageIndex++;
            this.getGoodslist();
        },
        goDetail(id){
            this.$router.push({name:"goodsinfo",params:{id}})
        }

    },

}
</script>
<style lang="scss" scoped>
    .goods-list{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        padding:0 7px;
        
        .goods-item{
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin-top:10px;
            min-height: 300px;
            img{
                padding-top:5px;
                width: 100%;
            }
            .title{
                font-size: 14px;
                padding:2px;
            }
            .info{
                p{
                  margin:0;
                  padding:4px;
                  display: flex;
                  justify-content: space-between;
                }
                background-color: #eee;
                
                .price{
                   .new{
                       color: red;
                       font-weight: bold;
                   }
                   .old{
                       text-decoration: line-through;
                   }
                }
                
               
               
            }
        }
    }
</style>
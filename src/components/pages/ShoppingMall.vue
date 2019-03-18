<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3"><img :src="locationIcon"  class="locationIcon"></van-col>
                <van-col span="16"><input type="text" class="search-input"></van-col>
                <van-col span="5"><van-button size="mini" class="search-btn">查找</van-button></van-col>
            </van-row>
        </div>
        <div class="swiper-area">
            <van-swipe :autoplay="1000" >
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.image" class="swiperImg" >
                </van-swipe-item>
            
            </van-swipe>
        </div>
        <div class="type-bar">
            <div v-for="(category,index) in category" :key="index">
                <img :src="category.image">
                <span>{{category.mallCategoryName}}</span>
            </div>
        </div>
        <div class="ad-bar">
            <img :src="adBanner.PICTURE_ADDRESS" width="100%" >
        </div>
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                   <swiper-slide v-for="(item,index) in recommendGoods " :key="index" class="slideGo">
                       <div class="recommend-item">
                           <img :src="item.image" width="80%">
                           <div>{{item.goodsName}}</div>
                           <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice  | moneyFilter}})</div>
                       </div>
                   </swiper-slide> 
                </swiper>
            </div>
        </div>

    </div>
   
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { toMoney } from '@/fillter/moneyFilter.js'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {
                        swiper,
                        swiperSlide
                },
        data() {
            return {
                    
                    swiperOption:{
                        slidesPerView :3
                    },
                    locationIcon:require('../../assets/images/location.png'),
                    category:[],
                    adBanner:[],
                    bannerPicArray:[],
                    recommendGoods:[],
     
            }
        },
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }
        },
        created(){
            this.$axios({
                url: 'http://localhost:8080/static/shopJson.json',
                method:'get',
            })
            .then(response =>{
                console.log(response);
                if(response.status == '200'){
                    this.category = response.data.data.category;
                    this.adBanner = response.data.data.advertesPicture;
                    this.bannerPicArray = response.data.data.slides;
                    this.recommendGoods = response.data.data.recommend;  //推荐商品
                    console.log(this.bannerPicArray)
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
.search-bar{
      height: 2.2rem;
      background-color: #e5017d;  
  }
.search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid #eee !important ;
      background-color: #e5017d;
      color:#fff;
}
.locationIcon{
    width: 65%;
    padding-top: 0.2rem;
}
.swiper-area{
     width:20rem;
      clear:both;
}
.swiperImg{
    width:20rem;
    height:12rem;
}
.search-btn{
    margin-top: .5rem;
}
.type-bar{
    height: 6rem; 
    background-color: #fff;
    margin:0 .3rem .3rem .3rem;
    border-radius: 0.3rem;
    display: flex;
    font-size:14px;
    flex-direction: row;
    flex-wrap: nowrap;
}
.type-bar div{
    padding: 0.3rem;
    font-size: 12px;
}
.type-bar img{
    width: 50px;
    height: 50px;
    margin-top: 0.4rem;
    
}
.ad-bar{
    height: 2rem;
    
}
.recommend-area{
    background-color: #fff;
    margin-top: .3rem;
}
.recommend-title{
    border-bottom:1px solid #eee;
    font-size:14px;
    padding:.2rem;
    color:#e5017d;
}
.recommend-body{
       border-bottom: 1px solid #eee;
}
.recommend-item{
    width:99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
}
</style>


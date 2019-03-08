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
                    <img :src="banner.imageUrl" class="swiperImg" >
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
    </div>
   
</template>

<script>

    export default {
        data() {
            return {
                    locationIcon:require('../../assets/images/location.png'),
                    bannerPicArray:[
                        {imageUrl:require('../../assets/images/timg1.jpg')},
                        {imageUrl:require('../../assets/images/timg2.jpg')},
                        {imageUrl:require('../../assets/images/timg3.jpg')},
                    ],
                    category:[],
                    adBanner:[]
            }
        },
        created(){
            this.$axios({
                url: 'https://www.easy-mock.com/mock/5c822923e2062b28ed86bdb5/shoppingMall/getInfo',
                method:'get',
            })
            .then(repsonse =>{
                console.log(repsonse);
                if(repsonse.status == '200'){
                    this.category = repsonse.data.data.category;
                    this.adBanner = repsonse.data.data.advertesPicture
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
</style>


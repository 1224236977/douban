<template>
    <div class="home">
        <MyHeader col="#42bd55">
            <div class="homeHeader_wrap">
              <router-link :to="{name:'Search',params:{myUrl:'Home'}}">
                <input type="text" class="home_search" placeholder="影视 图书 唱片 小组等">
              </router-link>
              <img src="../../assets/images/ic_search_gray.png" class="search_icon">
              <img src="../../assets/images/ic_scan_gray.png" slot="leftImg" class="scan_icon">
              <router-link :to="{name:'Register',params:{myUrl:'Home'}}" slot="rightImg" class="weixin_icon">
                <img src="../../assets/images/ic_chat_white.png">
              </router-link>
            </div>
        </MyHeader>
        <div class="banner">
          <Banner swiperid="swiper01" paginationDirection="right" :button="true" :slidesPerView="1" :freeMode="false">
            <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/01.jpg"></div>
            <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/02.jpg"></div>
            <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/03.jpg"></div>
          </Banner>
        </div>
        <div class="home_main">
          <div class="hot"><span>热点</span></div>
          <!--<HomeItem v-for="(item,index) in arr" :key="item.id" :url='item.target.author.avatar' :title="item.title" :inner="item.target.desc" :author="'作者：'+item.target.author.name"></HomeItem>-->
          <HomeItem v-for="(item,index) in arr" :key="item.id" :url='item.url' :title="item.title" :inner="item.inner" :author="item.author"></HomeItem>
        </div>
    </div>
</template>
<script>
  import MyHeader from '../../components/Header'
  import HomeItem from '../../components/HomeItem'
  import Banner from '../../components/Bannere'
//  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
      components:{
        MyHeader,
        HomeItem,
        Banner,
      },
      data:function () {
        return {
            arr:[
              {
                url:require('../../assets/images/home_03.jpg'),
                title:"我在论文“造假”工厂打工:代写、包发,年产值10亿",
                inner:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                author:'作者：土豆公社'
              },
              {
                url:require('../../assets/images/home_03.jpg'),
                title:"我在论文“造假”工厂打工:代写、包发,年产值10亿",
                inner:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                author:'作者：土豆公社'
              },
              {
                url:require('../../assets/images/home_03.jpg'),
                title:"我在论文“造假”工厂打工:代写、包发,年产值10亿",
                inner:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                author:'作者：土豆公社'
              },
              {
                url:require('../../assets/images/home_03.jpg'),
                title:"我在论文“造假”工厂打工:代写、包发,年产值10亿",
                inner:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                author:'作者：土豆公社'
              },
              {
                url:require('../../assets/images/home_03.jpg'),
                title:"我在论文“造假”工厂打工:代写、包发,年产值10亿",
                inner:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                author:'作者：土豆公社'
              },
              {
                url:require('../../assets/images/home_03.jpg'),
                title:"我在论文“造假”工厂打工:代写、包发,年产值10亿",
                inner:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                author:'作者：土豆公社'
              },
            ],
//            arr:[],
        }
      },
//      mounted:function () {
//        this.search()
//      },
//      methods:{
//        search:function () {
//            this.axios.get('/api/homeData').then((response) => {
//              console.log(response.data.data.recommend_feeds);
//              this.arr=response.data.data.recommend_feeds
//            })
//          }
//      }
  }
</script>
<style>
    .home_search{height: 0.3rem;width: 3.04rem;border-radius: 4px;border: none;padding: 0 0.3rem;margin-right: 0.3rem;
      outline: none;font-size: 0.12rem}
    .homeHeader_wrap{position: relative}
    .homeHeader_wrap img{width: 0.16rem;}
    .search_icon{position: absolute;left: 0.15rem;top: 0.14rem;}
    .scan_icon{position: absolute;right: 0.48rem;top: 0.14rem;}
    .homeHeader_wrap .weixin_icon{position: absolute;right: 0.13rem;top: 0.06rem;z-index: 1}
    .banner{height: 1.38rem;background-color: pink;margin-bottom: 0.38rem;}
    .banner img{width: 100%}
    .home_main{position: relative}
    .hot{height: 0.2rem;border-left: 4px solid #ff7b40;text-align: left;padding-left: 0.17rem;position: absolute;top: -0.2rem}
    .hot span{color:#ff7b40;font-size: 0.16rem}
</style>

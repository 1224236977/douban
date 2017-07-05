<template>
  <div class="city_main">
    <div class="location">
      <div class="l_city">当前城市：<span>{{ city }}</span></div>
      <div class="l_city">类型 时间 地点</div>
    </div>
    <AudioItem v-for="(item,index) in arr" :key="item.id" :tlt="item.tlt">
      <Banner swiperid="swiper03" :loop='false' :pagination="false" :touchRatio="1" :autoplay="0" :slidesPerView="3.5">
        <div class="swiper-slide" slot="swiper-con" v-for="(item2,index) in item.inArr">
          <AudioPic :key="item.id" :adurl="item2.adurl" :name="item2.name" :comment="item2.comment"></AudioPic>
        </div>
      </Banner>
    </AudioItem>
    <div class="heightbox"></div>
  </div>
</template>
<script>
  import AudioItem from './AudioItem'
  import AudioPic from './AudioPic'
  import Banner from './Bannere'
  export default{
    components:{
      AudioItem,
      AudioPic,
      Banner
    },
    data:function () {
      return{
        arr:[
          {
            tlt:"热门活动",
            inArr:[
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
            ]
          },
          {
            tlt:"官方售票",
            inArr:[
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/city1_03.jpg'),
                name:'话剧《白鹿原》',
                comment:"暂无评论"
              },
            ]
          },
        ],
        city:"武汉"
      }
    }
  }
</script>
<style>
  .location{height: 0.46rem;background: #fff;margin-top: 0.1rem;margin-bottom: 0.15rem;line-height: 0.46rem;color:#bdbdbd}
  .location span{color: #62c16f}
  .l_city{width:1.73rem;margin: 0px 0.17rem;float: left;background: url("../assets/images/city2_03.jpg") no-repeat center right;}
  .heightbox{height: 0.53rem}
</style>

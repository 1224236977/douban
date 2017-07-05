<template>
  <div class="book_main">
    <AudioItem v-for="(item,index) in arr" :key="item.id" :tlt="item.tlt">
      <Banner swiperid="swiper03" :loop='false' :pagination="false" :touchRatio="1" :autoplay="0" :slidesPerView="3.5">
        <div class="swiper-slide" slot="swiper-con" v-for="(item2,index) in item.inArr">
           <AudioPic :key="item.id" :adurl="item2.adurl" :name="item2.name" :comment="item2.comment"></AudioPic>
        </div>
      </Banner>
    </AudioItem>
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
            tlt:"新书快递",
            inArr:[
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              }

            ]
          },
          {
            tlt:"最受关注的虚构类图书",
            inArr:[
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              },
              {
                adurl:require('../assets/images/book_03.jpg'),
                name:'外婆的道歉信',
                comment:"暂无评论"
              }

            ]
          }
        ]
      }
    }
  }
</script>

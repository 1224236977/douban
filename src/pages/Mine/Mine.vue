<template>
  <div class="mine">
    <MyHeader>
      <span>我的</span>
      <img src="../../assets/images/ic_settings.png" slot="rightImg">
    </MyHeader>
    <div class="mine_main">
      <!--登录注册-->
      <div class="register">
        <div class="register_pic"><img src="../../assets/images/avatar_male_70.png"></div>
        <div class="register_frame"><router-link :to="{name:'Register',params:{myUrl:'Mine'}}">登录 / 注册</router-link></div>
      </div>
      <!--提醒-->
      <div class="remind">
        <div class="remind_top">
          <img src="../../assets/images/ic_mine_notification.png" class="l_pic">
          <span>提醒</span>
          <img src="../../assets/images/ic_arrow_gray_small.png" class="r_pic right_arrows">
        </div>
        <div class="remind_bottom">暂无新提醒</div>
      </div>
      <!--icon-->
      <div class="mine_icons">
        <MineItem v-for="(item,index) in MineArr":key="item.id" :url="item.url" :txt="item.txt"></MineItem>
        <div class="mine_line"></div>
        <div class="mine_line mine_line2"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from '../../components/Header'
  import MineItem from '../../components/MineItem'
  export default{
    data:function () {
      return {
          MineArr:[
            {
                url:require('../../assets/images/ic_my_likes.png'),
                txt:"喜欢"
            },
            {
              url:require('../../assets/images/ic_my_note.png'),
              txt:"日记"
            },
            {
              url:require('../../assets/images/ic_my_album.png'),
              txt:"相册"
            },
            {
              url:require('../../assets/images/ic_my_status.png'),
              txt:"我的广播"
            },
            {
              url:require('../../assets/images/ic_my_movies_tvs.png'),
              txt:"电视·电视"
            },
            {
              url:require('../../assets/images/ic_my_books.png'),
              txt:"读书"
            },
            {
              url:require('../../assets/images/ic_my_music.png'),
              txt:"音乐"
            },
            {
              url:require('../../assets/images/ic_my_events.png'),
              txt:"同城活动"
            },
            {
              url:require('../../assets/images/ic_my_likes.png'),
              txt:"豆瓣时间"
            },
            {
              url:require('../../assets/images/ic_my_doulist.png'),
              txt:"豆列"
            },
            {
              url:require('../../assets/images/ic_my_orders.png'),
              txt:"订单"
            },
            {
              url:require('../../assets/images/ic_my_wallet.png'),
              txt:"钱包"
            }
          ]
      }
    },
    components:{
      MyHeader,
      MineItem
    },
  }
</script>
<style>
  .mine_main{background-color: #f8f8f8;height: 7.36rem;}
  .register{height: 1rem;background-color: #51bf63;padding-top: 0.26rem;text-align: left}
  .register_pic{width: 0.66rem;height: 0.66rem;border-radius: 0.7rem;background-color: #fff;border: 2px solid #fff;
    display: inline-block;margin: 0px 0.66rem 0px 0.2rem;}
  .register_pic img{width: 100%;}
  .register_frame{display: inline-block;width: 1.78rem;height: 0.38rem;border-radius: 4px;border: 1px solid #fff;line-height: 0.38rem;
  text-align: center;position: relative;bottom: 0.26rem;}
  .register_frame a{color: #fff;font-size: 0.12rem;}
  .remind{height: 1rem;padding-left: 0.2rem;background-color: #fff;margin-top: 0.14rem;text-align: left}
  .remind_top{height: 0.53rem;border-bottom: 1px solid #f2f2f2;line-height: 0.53rem;}
  .remind_top img{width: 0.3rem;padding-top: 0.12rem;}
  .remind_top span{font-size: 0.14rem;padding-left: 0.14rem}
  .l_pic{float: left}
  .r_pic{float: right}
  .right_arrows{padding-right: 0.12rem}
  .remind_bottom{height: 0.46rem;line-height: 0.46rem;text-align: center;font-size: 0.14rem;color: #d1d1d1}
  .mine_icons{height: 3.1rem;margin-top: 0.16rem;background-color: #fff;position: relative}
  .mine_line{position: absolute;height: 1px;width: 100%;background-color:#f6f6f6;left: 0 ;top: 1rem;}
  .mine_line2{bottom: 1.06rem;top: auto}
</style>

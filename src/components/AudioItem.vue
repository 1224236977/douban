<template>
  <div class="audioitem">
      <div class="audio_top">
          <h4 v-text="tlt">影院热映</h4>
          <div class="more">更多<img src="../assets/images/audio_03.jpg"></div>
      </div>
      <div class="audioPiclistwrap">
          <slot></slot>
      </div>
  </div>
</template>
<script>
//  import '../assets/libs/swiper/js/swiper.js'
//  import Banner from '../components/Bannere'
  export default{
      props:['tlt',
//        {
//          swiperid:{
//            type:String,
//            default:''
//          },
//          effect:{
//            type:String,
//            default:'slide'
//          },
//          direction:{
//            type:String,
//            default:'horizontal'
//          },
//        },
      ],
      components:{
      }
//      mounted:function () {
//        var That=this;
//        new Swiper('.'+That.swiperid,{
//          direction:That.direction,
//          effect:That.direction,
//          paginationClickable:true,
//          touchMoveStopPropagation : false,
//          touchRatio:0.4
//        })
//      },
  }
</script>
<style>
  .audioitem{padding-left: 0.15rem;background-color: #fff;margin-bottom: 0.2rem;padding-bottom: 0.2rem;}
  .audio_top{height: 0.65rem;line-height: 0.65rem;}
  .audio_top h4{float: left;font-size: 0.16rem}
  .more{float: right;color: #2ba737;padding-right: 0.18rem;}
  .more img{width: 0.06rem;height: 0.1rem;margin-left: 0.05rem}
  .audioPiclistwrap{position: relative;width: 100%;height: 1.84rem}
  /*.audioPiclist{overflow: hidden;width: 100%;position: absolute;}*/
  /*.clearfix::after{content: "200B";height:0;font-size: 0;display: block;clear: both;}*/
</style>

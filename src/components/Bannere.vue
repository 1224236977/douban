<template>
  <div class="swiper-container" :class="swiperid">
      <div class="swiper-wrapper">
          <!--<div class="swiper-slide">-->
            <slot name="swiper-con"></slot>
          <!--</div>-->
          <!--<slot></slot>-->
      </div>
      <div :class='{"swiper-pagination":pagination}' :style='{"text-align":paginationDirection}'></div>
      <div :class='{"swiper-button-prev":button}'></div>
      <div :class='{"swiper-button-next":button}'></div>
  </div>
</template>
<script>
  import '../assets/libs/swiper/js/swiper.js'
  export default{
      props:{
        swiperid:{
          type:String,
          default:''
        },
        pagination:{
            type:Boolean,
            default:true
        },
        paginationDirection:{
            type:String,
            default:"center"
        },
        loop:{
            type:Boolean,
            default:true
        },
        autoplay:{
            type:Number,
            default:1500,
        },
        effect:{
            type:String,
            default:'slide'
        },
        direction:{
            type:String,
            default:'horizontal'
        },
        paginationType:{
            type:String,
            default:'bullets'
        },
        button:{
            type:Boolean,
            default:false
        },
        touchRatio:{
            type:Number,
            default:0.4
        },
        slidesPerView:{
          type:Number,
          default:0
        },
        freeMode:{
            type:Boolean,
            default:true
        },
        freeModeMomentum:{
            type:Boolean,
            default:false
        }
      },
      mounted:function () {
        var That=this;
        new Swiper('.'+That.swiperid,{
          pagination:'.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          paginationType:That.paginationType,
          direction:That.direction,
          effect:That.direction,
          autoplay:That.autoplay,
          loop:That.loop,
          autoplayDisableOnInteraction:false,
          paginationClickable:true,
          touchMoveStopPropagation : false,
          touchRatio:That.touchRatio,
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
          slidesPerView:That.slidesPerView,
          freeMode:That.freeMode,
          freeModeMomentum:That.freeModeMomentum
        })
      },
  }
</script>
<style>
  @import "../assets/libs/swiper/css/swiper.css";
  .swiper-container img{width: 100%}
  .swiper-pagination-bullet-active{background-color: white}
  .banner .swiper-button-prev{width: 0.28rem;height: 0.2rem;}
  .banner .swiper-button-next{width: 0.28rem;height: 0.2rem;}
</style>

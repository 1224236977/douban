
<template>
    <div class="swiper-container" :class='swipeid'>
        <div class="swiper-wrapper">
            <slot name='swiper-slide'></slot>
        </div>
        <div :class="{'swiper-pagination':pagination}" :style='{"text-align":paginationDirection}'></div>
    </div>
</template>
<style type="text/css">
    
    @import '../assets/libs/swiper/css/swiper.css';
    .swiper-container{ width: 100%;  margin: auto; }
    .swiper-container img{ width: 100%;height: 125px;  }

</style>

<script type="text/javascript">
    
    import '@/assets/libs/swiper/js/swiper.js'

    export default {
        props:{
            swipeid:{
                type:String,
                default:''
            },
            pagination:{
                type:Boolean,
                default:true
            },
            paginationDirection:{
                type:String,
                default:'center'
            },
            effect:{
                type:String,
                default:'slide'
            },
            loop:{
                type:Boolean,
                default:true
            },
            direction:{
                type:String,
                default:'horizontal'
            },
            autoplay:{
                type:Number,
                default:0
            },
            paginationType:{
                type:String,
                default:'bullets'
            },
            slidesPerView:{
                type:Number,
                default:0
            },
            spaceBetween:{
                type:Number,
                default:0
            },
            freeMode:{
                type:Boolean,
                default:false
            },
            isTrue:{
                type:Boolean,
                default:false
            }
        },
        // watch:{
        //     'isTrue':function(){
        //        this.$parent.qingqiu()
        //     }
        // },
        mounted:function(){
            
                var That = this;

                new Swiper('.'+That.swipeid,{
                    
                    loop:That.loop,     //是否循环

                    pagination:'.swiper-pagination',  //是否使用分页器

                    paginationType:That.paginationType, //分页类型

                    autoplay:That.autoplay, //自动轮播时间间隔

                    direction:That.direction, // 切换方向

                    effect:That.effect,  // 切换效果

                    slidesPerView: That.slidesPerView, // 一屏显示几页

                    spaceBetween: That.spaceBetween, //图片之间的间距

                    observer: true,//修改swiper自己或子元素时，自动初始化swiper

                    observeParents: true,//修改swiper的父元素时，自动初始化swiper

                    // slidesOffsetAfter:0,

                    // slidesOffsetBefore:0,

                    freeMode : That.freeMode, 
                    //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。

                    // freeModeMomentumBounce:false
                });
                // this.$nextTick(function(){
                //     this.isTrue = true
                // })
        }

    }

</script>

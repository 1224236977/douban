<template>
  <div class="bcItem clearfix" v-show="bol">
      <div class="bcItem_left ">
        <div class="bcItem_titPic"><img :src="bcurl"></div>
      </div>
      <div class="bcItem_right">
        <h4 v-text="bcName"></h4>
        <span v-text="attention" class="attention"></span>
        <p v-text="talk" class="talk"></p>
        <div class="bcItem_pic" v-show="picBol"><img :src="bcur2"></div>
        <div class="bc_like">
          <img src="../assets/images/ic_liked.png"> <span v-text="likeNum"></span>
          <img src="../assets/images/ic_group_comment_0.png"> <span v-text="likeNum2"></span>
        </div>
      </div>
      <router-link :to="{name:'Register',params:{myUrl:'Broadcast'}}">
        <button type="button" class="gz_btn">关注</button>
      </router-link>
      <div class="close" @click="fn"><img src="../assets/images/ic_close_status_recommend.png"></div>
  </div>
</template>
<script>
  export default {
      props:['bcurl','bcName','attention','talk','bcur2','likeNum','likeNum2','picBol'],
      data:function () {
        return{
            bol:true
        }
      },
      methods:{
          fn:function () {
            this.bol=false
          }
      }
  }
</script>
<style>
  .bcItem{border-radius: 4px;background-color: #fff;box-shadow: 0px 0px 0.1rem rgba(0,0,0,.4);text-align: left;
    position: relative;margin-bottom: 0.14rem;padding: 0.1rem 0 0.2rem 0;}
  .bcItem_left{width: 0.76rem;height: 100%;float: left}
  .bcItem_right{float: left;width: 3.14rem;height: 100%}
  .bcItem_titPic img{width: 0.56rem;padding-top: 0.15rem}
  .bcItem_titPic {text-align: center}
  .bcItem_right h4{padding-top: 0.2rem;font-family: 黑体;padding-bottom: 0.06rem;font-size: 0.14rem}
  .attention{font-size: 0.12rem;color: #c3c3c3}
  .talk{font-family: 黑体;padding-top: 0.1rem;padding-bottom: 0.12rem}
  .bcItem_pic{width: 2.86rem;}
  .bcItem_pic img{width: 100%;height: 1.4rem;}
  .bc_like img{width: 0.24rem;vertical-align: middle}
  .bc_like{line-height: 0.3rem;height: 0.3rem;padding-top: 0.1rem;}
  .bc_like span{font-size: 0.12rem;color: #e0e0e0;position: relative;bottom: -0.02rem;}
  .gz_btn{width: 0.74rem;height: 0.28rem;line-height: 0.28rem;border-radius: 4px;background-color: #42bd55;color: #fff;font-size: 0.14rem;
  border: none;position: absolute;top: 0.24rem;right: 0.27rem;outline: none}
  .close {position: absolute;top: 0;right:0 }
  .close img{width: 0.28rem;}
  .clearfix::after{content: "200B";height:0;font-size: 0;display: block;clear: both;}
</style>

<template>
      <div class="groupWrap" :class="{gray:yesbol}">
          <div class="group_pic"><img :src="url"></div>
          <div class="group_text">
            <h4 v-text="title">我们看剧爱吐槽！</h4>
            <span v-text="inner">什么剧都看，就是爱吐槽，吐演技，吐剧情，吐编剧。吐槽要吐出水平，吐出境界！</span>
          </div>
          <div class="group_people" v-text="num">8660人</div>
          <div class="yes" @click="fn" :class="{yes_ac:yesbol}"></div>
      </div>
</template>
<script>
  export default {
      props:['url','title','inner','num'],
      data:function () {
        return{
            yesbol:false
        }
      },
      methods:{
          fn:function () {
              this.yesbol=!this.yesbol
          }
      }

  }
</script>
<style>
  .groupWrap{height: 0.6rem;text-align: left;margin-bottom: 0.2rem;}
  .group_pic{width: 0.5rem;height: 0.6rem;margin-right: 0.1rem;float: left}
  .group_pic img {width: 0.5rem;margin-top: 5px;}
  .group_text{width: 2.36rem;float: left}
  .group_text h4{font-size: 0.16rem;}
  .group_text span{font-size: 0.1rem;color: #a0a0a0;font-family: 微软雅黑}
  .group_people{width: 0.5rem;text-align: right;float: left;font-size: 0.12rem;line-height: 0.6rem;color: #cdcdcd}
  .yes{float: left;width: 0.24rem;height: 0.24rem;cursor: pointer;background: url("../assets/images/ic_group_check_anonymous.png");
    background-size: cover;margin-left: 0.12rem;margin-top: 0.16rem;}
  .yes_ac{background: url("../assets/images/ic_group_checked_anonymous.png");background-size: cover;margin-left: 0.12rem;margin-top: 0.16rem;}
  .gray{background-color: lightgray}
</style>

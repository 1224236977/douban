<template>
  <div class="homeitem">
      <div class="home_left">
          <h4 v-text="title">我在论文“造假”工厂打工:代写、包发,年产值10亿</h4>
          <p v-text="inner">只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。</p>
          <span v-text="author">作者：土豆公社</span>
      </div>
      <div class="home_right"><img :src="url"></div>
  </div>
</template>
<script>
  export default{
      props:['title','inner','author','url']
  }
</script>
<style>
  .homeitem{padding: 0.2rem;text-align: left}
  .home_left{width: 2.56rem;display: inline-block}
  .home_left p{font-size: 0.12rem;color: #bdbdbd;padding-top: 0.14rem;padding-bottom: 0.18rem}
  .home_left h4{font-size: 0.16rem;font-family: '宋体';;line-height:0.21rem}
  .home_left span{font-size: 0.12rem;color: #dedede}
  .home_right{width: 0.9rem;height: 0.9rem;float: right}
  .home_right img{width: 0.9rem;}
</style>

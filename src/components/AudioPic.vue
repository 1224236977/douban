<template>
    <div class="audioPic">
      <img :src="adurl">
      <p v-text="name">神奇女侠</p>
      <span v-text="comment">暂无评论</span>
    </div>
</template>
<script>
  export default {
    props:['adurl','name','comment'],
    components:{
    }
  }
</script>
<style>
  .audioPic{float: left;margin-right: 0.1rem;}
  .audioPic img{width: 1rem;}
  .audioPic p{font-size: 0.14rem;padding: 0.02rem 0px;}
  .audioPic span{font-size: 0.12rem;color: #c0c0c0}
</style>

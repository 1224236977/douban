<template>
  <div class="minelist">
      <img :src="url">
      <p v-text="txt"></p>
  </div>
</template>
<script>
  export default {
      props:['url','txt']
  }
</script>
<style>
  .minelist{width: 25%;float: left;text-align: center;height: 33%;}
  .minelist img{width: 0.3rem;padding-top: 0.21rem}
  .minelist p{font-size: 0.15rem;color: #373737;}
</style>

<template>
  <div class="groupItem">
      <h4 class="group_title" v-text="tit">影视</h4>
      <slot></slot>
  </div>
</template>
<script>
  export default {
      props:["tit"]
  }
</script>
<style>
  .groupItem{height: 2.64rem;border-top: 1px solid #e0e0e0}
  .group_title {width: 0.7rem;background: #fff;position: relative;top: -0.1rem;margin: 0 auto;}
</style>

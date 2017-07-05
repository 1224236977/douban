<template>
    <div class="header" :style="{backgroundColor:col}">
        <slot></slot>
        <span class="leftImg"><slot name="leftImg"></slot></span>
        <span class="rightImg"><slot name="rightImg"></slot></span>
    </div>
</template>
<script>
  export default {
      props:{
          col:{
              default:'#f9f9f9'
          },
      }
  }
</script>
<style>
    .header{height: 0.44rem;padding-top: 0.2rem;line-height: 0.44rem;font-size: 0.16rem;
      position: relative}
    .leftImg,.rightImg{width: 0.44rem;position: absolute;margin-right: 0.1rem;display: inline-block;height: 0.44rem;right: 0
      ;top: 0.17rem;}
    .leftImg{right: 0.54rem}
    .leftImg img,.rightImg img{width: 24px;vertical-align: middle}
</style>

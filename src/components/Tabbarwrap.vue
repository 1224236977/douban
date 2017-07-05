<template>
  <div class="tabbarwrap">
      <slot></slot>
  </div>
</template>
<script>
  import Tabbaritem from './Tabbaritem'
  export default {
    props:['sel'],
    components:{
      Tabbaritem
    }
  }
</script>
<style>
  .tabbarwrap{width: 100%;height: 0.48rem;border-top: 1px solid lightgray}
</style>

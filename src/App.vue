<template>
  <div id="app">
      <router-view></router-view>
      <Tabber></Tabber>
  </div>
</template>

<script>
  import Tabber from './components/Tabbar'
  export default {
      name: 'app',
      components:{
          Tabber
      },
      created:function () {
          this.$router.push('/Home')
      }
  }
  function windowSize() {
    // 1 获取html元素
    var dom=document.documentElement;

    // 2 获取设备宽度
    var w=dom.clientWidth;

    // 3 改变html字体大小
    dom.style.fontSize= w/4.14+"px";

  }

  windowSize()

  window.onresize=function(){
    windowSize()
  }
</script>

<style>
*{margin: 0;padding: 0}
li{list-style: none}
a{text-decoration: none}
body{font-size: 0.12rem}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif ,微软雅黑;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y:scroll
}
</style>


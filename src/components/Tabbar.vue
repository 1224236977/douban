<template>
    <div class="tabbar">
        <Tabbarwrap :sel="selected">
            <Tabbaritem txt="首页" mark="Home" @change="getVal">
                <img src="../assets/images/ic_tab_home_normal.png" slot="normalImg">
                <img src="../assets/images/ic_tab_home_active.png" slot="activeImg">
            </Tabbaritem>
            <Tabbaritem txt="书影音" mark="Audio" @change="getVal">
                <img src="../assets/images/ic_tab_subject_normal.png" slot="normalImg">
                <img src="../assets/images/ic_tab_subject_active.png" slot="activeImg">
            </Tabbaritem>
            <Tabbaritem txt="广播" mark="Broadcast" @change="getVal">
                <img src="../assets/images/ic_tab_status_normal.png" slot="normalImg">
                <img src="../assets/images/ic_tab_status_active.png" slot="activeImg">
            </Tabbaritem>
            <Tabbaritem txt="小组" mark="Group" @change="getVal">
                <img src="../assets/images/ic_tab_group_normal.png" slot="normalImg">
                <img src="../assets/images/ic_tab_group_active.png" slot="activeImg">
            </Tabbaritem>
            <Tabbaritem txt="我的" mark="Mine" @change="getVal">
                <img src="../assets/images/ic_tab_profile_normal.png" slot="normalImg">
                <img src="../assets/images/ic_tab_profile_active.png" slot="activeImg">
            </Tabbaritem>
        </Tabbarwrap>
    </div>
</template>
<script>
  import Tabbarwrap from './Tabbarwrap'
  import Tabbaritem from './Tabbaritem'
  export default {
      data:function () {
          return{
            selected:"Home"
          }
      },
      methods:{
          getVal:function (val) {
              this.selected=val
          }
      },
      components:{
          Tabbarwrap,
          Tabbaritem
      }
  }
</script>
<style>
    .tabbar{position: fixed;bottom: 0;left: 0;width: 100%;background-color:#f9f9f9;z-index: 100}
</style>

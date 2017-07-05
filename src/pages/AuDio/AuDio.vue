<template>
  <div class="AuDio">
    <MyHeader>
          <span>书影音</span>
          <router-link :to="{name:'Search',params:{myUrl:'AuDio'}}" slot="leftImg">
            <img src="../../assets/images/ic_group_search.png">
          </router-link>
          <router-link :to="{name:'Register',params:{myUrl:'AuDio'}}" slot="rightImg">
            <img src="../../assets/images/ic_chat_green.png">
          </router-link>
    </MyHeader>
    <div class="nav">
        <div class="nav_ul">
            <Tabbaritem txt="电影" mark="AuDio/Film" @change="getVal"></Tabbaritem>
            <Tabbaritem txt="读书" mark="AuDio/Book" @change="getVal"></Tabbaritem>
            <Tabbaritem txt="电视" mark="AuDio/TV" @change="getVal"></Tabbaritem>
            <Tabbaritem txt="同城" mark="AuDio/City" @change="getVal"></Tabbaritem>
            <Tabbaritem txt="音乐" mark="AuDio/Music" @change="getVal"></Tabbaritem>
        </div>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
  import MyHeader from '../../components/Header'
  import Tabbaritem from '../../components/Tabbaritem'
  export default{
    data:function () {
      return {
          sel:'AuDio/Film'
      }
    },
    components:{
      MyHeader,
      Tabbaritem,

    },
    created:function () {
      this.$router.push('AuDio/Film')
    },
    methods:{
        getVal:function (val) {
          this.sel=val
        }
    }
  }
</script>
<style>
  .nav_ul {height: 0.4rem;}
  .nav_ul .tabbaritem{height: 0.38rem;width: 20%;line-height: 0.38rem;float: left}
  .nav_ul p{color: #969696;font-size: 0.14rem;}
  .nav_ul .tabbaritem_ac{border-bottom: 2px solid #68cc74;}
</style>

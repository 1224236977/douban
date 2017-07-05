<template>
  <div class="broadcast">
    <MyHeader>
      <span>广播</span>
      <router-link :to="{name:'Search',params:{myUrl:'Broadcast'}}" slot="leftImg">
        <img src="../../assets/images/ic_status_search_user.png">
      </router-link>
      <router-link :to="{name:'Register',params:{myUrl:'Broadcast'}}" slot="rightImg">
        <img src="../../assets/images/ic_chat_green.png">
      </router-link>
    </MyHeader>
    <div class='broadcast_main'>
      <img src="../../assets/images/gbBg_03.jpg" class="mainBg">
      <!--发现有趣的人-->
      <div class="find">
        <h4>发现有趣的人</h4>
        <span>关注他们,发现更大的世界</span>
      </div>
      <div class="bcItemlist">
        <BcItem v-for="(item,index) in bcArr":key="item.id" :picBol="item.picBol" :bcurl="item.url" :bcName="item.name" :attention="item.gz" :talk="item.talk" :bcur2="item.url2" :likeNum="item.num" :likeNum2="item.num2"></BcItem>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from '../../components/Header'
  import BcItem from '../../components/BcItem'
  export default{
    data:function () {
      return {
          bcArr:[
            {
                picBol:true,
                url:require('../../assets/images/avatar_male_100.png'),
                name:"崔南洋",
                gz:'10000人关注',
                talk:'夏资文是瓜皮',
                url2:require('../../assets/images/avatar_male_100.png'),
                num:300,
                num2:400,
            },
            {
              picBol:false,
              url:require('../../assets/images/avatar_male_100.png'),
              name:"崔南洋",
              gz:'10000人关注',
              talk:'夏资文是瓜皮',
              url2:require('../../assets/images/avatar_male_100.png'),
              num:300,
              num2:400,
            }
          ]
      }
    },
    components:{
      MyHeader,
      BcItem
    }
  }
</script>
<style>
  .broadcast_main{padding: 0px 0.12rem;height: 7.36rem;overflow: hidden;background-color: #f8f8f8;position: relative}
  .mainBg{position: absolute;top: 0.2rem;left: 0.72rem}
  .find{height: 1.14rem;text-align: left}
  .find h4,.find span{margin-left: 1.72rem;}
  .find h4{padding-top: 0.4rem;padding-bottom: 2px}
  .find span{color: #9d9d9d;font-size: 0.14rem;}
</style>

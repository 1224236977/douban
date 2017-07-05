<template>
  <div class="group">
      <MyHeader>
        <span>小组</span>
        <router-link :to="{name:'Search',params:{myUrl:'Group'}}" slot="leftImg">
          <img src="../../assets/images/ic_group_search.png">
        </router-link>
        <router-link :to="{name:'Register',params:{myUrl:'Group'}}" slot="rightImg">
          <img src="../../assets/images/ic_chat_green.png">
        </router-link>
      </MyHeader>
      <div class="group_main">
          <div class="group_mainTop"><img src="../../assets/images/group_bg_02.jpg"></div>
          <div class="group_mainBot">
              <div class="Bot_bg"><img src="../../assets/images/ic_rec_group_banner_6.png"><span>精选推荐</span></div>
              <GroupItem v-for="(item,index) in arr ":key="item.id" :tit="item.tit">
                  <GroupText v-for="(item2,index2) in item.inArr " :key="item.id" :url="item2.url" :title="item2.title" :inner="item2.inner" :num="item2.num"></GroupText>
              </GroupItem>
          </div>
      </div>
   </div>
</template>
<script>
  import MyHeader from '../../components/Header'
  import GroupItem from '../../components/GroupItem'
  import GroupText from '../../components/GroupText'
  export default{
    components:{
      MyHeader,
      GroupItem,
      GroupText
    },
    data:function () {
      return{
          arr:[
            {
                tit:'影视',
                inArr:[
                  {
                      url:require('../../assets/images/group_03.jpg'),
                      title:"我们看剧爱吐槽!",
                      inner:"什么剧都看，就是爱吐槽，吐演技，吐剧情，吐编剧。吐槽要吐出水平，吐出境界！",
                      num:'8660人'
                  },
                  {
                    url:require('../../assets/images/group_03.jpg'),
                    title:"我们看剧爱吐槽!",
                    inner:"什么剧都看，就是爱吐槽，吐演技，吐剧情，吐编剧。吐槽要吐出水平，吐出境界！",
                    num:'8660人'
                  },
                  {
                    url:require('../../assets/images/group_03.jpg'),
                    title:"我们看剧爱吐槽!",
                    inner:"什么剧都看，就是爱吐槽，吐演技，吐剧情，吐编剧。吐槽要吐出水平，吐出境界！",
                    num:'8660人'
                  }
                ]
            },
            {
              tit:'影视',
              inArr:[
                {
                  url:require('../../assets/images/group_03.jpg'),
                  title:"我们看剧爱吐槽!",
                  inner:"什么剧都看，就是爱吐槽，吐演技，吐剧情，吐编剧。吐槽要吐出水平，吐出境界！",
                  num:'8660人'
                },
                {
                  url:require('../../assets/images/group_03.jpg'),
                  title:"我们看剧爱吐槽!",
                  inner:"什么剧都看，就是爱吐槽，吐演技，吐剧情，吐编剧。吐槽要吐出水平，吐出境界！",
                  num:'8660人'
                },
                {
                  url:require('../../assets/images/group_03.jpg'),
                  title:"我们看剧爱吐槽!",
                  inner:"什么剧都看，就是爱吐槽，吐演技，吐剧情，吐编剧。吐槽要吐出水平，吐出境界！",
                  num:'8660人'
                }
              ]
            },
          ]
      }
    }
  }
</script>
<style>
  .group{padding-bottom: 0.53rem}
  .group_main{overflow: hidden}
  .group_mainTop{height: 1.76rem;}
  .group_mainTop img{height: 1.76rem}
  .group_mainBot{padding: 0.22rem 0.12rem 0 0.12rem;height: 5.38rem; }
  .Bot_bg{height: 0.68rem;margin-bottom: 0.34rem;}
  .Bot_bg img{height: 0.68rem;width: 100%}
  .Bot_bg span{color: #fff;position: absolute;left: 12px;bottom: 4px;font-size: 14px;}
</style>



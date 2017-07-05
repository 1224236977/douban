<template>
    <div class="Search">
      <div class="header">
        <div class="homeHeader_wrap">
          <input type="text" class="home1_search" placeholder="影视 图书 唱片 小组等">
          <img src="../assets/images/ic_search_gray.png" class="search_icon">
          <img src="../assets/images/ic_scan_gray.png" class="scan_icon">
          <router-link :to="this.$route.params.myUrl" class="del">取消</router-link>
        </div>
      </div>
      <div class="hot_search">热门搜索</div>
      <ul class="search_ul">
        <li v-for="(item,index) in arr" :key="item.id">
            <span class="num_pic"><img :src="item.url" v-if="item.url!=''"><span class="search_num" v-show="index>2">{{ index+1 }}</span></span>
            <span class="search_text">{{ item.text }}</span>
            <span class="search_describe">{{ item.describe }}</span>
        </li>
      </ul>
    </div>
</template>
<script>
  export default{
      data:function () {
        return{
            arr:[
                {
                    url:require("../assets/images/search_03.jpg"),
                    text:'神奇女侠',
                    describe:' · 电影'
                },
                {
                    url:require("../assets/images/search_06.jpg"),
                    text:'新木乃伊',
                    describe:' · 电影'
                },
                {
                    url:require("../assets/images/search_08.jpg"),
                    text:'欢乐颂2',
                    describe:' · 电影'
                },
                {
                    text:'异形：契约',
                    describe:' · 电影',
                },
                {
                    text:'喜欢你',
                    describe:' · 电影',
                },
                {
                    text:'白鹿原',
                    describe:' · 图书',
                },
                {
                    text:'人类简史',
                    describe:' · 图书',
                },
                {
                    text:'百年孤独',
                    describe:' · 图书',
                },
                {
                    text:'G-DRAGON KWON JI YONG',
                    describe:' · 音乐',
                },
                {
                    text:'纪念碑谷',
                    describe:' · 游戏',
                },
                {
                    text:'2017第二十届上海国际电影节',
                    describe:' · 同城',
                },
                {
                    text:'安德鲁与多莉尼',
                    describe:' · 舞台剧',
                },
            ]
        }
      },
      components:{

      }
  }
</script>
<style>
  .header{height: 0.44rem;padding-top: 0.2rem;line-height: 0.44rem;font-size: 0.16rem;
    position: relative}
  .home1_search{height: 0.3rem;width: 3.04rem;border-radius: 4px;border: none;padding: 0 0.3rem;margin-right: 0.3rem;outline: none;
  background-color: #ededed}
  .homeHeader_wrap{position: relative}
  .homeHeader_wrap img{width: 0.2rem;}
  .homeHeader_wrap .del{position: absolute;right: 0.08rem;font-size: 0.12rem;color: #42bd56;line-height: 0.48rem;}
  .search_icon{position: absolute;left: 0.15rem;top: 0.13rem;}
  .scan_icon{position: absolute;right: 0.48rem;top: 0.13rem;}
  .hot_search{width: 100%;background-color: #f9f9f9;height: 0.36rem;font-size: 12px;padding-left:0.16rem;line-height: 0.36rem;text-align: left;
   color: #ababab;}
  .search_ul{margin-bottom: 100px}
  .search_ul li{height: 0.42rem;border-bottom: 2px solid #fbfbfb;line-height: 0.42rem;text-align: left;position: relative}
  .search_ul li span{display: inline-block;height: 100%;}
  .num_pic{width: 0.36rem;text-align: center}
  .num_pic img{width: 0.12rem;vertical-align: middle}
  .search_text{color: #3a3a3a;font-size: 0.14rem;}
  .search_describe{font-size: 0.12rem;color: #bfbfbf}
  .search_num{position: absolute;left: 0.16rem;font-size: 0.12rem;color: #cfcfcf;font-family: Arial}
</style>

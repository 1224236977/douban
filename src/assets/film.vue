<template>
	<div class="filmWrap">
		<LbWrap>
			<h3 slot='h3'>影院热映</h3>
			<Banner swipeid='moive' :pagination='false' :slidesPerView='3.5' :loop='false' :freeMode='true' slot='banner' :isTrue='isTrue'>
				<div class="swiper-slide" slot='swiper-slide' v-for='item in moive'>
					<Piclist>
						<img :src="item.cover" slot='img'>
						<span slot='rate'>{{ item.rate }}</span>
						<span class="xx"></span><span class="xx"></span><span class="xx"></span><span class="xx"></span><span class="xx"></span>
						<span slot='title' class="title">{{ item.title }}</span>
					</Piclist>
				</div>
			</Banner>
		</LbWrap>
	<ZsWrap>
		<img src="../assets/images/banner/03.jpg" slot='img'>
		<p slot='p'>前文艺片扛把子耿乐秒变老司机,拒绝和夏雨CP</p>
	</ZsWrap>
	<LbWrap>
			<h3 slot='h3'>影院即将上映</h3>
			<Banner swipeid='jijiang' :pagination='false' :slidesPerView='3.5' :loop='false' :freeMode='true' slot='banner' :isTrue='isTrue'>
				<div class="swiper-slide" slot='swiper-slide' v-for='item in jijiang'>
					<Piclist>
						<img :src="item.cover" slot='img'>
						<span slot='rate'>{{ item.cover_y }} 人想看</span>
						<!-- <span class="xx"></span><span class="xx"></span><span class="xx"></span><span class="xx"></span><span class="xx"></span> -->
						<span slot='title' class="title">{{ item.title }}</span>
					</Piclist>
				</div>
			</Banner>
		</LbWrap>
	</div>
</template>
<script type="text/javascript">
	import Banner from '@/components/banner'
	import Piclist from '@/components/piclist'
	import LbWrap from '@/components/lbWrap'
	import ZsWrap from '@/components/zhanshi'
	export default {
		components:{
			Banner,
			Piclist,
			LbWrap,
			ZsWrap
		},
		data:function(){
			return {
				moive:[],
				isTrue:false,
				jijiang:[]

			}
		},
		// watch:{
  //           'isTrue':function(){
  //              this.qingqiu()
  //           }
  //       },
		methods:{
			// getVal:function(){
			// 	console.log('abc'+this.$router.path)
			// },
		},
		
		mounted:function(){
			// this.arr = this.$parent.arr;
			// this.qingqiu()
			// console.log(this.$router.query)
			this.axios.get('/api/filmData').then((rep)=>{

				this.moive = rep.data.data.subjects.slice(6,13)
				this.jijiang = rep.data.data.subjects.slice(0,6)
				// console.log(this.jijiang)
				// this.$nextTick(function(){
				// 	this.isTrue = true
				// })
			})
			// console.log(this.$route.query)
		},

	}
</script>
<style type="text/css">

</style>
<template>
	<div class="index">
		<div class="i-swiper-box">
			<swiper ref="mySwiper" autoplay :options="swiperOptions">
			  <swiper-slide>
				  <img src="https://wse.com.cn/medias/sys_master/images/images/hc7/h14/8816308289566/prime-banner-1-.jpg" alt="">
			  </swiper-slide>
			  <swiper-slide>
				  <img src="https://wse.com.cn/medias/sys_master/images/images/h39/ha5/8810592108574/campaign-homepage-banner-1920x500.jpg" alt="">
			  </swiper-slide>
			  <swiper-slide>
				  <img src="https://wse.com.cn/medias/sys_master/images/images/h74/h81/8812939051038/banner-004.jpg" alt="">
			  </swiper-slide>
			  <swiper-slide>
				  <img src="https://wse.com.cn/medias/sys_master/images/images/had/h84/8827848425502/Web-banner-1.jpg" alt="">
			  </swiper-slide>
			  <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		
		
		<div class="i=service">
			<div class="i-s-1">
				<p>
					欢迎来到<br>华尔街英语<br>官方网站！
				</p>
				<p>需要帮助吗？</p>
			</div>
			<div class="i-s-2">
				<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/help-img.png" alt="">
			</div>
			<div class="i-s-3">咨询</div>
			<div class="i-s-4">X</div>
		</div>
		<div class="i-right">
			<div>
				<img src="../assets/mengze/weixin.png" alt="">
			</div>
			<div>
				<img src="../assets/mengze/phone.png" alt="">
			</div>
		</div>
		
	</div>
	
	
	
</template>

<script>
	
	  export default {
	    name: 'carrousel',
	    data() {
	      return {
			  
	        swiperOptions: {
	          pagination: {
	            el: '.swiper-pagination'
	          },
			  autoplay:1000
	          // Some Swiper option/callback...
	        }
	      }
	    },
	    // computed: {
	    //   swiper() {
	    //     return this.$refs.mySwiper.$swiper
	    //   }
	    // },
	    // mounted() {
	    //   console.log('Current Swiper instance object', this.swiper)
	    //   this.swiper.slideTo(3, 1000, false)
	    // }
	  }
</script>

<style lang="stylus">
.index{
	*{
		margin: 0;
		padding: 0;
	}
	.i-swiper-box{
		width 100%
		height 500px
		// background: #000;
		.swiper-pagination-bullet{
			width 12px
			height 12px
		}
		.swiper-pagination-bullet-active{
			background #fff
		}
		.swiper-wrapper{
			width 100%
			height 100%
			
			
			.swiper-slide{
				width 100%
				height 100%
				img{
					width 100%
					height 100%
				}
			}
			
			
		}
	}



	.i-right{
		width 60px
		height 126px
		position fixed
		right 0
		top 173px
		z-index 100
		div{
			width 60px
			height 50%
			background #043458
			display flex
			align-items center
			justify-content center
		}
	}
}
	
</style>

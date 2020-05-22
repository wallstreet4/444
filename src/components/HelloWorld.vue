<template>
  <div class="hello" :class='{on: off}'>
    <div class="top" :class='{on: off}'>
		<div class="center">
			<ul class='left'>
				<router-link to='/' class='on' tag='li'>会员/学员</router-link>
				<router-link to='enterprise' tag='li'>企业合作</router-link>
				<router-link to='occupation' tag='li'>职业生涯</router-link>
				<router-link to='channel' tag='li'>渠道合作</router-link>
			</ul>
			<ul class='right'>
				<router-link to='learning' tag='li'>最近学习中心</router-link>
				<router-link to='wallstreet' tag='li'>关于华尔街英语</router-link>
				<router-link to='newmembers' tag='li' class='on'>新会员</router-link>
				<router-link to='memberlogin' tag='li'>会员登录</router-link>
				<router-link to='studentchannel' tag='li'>学员通道</router-link>
				<li>中|EN</li>
			</ul>
		</div>
	</div>
	<div class="bottom">
		<div class="center">
			<img src="../../static/lrt/logo-wse.jpg" alt="">
			<ul>
				<router-link to='because' tag='li'>你选择华尔街英语是因为</router-link>
				<router-link to='curriculum' tag='li'>课程</router-link>
				<router-link to='onlinecourses' tag='li'>在线课程</router-link>
				<router-link to='learningjourney' tag='li'>学习之旅</router-link>
				<router-link to='teachers' tag='li'>优质师资</router-link>
				<router-link to='latest' tag='li'>最新消息</router-link>
				<router-link to='contactus' tag='li'>联系我们</router-link>
				<router-link to='experience' tag='li' class='on'>免费体验</router-link>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data(){
	  return{
		  off: false
	  }
  },
  mounted() {
  	window.onscroll = (ev) => {
  		if(document.documentElement.scrollTop >= 200){
  			this.off = true;
  		}else{
			this.off = false;
		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
	.hello.on{
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
	}
	.hello{
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 9999;
		background: #fff;
		transition: all .5s;
		.top.on{
			display: none;
		}
		.top{
			background: rgb(242,241,241);
			height: 40px;
			.center{
				width: 1180px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				ul{
					display: flex;
					align-items: center;
					height: 40px;
				}
				.left li{
					width: 95px;
					color: #333333;
					font-size: 14px;
					text-align: center;
					line-height: 40px;
					&:hover{
						background:#fff;
					}
				}
				.left .on{
					background: #fff;
					font-weight: bold;
				}
				
				.right{
					font-size: 12px;
					font-weight: bold;
					li{
						padding: 0 15px;
						height: 40px;
						line-height: 40px;
						&:hover{
							color: rgb(0,130,169);
						}
					}
					.on{
						background: rgb(4,52,88);
						color:#fff;
					}
				}
			}
		}
		
		
		.bottom{
			height: 70px;
			background: #fff;
			display: flex;
			img{
				width: 70px;
				height: 50px;
			}
			.center{
				width: 1180px;
				margin: 0 auto;
				display: flex;
				align-items: center;
				ul{
					display: flex;
					height: 70px;
					align-items: center;
					margin-left: 30px;
					color: #333333;
					font-weight: bold;
					li{
						padding: 0 10px;
						border-right: 1px solid #000;
						&:hover{
							color: #0082a9;
							cursor:pointer;
						}
					}
					.on{
						color: red;
						border: none;
					}
				}
			}
		}
	}
</style>

<template>
  <div class="hello" :class='{on: off}'>
    <div class="top" :class='{on: off}'>
		<div class="center">
			<ul class='left'>
				<li class='on'>会员/学员</li>
				<li>企业合作</li>
				<li>职业生涯</li>
				<li>渠道合作</li>
			</ul>
			<ul class='right'>
				<li>最近学习中心</li>
				<li>关于华尔街英语</li>
				<li class='on'>新会员</li>
				<li>会员登录</li>
				<li>学员通道</li>
				<li>中|EN</li>
			</ul>
		</div>
	</div>
	<div class="bottom">
		<div class="center">
			<img src="../../static/lrt/logo-wse.jpg" alt="">
			<ul>
				<li>企业培训</li>
				<li>企业解决方案</li>
				<li>管理解决方案</li>
				<li>成功经验</li>
				<li class='on'>电话：400 852 7600</li>
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

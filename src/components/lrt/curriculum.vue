<template>
	<div class="curriculum">
		<div class="top">
			<span>首页</span>
			|
			<span>课程</span>
		</div>
		
		<div class="conent">
			<div class="left">
				<img src="../../../static/lrt/img-vvip.png" alt="">
			</div>
			<div class="right">
				<h3>
					”多元法
					<sup>®</sup>
					” 学习英语
				</h3>
				<ul>
					<li class='on'>VVIP课程</li>
					<li>VIP课程</li>
					<li>豪华课程</li>
					<li>优选课程</li>
				</ul>
				<p class='content__title'>完全订制的个性化尊贵<span></span>服务课程</p>
				<p class="content__subtitle">你的专属私人外教将上门进行一对一学习指导</p>
				<div class="status">
					<span>9.6k 学生</span>
				</div>
				<div class="wrapper">
					<div class="list">
						<p class='title'>特色与优势</p>
						<p class='txt'>高端个性化一对一课程</p>
						<p class='txt'>专属学习顾问</p>
						<p class='txt'>灵活的学习安排</p>
						<p class='txt'>多媒体课程全新升级</p>
						<p class='txt'>派对与活动</p>
					</div>
					<div class="list">
						<p class='title'>附加优势</p>
						<div class="img">
							<img src="../../../static/lrt/icon-harvard.png" alt="">
						</div>
						<b>哈佛管理大师课程，提高你的领导才能</b>
					</div>
				</div>
				
				<div class="button">
					<span class='btn'>了解更多</span>
					<span class='btn'>立即咨询</span>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
</script>

<style lang='stylus'>
	.curriculum{
		position: relative;
		overflow: hidden;
		.top{
			box-sizing: border-box;
			padding: 0 200px;
			& span:nth-child(2){
				color: red;
				font-weight: bold;
			}
		}
		
		
		
		.conent{
			display: flex;
			margin-top: 100px;
			box-sizing: border-box;
			padding: 0 50px;
			&:before{
				content: '';
				position: absolute;
				bottom: -50px;
				margin-left: -1081px;
				left: 50%;
				width: 2317px;
				height: 2317px;
				border-radius: 100%;
				border: 3px solid #043458;
				z-index: -1;
			}
			.left{
				max-width: 474px;
				img{
					width: 100%;
					margin-top: 50px;
					position: relative;
					z-index: 10;
				}
			}
			.right{
				width: 700px;
				box-sizing: border-box;
				padding-left: 50px;
				h3{
					font-size: 60px;
					    line-height: 70px;
					    font-weight: bold;
					    color: #043458;
					    margin-top: 1px;
				}
				ul{
					display: flex;
					padding-top: 16px;
					justify-content: space-between;
					li{
						display: block;
						color: #043458;
						font-size: 20px;
						text-align: center;
						border: none;
						font-weight: bold;
						text-decoration: none;
						position: relative;
						line-height: 40px;
					}
					li.on{
						color: #ee2d42;
					}
					li.on:before {
						content: '';
						position: absolute;
						top: 100%;
						left: 50%;
						margin-top: -6px;
						margin-left: -8px;
						border-bottom: 10px solid #ee2d42;
						border-left: 8px solid transparent;
						border-right: 8px solid transparent;
					}
				}
				
				.content__title{
					font-size: 30px;
					position: relative;
					z-index: 20;
					font-weight: bold;
					padding-top: 11px;
					span{
						margin: 0 10px;
					}
				}
				
				.content__subtitle{
					font-size: 16px;
					position: relative;
					z-index: 20;
					font-weight: bold;
					padding-top: 11px;
				}
				
				
				.status{
					position: relative;
					z-index: 20;
					padding-top: 26px;
					span{
						padding-left: 40px;
						display: inline-block;
						position: relative;
						font-size: 16px;
						line-height: 29px;
						&:before{
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							background-image: url(../../../static/lrt/sprites_img.png);
							background-position: -1770px -583px;
							width: 30px;
							height: 30px;
						}
					}
				}
				
				
				
				.wrapper{
					display: flex;
					margin-top: 40px;
					.list{
						width: 301px;
						padding-right: 20px;
						line-height: 28px;
						p{
							font-size: 16px;
							position: relative;
							padding-left: 13px;
							margin: 0;
							line-height: 24px;
						}
						
						.title{
								color: #ee2d42;
								font-weight: bold;
								padding-left: 0;
								margin-bottom: 18px;
							}
							.txt{
								&:before{
									content: '';
									position: absolute;
									top: 7px;
									left: 0;
									width: 7px;
									height: 7px;
									background: #333;
									border-radius: 100%;
							}
						}
					}
						
				}
				
				.button{
					margin-top: 120px;
					.btn{
						vertical-align: middle;
						position: relative;
						display: inline-block;
						background: #043458;
						width: 136px;
						height: 136px;
						font-size: 16px;
						line-height: 20px;
						text-decoration: none;
						border-radius: 50%;
						text-align: center;
						line-height: 136px;
						color: #fff;
						font-weight: bold;
						box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.58);
					}
					.btn:nth-child(2){
						margin-left: 50px;
						background: #ee2d42;
						box-shadow: 1px 18px 25px 10px rgba(238, 45, 66, 0.48);
					}
				}
				
			}
		}
	}
</style>

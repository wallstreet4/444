<template>
	<div class="footer">
		<div class="footers">
			<div class="center">
				<div class="img">
					<img src="../../static/lrt/logo_wse_footer.png" alt="">
				</div>
				<div>
					<ul>
						<li>
							<h3>企业</h3>
						</li>
						<li>关于华尔街英语</li>
						<li>公司新闻</li>
						<li>精彩活动</li>
						<li>华尔街英语在中国</li>
						<li>职业生涯</li>
					</ul>
					<ul>
						<li>
							<h3>课程</h3>
						</li>
						<li>VVIP课程</li>
						<li>VIP课程</li>
						<li>豪华课程</li>
						<li>优选课程</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<h3>企业</h3>
						</li>
						<li>关于华尔街英语</li>
						<li>公司新闻</li>
						<li>精彩活动</li>
						<li>华尔街英语在中国</li>
						<li>职业生涯</li>
					</ul>
					<ul>
						<li>
							<h3>课程</h3>
						</li>
						<li>VVIP课程</li>
						<li>VIP课程</li>
						<li>豪华课程</li>
						<li>优选课程</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<h3>企业</h3>
						</li>
						<li>关于华尔街英语</li>
						<li>公司新闻</li>
						<li>精彩活动</li>
						<li>华尔街英语在中国</li>
						<li>职业生涯</li>
					</ul>
					<ul>
						<li>
							<h3>课程</h3>
						</li>
						<li>VVIP课程</li>
						<li>VIP课程</li>
						<li>豪华课程</li>
						<li>优选课程</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							学习咨询热线
						</li>
						<li>
							<h3>40085 40085</h3>
						</li>
						<li>电子邮箱</li>
						<li>
							<h3>info@wallstreetenglish.com</h3>
						</li>
					</ul>
					<ul>
						<li>
							关注我们
						</li>
						<li>
							<img src="../../static/lrt/wechar_qr.jpg" alt="">
						</li>
						<li class='icon'>
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="top">
				<p>
					Copyright © 2011 Gamma Master China Ltd. All rights reserved.沪ICP备14015273号-11
				</p>
				<p>法律声明和隐私政策</p>
			</div>
			<div class="top2">
				<img src="../../static/lrt/record_icon.png" alt="">
				<p>沪公网安备 31011502005158号</p>
			</div>
			<div class="top3">
				华尔街英语培训中心（上海）有限公司 地址：中国（上海）自由贸易试验区世纪大道88号金茂大厦1区3层 联系电话：021-38804666
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang='stylus'>
	.bottom{
		width: 1041px;
		margin: 0 auto;
		padding: 10px 0;
		div{
			margin-top: 10px;
		}
		.top{
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #043458;
		}
		.top2{
			display: flex;
			color: #939393;
			font-size: 14px;
		}
		.top3{
			color: #939393;
			font-size: 14px;
		}
	}
	.footers{
		background: #043458;
		color: #ffffff;
		padding: 0;
		position: relative;
		margin-top: 43px;
		&:before{
			content: '';
			display: block;
			width: 100%;
			height: 43px;
			background: url(../../static/lrt/bg_footer.png) center 0 no-repeat;
			background-size: 100% 100%;
			position: absolute;
			top: -42px;
			left: 0;
		}
		.center{
			width: 1041px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			padding-bottom: 50px;
			.img{
				img{
					width: 121px;
					margin-top: 25px;
				}
			}
			ul{
				margin-top:20px;
				li{
					color: #a6b8c5;
					font-size: 14px;
					line-height: 24px;
					margin-top: 5px;
					img{
						width: 90px;
					}
					h3{
						font-size: 18px;
						line-height: 28px;
						font-weight: bold;
						color: #ffffff;
					}
				}
				.icon{
					ul{
						display: flex;
						li:nth-child(1){
							margin-right: 5px;
							background-image: url(../../static/lrt/sprites_img.png);
							background-position: -1906px -323px;
							width: 30px;
							height: 30px;
						}
						li:nth-child(1):hover{
							background-position: -1890px -583px;
						}
						li:nth-child(2){
							margin-right: 5px;
							background-image: url(../../static/lrt/sprites_img.png);
							background-position: -1410px -583px;
							width: 30px;
							height: 30px;
						}
						li:nth-child(2):hover{
							background-position: -1350px -583px;
						}
						li:nth-child(3){
							margin-right: 5px;
							background-image: url(../../static/lrt/sprites_img.png);
							background-position: -1590px -583px;
							width: 30px;
							height: 30px;
						}
						li:nth-child(3):hover{
							background-position: -1530px -583px;
						}
					}
				}
			}
		}
	}
</style>

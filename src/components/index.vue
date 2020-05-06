<template>
	<div class="index">
		<!-- 轮播图 -->
		<div class="i-swiper-box">
			<swiper ref="mySwiper" autoplay :options="swiperOptions1">
				<swiper-slide>
					<img src="https://wse.com.cn/medias/sys_master/images/images/hc7/h14/8816308289566/prime-banner-1-.jpg" alt="">
				</swiper-slide>
				<swiper-slide>
					<img src="https://wse.com.cn/medias/sys_master/images/images/h39/ha5/8810592108574/campaign-homepage-banner-1920x500.jpg"
					 alt="">
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

		<!-- 主要 -->
		<div class="i-main">
			<div class="i-m-box">
				<div class="i-m-b-1">
					<h1>改变未来的力量</h1>
					<p class="imb1-p">在华尔街英语，我们相信每个人都拥有改变未来的力量。无论你的目标是什么，我们都会为你提供支持，给你实现梦想的力量。</p>
					<div class="imb-red imb1-red">
						<div>
							<p>
								<span></span>
								了解更多
							</p>

						</div>
					</div>
				</div>
				<div class="i-m-b-2">
					<div class="clearfix">
						<img class="imb2-img" src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_01.png"
						 alt="">
						<div class="imb2-big">
							<div class="imb2-Btop">
								<h2>行之有效的方法</h2>
								<p>
									所有的课程都是基于有效的“多元法
									<sup>®</sup>
									”学习体系，让你能够随时随地学习英语。无论你的工作或生活有多么繁忙，在这里，你都会找到适合你的课程。
								</p>
							</div>
							<div class="imb2-Bbottom">
								<!-- <div class="imb2bbTop"> -->
								<ul class="clearfix">
									<li class="imb2-li">
										<a href="#">VVIP课程</a>
									</li>
									<li>
										<a href="#">VIP课程</a>
									</li>
									<li>
										<a href="#">豪华课程</a>
									</li>
									<li>
										<a href="#">优选课程</a>
									</li>
								</ul>
								<!-- </div> -->
								<div class="imb2bbBottom clearfix">
									<div>

										<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/CN_Desktop_VVIP.gif"
										 alt="">
									</div>
									<p>量身定制高端VVIP教程，专属外教及学习顾问为您提供一对一上门教学服务</p>
								</div>
							</div>
						</div>
						<div class="imb-red imb2-red">
							<div>
								<p>
									<span></span>
									了解更多
								</p>

							</div>
						</div>
					</div>
				</div>
				<div class="i-m-b-3">
					<div class="i-m-b-3-box">
						<div class="imb3-top">
							<h2>
								经验丰富的<br>教育团队
							</h2>
							<p>我们的英语母语外教和学习顾问个个经验丰富，拥有专业教学资质。他们很乐意在你的英语学习过程中全力提供帮助。</p>
						</div>
						<div class="imb3-bottom">
							<swiper ref="mySwiper" autoplay :options="swiperOptions2">
								<swiper-slide>
									<div class="imb3bs-tet">
										<h3>Karen Burger 美国人</h3>
										<p>在华尔街英语，我把探索新文化和鼓励学生学习的热情相融合。很荣幸有这种与学生们交换生活体验、参与他们英语学习之旅的机会。</p>
										<div>
											<div>
												<span>很荣幸能参与学生们的英语学习之旅。</span>
											</div>
										</div>
									</div>
									<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_02a.png" alt="">
								</swiper-slide>
								<swiper-slide>
									<div class="imb3bs-tet">
										<h3>Stephan Buys 南非人</h3>
										<p>我是华尔街英语的一名外教。华尔街英语有着世界一流的教学团队和令人耳目一新的学习氛围，让我每一天的工作都非常享受。</p>
										<div>
											<div>
												<span>每一天的工作都非常享受。</span>
											</div>
										</div>
									</div>
									<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_02b.png" alt="">
								</swiper-slide>
								<swiper-slide>
									<div class="imb3bs-tet">
										<h3>David Jackson 美国人</h3>
										<p>我来自美国，有4年英语教学经验。华尔街英语独特的教学方法让学生有效学习。我喜欢在这里教学，因为我能帮学生们实现学习目标。</p>
										<div>
											<div>
												<span>我喜欢在这里教学，因为能帮学生实现学习目标。</span>
											</div>
										</div>
									</div>
									<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_02c.png" alt="">
								</swiper-slide>
							</swiper>
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
						<div class="imb-red imb3-red">
							<div>
								<p>
									<span></span>
									来认识我们的教学团队
								</p>

							</div>
						</div>
					</div>

				</div>
				<div class="i-m-b-4 clearfix">
					<div class="imb4-left">
						<h2>行之有效的<br>学习方法</h2>
						<p class="imb4l-P">
							使用华尔街英语独创的“多元法
							<sup>®</sup>
							”，你可以像学习母语一样自然而然地学习英语。
						</p>
						<div class="imb-red imb4-red">
							<div>
								<p>
									<span></span>
									了解更多
								</p>

							</div>
						</div>
					</div>
					<div class="imb4-right">
						<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_03.png" alt="">
					</div>
				</div>
				<div class="i-m-b-5">
					<div class="imb5-left">
						<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_04.png" alt="">
					</div>
					<div class="imb5-right">
						<div class="imb5r-box">
							<div class="imb5rb-con">
								<h2>
									成为我们<br>社区的一员
								</h2>
								<p class="imb5rbc-P">
									华尔街英语不仅是学习英语的地方，它更是结伴寻友、了解全球文化的地方。
									<span></span>
									<br>
									全球已经有超过200万人通过我们的帮助，提高了英语交际能力。
									<span></span>
									<br>
									当你开启华尔街英语的学习之旅，你同时也打开了通往新世界的大门。
								</p>
								<div class="imb-red imb4-red">
									<div>
										<p>
											<span></span>
											最近学习中心
										</p>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="i-m-b-6">
					<div class="imb6-border"></div>
					<div class="imb6-box">
						<div class="imb6b-1">
							<h2>免费课程体验</h2>
							<p>试着体验一下在华尔街英语学习的感觉。你可以试学我们功能强大的多媒体课件，或上一堂一对一在线外教课。</p>
						</div>
						<div class="imb6b-2">
							<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_05.png" alt="">
						</div>
						<div class="imb6b-3">
							<div class="imb-red imb63-red">
								<div>
									<p>
										<span></span>
										联系我们
									</p>

								</div>
							</div>
						</div>
						<div class="imb6b-4">
							<div class="imb6b4-text">
								<h2>英语测试</h2>
								<p>为帮助你更快地达成学习目标，我们会精确定位你的英语起始级别。现在来参加在线测试，了解你的英语水平吧。</p>
							</div>
							<div class="imb-red imb64-red">
								<div>
									<p>
										<span></span>
										了解更多
									</p>

								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>


		<!-- 客服 -->
		<div class="i-service" v-show="serviceShow">
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
			<div class="i-s-4" @click="closeService"></div>
		</div>

		<!-- 联系方式 -->
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
				serviceShow:true,
				swiperOptions1: {
					pagination: {
						el: '.swiper-pagination'
					},
					autoplay: {
						disableOnInteraction: false, //手动滑动之后不打断播放
						delay: 3000
					},
					loop: true,
				},
				swiperOptions2: {
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					autoplay: {
						delay: 3000
					},
					loop: true,
				}
			}
		},
		methods:{
			closeService(){
				if (this.serviceShow) {
					this.serviceShow=false
				}
			},
			scrollTop(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="stylus">
	.index {
		.clearfix:after {
			content: ".";
			display: block;
			clear: both;
		}

		ul li {
			list-style none;
		}

		a {
			color #fff;
			text-decoration: none;
		}

		//圈圈动画·····························································
		@keyframes warn1 {
			0% {
				transform: scale(0.9);
				opacity: 0;
			}

			50% {
				transform: scale(1.2);
				opacity: 0.5;
			}

			100% {
				transform: scale(1.3);
				opacity: 1;
			}

		}

		@keyframes warn2 {
			0% {
				transform: scale(1.3);
				opacity: 1;
			}

			50% {
				transform: scale(1.5);
				opacity: 0.5;
			}

			100% {
				transform: scale(1.7);
				opacity: 0;
			}
		}

		.imb-red::before {
			content ""
			width 130px;
			height 130px;
			position absolute;
			border-radius 50%;
			border 1px solid rgba(238, 45, 66, 0.15);
			transform: scale(1);
			animation: warn1 1s ease-out infinite;
		}

		.imb-red::after {
			content "";
			width 130px;
			height 130px;
			position absolute;
			border-radius 50%;
			border 1px solid rgba(238, 45, 66, 0.15);
			transform: scale(1.3);
			animation: warn2 1s ease-out infinite
		}
		.imb-red {

			// margin-left: 123px;
			width 120px;
			height 120px;
			background #ee2d42;
			box-shadow 0px 18px 25px 10px rgba(238, 45, 66, 0.48);
			border-radius 50%;
			display flex;
			align-items center;
			justify-content center;
			div {
				p {
					width 80px;
					height 70px;
					color #fff;
					font-size 16px;
					font-weight bold;
					display flex;
					flex-direction column;
					align-items: center;
					justify-content space-between;

					span {
						display block;
						background: url(../assets/mengze/sprites_img.png) no-repeat -1202px -776px;
						width: 18px;
						height: 31px;
					}
				}
			}
		}

		//轮播·································································
		.i-swiper-box {
			width 100%;
			height 500px;

			.swiper-container-horizontal>.swiper-pagination-bullets {
				bottom 20px;
			}

			.swiper-pagination-bullet {
				width 12px;
				height 12px;
			}

			.swiper-pagination-bullet-active {
				background #fff;
			}

			.swiper-wrapper {
				width 100%;
				height 100%;

				.swiper-slide {
					width 100%;
					height 100%;

					img {
						width 100%;
						height 100%;

					}
				}


			}
		}

		// 主要·······························································
		.i-main {
			max-width 1400px; // height 2000px
			margin 0 auto;
			overflow: hidden;

			.i-m-box {
				.i-m-b-1 {
					width 1180px;
					margin 0 auto;
					margin-top 40px;

					h1 {
						font-size: 60px;
						line-height: 70px;
						width: 45%;
						margin-top: 25px;
						margin-bottom: 30px;
						margin-left: 60px;
						color: #ee2d42;
					}

					.imb1-p {
						width: 30%;
						font-size: 18px;
						margin-left: 108px;
						margin-bottom: 43px;
						line-height: 24px;
						color: #575757;
					}

					.imb1-red {
						margin-left: 123px;

					}

				}

				.i-m-b-2 {
					width 1400px;
					height 991px; // background #ccc
					overflow: hidden;
					position: relative;
					margin-top: -190px;

					.imb2-img {
						position: absolute;
						z-index: 1;
						right: 791px;
						top: 337px;
					}

					.imb2-big {
						// position: absolute;
						width: 991px;
						height: 991px;
						min-height: 0px;
						float: right;
						display: table;
						vertical-align: middle;
						margin-right: -72px;
						border-radius: 50%;
						background: #043458;

						.imb2-Btop {
							height 483px;
							color #fff;

							h2 {
								padding-left: 110px;
								padding-top: 180px;
								width: 90%;
								line-height: 70px;
								font-size: 60px;
								position: relative;
								font-weight: bold;
							}

							p {
								box-sizing border-box;
								position: relative;
								font-size: 16px;
								line-height: 24px;
								padding-left: 170px;
								margin-top: 25px;
								width: 80%;
								max-width: 560px;
							}
						}

						.imb2-Bbottom {
							position: relative;
							font-size: 16px;
							line-height: 24px;
							width: 90%;
							padding-left: 160px;
							padding-right: 10px;

							ul {
								// display flex
								border-bottom: 0;
								padding-bottom: 50px;
								margin-left: -20px;

								li {
									float: left;
									display: inline-block;
									padding-left: 5px;
									padding-right: 5px;

									position: relative;

									a {
										font-weight: bold;
										font-size: 16px;
										line-height: 24px;
										padding: 8px 25px;
										// color #fff
									}
								}

								.imb2-li {

									a {
										color #ee2d42
									}

									a::after {
										content: '';
										border-style: solid;
										border-width: 6px;
										border-color: transparent;
										border-top-width: 0;
										border-bottom: 12px solid #ee2d42;
										width: 0;
										height: 0;
										font-size: 0;
										line-height: 0;
										position: absolute;
										top: 100%;
										left: 50%;
										margin-left: -6px;
										margin-top: 6px;
										// display: none;
									}
								}


							}

							.imb2bbBottom {
								width: 741px;

								margin-top 30px;

								div {
									width: 48%;
									float: left;
								}

								p {
									float: left;
									width: 30%;
									margin-top: 0px;
									text-align: left;
									color #fff
								}

							}

						}

					}

					.imb2-red {
						position: absolute;
						bottom: 58px;
						left: 589px;
						z-index: 1;
					}
				}

				.i-m-b-3 {
					width: 1410px;
					height: 1410px;
					border-radius 50%;
					border 2px solid #ee2d42;
					position: relative;
					top: 40px;
					margin-left: -200px;

					// z-index: -1;
					.i-m-b-3-box {
						margin-left: 400px;

						margin-top 88px;

						.imb3-top {
							margin-right: 300px;
							margin-left: 40px;
							height: 301px;

							h2 {
								margin-bottom: 25px;
								font-size: 60px;
								line-height: 70px;
								margin-left: 60px;
								color: #ee2d42;
								font-weight: bold;
							}

							p {
								margin-left: 130px;
								font-size: 16px;
								line-height: 24px;
								width: 60%;
								margin-bottom: 43px;
								color: #575757;
							}
						}

						.imb3-bottom {
							width 900px;
							height 900px;
							border-radius 50%;
							background #ee2d42;

							.swiper-container {
								top -100px
							}

							.swiper-container,
							.swiper-slide,
							.swiper-slide {
								width 1080px;
								height 825px // margin-top -100px
							}

							.swiper-slide {
								position: relative;

								.imb3bs-tet {
									color #fff;
									width 530px;
									height 530px;
									position: absolute;

									top 270px;
									left 200px;

									h3 {
										font-size: 40px;
										line-height: 50px;
										font-weight: bold;
										margin-bottom: 20px;

									}

									p {
										font-size: 16px;
										line-height: 24px;
										margin-left: 70px;
										width: 50%;
										margin-bottom: 110px;
									}

									div {
										position: relative;
										padding-top: 20px;
										font-weight: bold;
										font-size: 30px;
										line-height: 36px;
										margin-bottom: 180px;

										span {
											position: relative;
											display: block;
											margin-left: 70px;
											margin-right: 100px;
										}

										span::before {
											display block;
											position: absolute;
											content: '';
											background-image: url(../assets/mengze/sprites_img.png);
											background-position: -1521px -414px;
											width: 73px;
											height: 62px;
											left: -110px;
											top: -45px;
										}

										span::after {
											display block;
											position: absolute;
											content: '';
											background-image: url(../assets/mengze/sprites_img.png);
											background-position: -1624px -414px;
											width: 73px;
											height: 62px;
											right: -100px;
											bottom: -55px;
										}
									}
								}



								img {
									width 468px;
									height 468px;
									position: absolute;
									top 0px;
									right 0px
								}
							}


							.swiper-button-prev,
							.swiper-button-next {
								top 59% ;
								color #fff
							}

							.swiper-button-prev {
								left 430px;
								width 50px;
								height 50px;
							}

							.swiper-button-next {
								top 65%;
								right: 137px;
								width 30px;
								height 30px
							}
						}

						.imb3-red::after,
						.imb3-red::before {
							border: 1px solid rgba(4, 52, 88, 0.15);
						}

						.imb3-red {
							position: relative;
							top: -164px;
							left: 39px;
							width 143px;
							height 143px;

							background #043458;
							box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.58);

							div {
								p {
									height 90px;
									width 100px;
									text-align: center;

									span {
										display block;
										background: url(../assets/mengze/sprites_img.png) no-repeat -1768px -323px;
										width: 46px;
										height: 34px;
									}
								}
							}
						}
					}

				}

				.i-m-b-4 {
					width 1181px; // height 200px

					// background #000000
					margin 150px auto 20px;

					.imb4-left {
						// position: relative;
						margin-bottom: 63px;
						float: left;
						width: 50%;

						h2 {
							color: #043458;
							font-size: 60px;
							line-height: 70px;
							margin-top: 0;
							margin-left: 110px;
							width: 75%;
							margin-bottom: 40px;
							font-weight bold
						}

						.imb4l-P {
							margin-left: 185px;
							width: 53%;
							margin-bottom: 32px;
							font-size: 16px;
							line-height: 24px;
							color: #575757;
						}

						.imb4-red::after,
						.imb4-red::before {
							border: 1px solid rgba(4, 52, 88, 0.15);
						}

						.imb4-red {
							position: relative;
							top: 0;
							left: 160px;
							width 137px;
							height 137px;
							background #043458;
							box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.58)
						}

					}

					.imb4-right {
						float: right;
						width: 50%;
						padding-top: 53px;
					}
				}

				.i-m-b-5 {
					width 1400px;
					height 1065px // background #000000
					// overflow: hidden;
					position: relative;

					.imb5-left {
						position: absolute;
						z-index: 3;
						bottom: 174px;
						right: 678px;
					}

					.imb5-right {
						position: absolute;

						right -7%;

						.imb5r-box {
							width 956px;
							height 956px;
							border-radius: 50%;
							border: 2px solid #ee2d42;

							.imb5rb-con {
								width 670px;
								margin 0 auto;

								h2 {
									font-size: 60px;
									line-height: 70px;
									margin-top: 172px;
									margin-left: 16px;
									margin-bottom: 23px;
									width: 50%;
									height: 160px;
									color: #ee2d42;
								}

								.imb5rbc-P {
									font-size: 16px;
									line-height: 24px;
									width: 55%;
									margin-left: 90px;
									min-height: 260px;
									color: #575757;

									span {
										display block;
										height 10px;
									}
								}

								.imb4-red {
									position: relative;
									top: 265px;
									left: 300px;
									width 137px;
									height 137px;

									div {
										p {
											height 60px;
											width 100px;
											text-align: center;

											span {
												display block;
												background: url(../assets/mengze/sprites_img.png) no-repeat -1552px -267px;
												width: 25px;
												height: 25px;
											}
										}
									}
								}
							}
						}
					}
				}

				.i-m-b-6 {
					width 1400px;
					height 1000px; // background #ccc
					position: relative;

					.imb6-border {
						position: absolute;
						top -50px;
						right 300px;
						width: 1400px;
						height: 1400px;
						border-radius: 50%;
						border: 2px solid #043458;
					}

					.imb6-box {
						position: absolute;

						top -20px;

						.imb6b-1 {
							width 727px;
							height 727px;
							background: #043458;
							border-radius 50%;
							position: absolute;

							left 250px;
							top -150px;

							h2 {
								color: #ffffff;
								margin-left: 120px;
								font-size: 60px;
								line-height: 70px;
								width: 80%;
								margin-top: 170px;
								margin-bottom: 33px;
							}

							p {
								color: #ffffff;
								font-size: 16px;
								margin-left: 190px;
								padding-right: 23px;
								width: 60%;
								line-height: 24px;
							}
						}

						.imb6b-2 {
							position: absolute;
							left 80px;
							top 350px
						}

						.imb6b-3 {
							position: absolute;
							left: 104px;
							top: 223px;

							.imb63-red::before,
							.imb63-red::after {
								width 193px;
								height 193px;
							}

							.imb63-red {
								position: relative;
								top: 265px;
								left: 300px;
								width 193px;
								height 193px;

								div {
									p {
										height 70px;
										width 100px;
										font-size 24px;
										text-align: center;

									}
								}
							}
						}

						.imb6b-4 {
							position: absolute;

							left 500px;
							top 600px;

							.imb6b4-text {
								width 550px;
								height 250px; // background #000000

								h2 {
									color: #043458;
									font-weight: bold;
									margin-top: 26px;
									font-size: 40px;
									line-height: 50px;
									margin-left: 158px;
									margin-bottom: 26px;
								}

								p {
									font-size: 16px;
									line-height: 24px;
									margin-left: 195px;
									padding-right: 50px;
								}
							}

							.imb64-red::after,
							.imb64-red::before {
								border: 1px solid rgba(4, 52, 88, 0.15);
							}

							.imb64-red {
								position: relative;
								top: -123px;
								left: 514px;
								width 137px;
								height 137px;
								background #043458;
								box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.58)
							}

						}
					}

				}
			}
		}

		//客服····································································
		.i-service {
			// display none;
			position fixed;
			top 340px;
			right 180px;
			width 340px;
			height 340px;
			z-index 99;

			.i-s-1 {
				box-sizing border-box;
				font-size: 24px;
				padding: 100px 0 0 50px;
				box-shadow: 0px 0px 40px #043458;
				background: #023359;
				color: #ffffff;
				width: 340px;
				height: 340px;
				border-radius: 50%;

				p:nth-child(1) {
					font-size 16px;
					margin-bottom 5px;
				}
			}

			.i-s-2 {
				border-radius: 50%;
				box-shadow: 0px 0px 20px #666;
				position: absolute;
				top: 80px;
				right: -120px;
			}

			.i-s-3 {
				box-shadow: 0px 15px 50px #EE2D42;
				top: 230px;
				right: -10px;
				font-size: 20px;
				text-align: center;
				border-radius: 50%;
				width: 95px;
				height: 95px;
				line-height: 95px;
				position: absolute;
				background: #EE2D42;
				color: #ffffff;
			}

			.i-s-4 {
				opacity: 1;
				// filter: alpha(opacity=100);
				z-index: 10;
				position: absolute;
				top: 0;
				right: -100px;
				background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/help-close.png) center / 40px 40px no-repeat;
				border-radius: 50%;
				width: 40px;
				height: 40px;
			}
		}

		//联系方式···································································
		.i-right {
			width 60px;
			height 126px;
			position fixed;
			right 0;
			top 173px;
			z-index 100;

			div {
				width 60px;
				height 50%;
				background #043458;
				display flex;
				align-items center;
				justify-content center
			}
		}
	}
</style>

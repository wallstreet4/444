<template>
	<div class="onlinecourses">
		<div class="top">
			<p class='title'>
				<span>首页</span>
				|
				<span>课程</span>
				|
				<span>优选口语课程</span>
			</p>
			<p class="btn">
				立即免费体验
			</p>
		</div>
		
		<div class="conent">
			<div class="left" :class='{on: off}'>
				<ul>
					<li class='on'>优选口语课程简介</li>
					<li>在线优选口语中心</li>
					<li>马上报名</li>
				</ul>
			</div>
			<div class="none" :class='{on: off}'></div>
			<div class="right">
				<h2>优选口语课程简介</h2>
				<p class='txt'>华尔街英语在优选课程的基础上，开发出针对口语学习的在线口语中心，在这里有精彩纷呈的多媒体互动课，配备专业的外教师资和学习顾问督促学习和应用，为您英语口语的提升提供了良好的解决方案。</p>
				<div class="con">
					<div class="item">
						<div class="icon">
							<i></i>
							<h3>我们的教学优势</h3>
						</div>
						<ul>
							<li><span>独特的“多元法®”学习体系</span></li>
							<li><span>小班课教学模式</span></li>
							<li><span>高质量的师资和课程产品</span></li>
						</ul>
					</div>
					<div class="item">
						<div class="icon">
							<i></i>
							<h3>我们的教学优势</h3>
						</div>
						<ul>
							<li><span>独特的“多元法®”学习体系</span></li>
							<li><span>小班课教学模式</span></li>
							<li><span>高质量的师资和课程产品</span></li>
						</ul>
					</div>
					<div class="item">
						<div class="icon">
							<i></i>
							<h3>我们的教学优势</h3>
						</div>
						<ul>
							<li><span>独特的“多元法®”学习体系</span></li>
							<li><span>小班课教学模式</span></li>
							<li><span>高质量的师资和课程产品</span></li>
						</ul>
					</div>
				</div>
				
				<div class="rad">
					<div class="how">
						<div>
							<h2>在线优选口语中心</h2>
							<p>在华尔街英语的在线优选口语中心，学生可以随时随地学习多媒体课程，学习进度有课程顾问跟进和支持，相信每天45分钟的课程，会让您的英语口语有大幅提升。</p>
						</div>
					</div>
					<div class="how-con">
						<img src="../../../static/lrt/8796463824926.png" alt="">
						<div class="nav">
							<div class='left' @click='tab()'></div>
							<div class='right' @click='tab()'></div>
						</div>
						<div class="con1">
							<ul class="btn">
								<li :class='{on: curIndex == 0}' @click='tabs(0)'>1</li>
								<li :class='{on: curIndex == 1}' @click='tabs(1)'>2</li>
							</ul>
							<div class='banner'>
								<ul :style='{left: -curIndex*330 + "px"}'>
									<li>
										<h4>优秀专业的外教授课</h4>
										<p>华尔街英语坚持严格的教师聘用制度，所有的教师都拥有国际教师资格证书，必须先通过华尔街英语提供的44小时教师培训课程才有机会执教，并且每年必须定期接受专业培训。华尔街英语坚持通过吸引优秀专业的教师人才来为学生提供优质的学习体验。</p>
									</li>
									<li>
										<h4>学习的同时不忘社交</h4>
										<p>华尔街英语的在线优选课程让您能够学习交友两不误。既可以在线上和外教及同学交流、练习英语，又可以收到来自线下学习中心的活动邀请，真实的浸入式场景体验更是巩固了所学知识，让您的学习更有成效。</p>
									</li>
								</ul>
							</div>
							<p>立即免费试听外教课</p>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
		
		<div class="product">
			<h2>马上报名</h2>
			<ul>
				<li class='item'>
					<div class="icon">
						<span>优选口语</span>
					</div>
					<div class="bck">
						<span>
							<span>
								价格
								<br>
								咨询
							</span>
						</span>
					</div>
					<div class='con'>
						<p>
							<span>6</span>
							<span>个月</span>
						</p>
						<p>在线优选课程</p>
						<p class='txt'>优选口语</p>
					</div>
				</li>
				<li class='item'>
					<div class="icon">
						<span>优选口语</span>
					</div>
					<div class="bck">
						<span>
							<span>
								价格
								<br>
								咨询
							</span>
						</span>
					</div>
					<div class='con'>
						<p>
							<span>12</span>
							<span>个月</span>
						</p>
						<p>在线优选课程</p>
						<p class='txt'>优选口语</p>
					</div>
				</li>
			</ul>
			<ul class='list'>
				<router-link to='curriculum' tag='li'>了解更多课程</router-link>
				<li>免费英语水平测试</li>
			</ul>
		</div>
	
	</div>
</template>

<script>
	export default{
		mounted(){
			window.onscroll = (ev) => {
				if(document.documentElement.scrollTop >= 500){
					this.off = true;
				}else{
					this.off = false;
				}
			}
		},
		data(){
			return {
				curIndex: 0,
				off: false
			}
		},
		methods: {
			tab(){
				if(this.curIndex){
					this.curIndex = 0;
				}else{
					this.curIndex = 1;
				}
			},
			tabs(index){
				this.curIndex = index;
			}
		}
	}
</script>

<style scoped="" lang='stylus'>
	@keyframes sonar{
		 0%{
			 transform:scale(1);
			opacity:0;
		 }
		 50%{
			 transform:scale(1.5);
			 opacity:1;
		}
		100%{
			transform:scale(2);
			opacity:0;
		}
	}
	.onlinecourses{
		width: 1423px;
		margin: 0 auto;
		.product{
			background: url(../../../static/lrt/product.png) center/100% 100% no-repeat;
			padding-bottom: 50px;
			padding-top: 30px;
			margin-top: 10px;
			h2{
				font-size: 40px;
				line-height: 50px;
				color: #043458;
				text-align: center;
				font-weight: 500;
			}
			ul.list{
				li:nth-child(1){
					background: url(../../../static/lrt/product-offer-icon03.png) -5px -10px no-repeat;
					&:hover{
						background: url(../../../static/lrt/product-offer-icon01.png) -5px -10px no-repeat;
					}
				}
				li:nth-child(2){
					background: url(../../../static/lrt/product-offer-icon02.png) -5px -10px no-repeat;
					&:hover{
						background: url(../../../static/lrt/product-offer-icon04.png) -5px -10px no-repeat;
					}
				}
				li{
					margin: 0 53px;
					padding: 0 0 10px 30px;
					border-bottom: 3px solid #ee2d42;
					letter-spacing: 3px;
					color: #ee2d42;
					font-weight: bold;
					&:hover{
						color: rgb(0,130,169);
						border-color: rgb(0,130,169);
					}
				}
			}
			ul{
				display: flex;
				width: 600px;
				margin: 30px auto;
				justify-content: space-between;
				li.item{
					display: flex;
					background: #64cfe9;
					width: 220px;
					height: 220px;
					border-radius: 50%;
					color: #fff;
					position: relative;
					.icon{
						top: -20px;
						right: 16px;
						position: absolute;
						background: url(../../../static/lrt/ason-prime-n.png) no-repeat;
						width: 89px;
						height: 85px;
						span{
							color: #ee2d42;
							position: absolute;
							top: 50px;
							left: 33px;
							transform: rotate(-14deg);
							font-size: 13px;
							left: 28px;
							font-weight: 600;
						}
					}
					.con{
						margin: auto;
						p{
							margin-bottom: 5px;
							span:nth-child(1){
								font-size: 72px;
								color: #fff;
								font-weight: normal;
							}
						}
						.txt{
							font-size: 14px;
						}
					}
					
					
					.bck{
						width: 75px;
						height: 75px;
						font-size: 14px;
						line-height: 20px;
						padding: 20px 0 0;
						display: block;
						text-align: center;
						position: absolute;
						bottom: 0;
						right: 0;
						&:hover:before{
							opacity: .8;
						}
						&:before{
							position: absolute;
							left: 0;
							width: 75px;
							height: 75px;
							background: #ee2d42;
							box-shadow: 0px 18px 25px 10px rgba(238, 45, 66, 0.48);
							border-radius: 50%;
							content: '';
							transform: scale(1);
							transition: transform 0.3s linear;
						}
						>span{
							display: block;
							width: 100%;
							height: 75px;
							position: absolute;
							font-weight: bold;
							display: flex;
							&:before{
								content: '';
								position: absolute;
								top: 0;
								left: 0;
								opacity: 0;
								width: 100%;
								height: 100%;
								border-radius: 50%;
								animation: sonar 2.5s infinite 2.5s;
								border: 1px solid rgba(238, 45, 66, 0.15)
							}
							&:after{
								content: '';
								position: absolute;
								top: 0;
								left: 0;
								opacity: 0;
								width: 100%;
								height: 100%;
								border-radius: 50%;
								animation: sonar 2.5s infinite 1s;
								border: 1px solid rgba(238, 45, 66, 0.15);
							}
							span{
								margin: auto;
							}
						}
					}
					
					
					
				}
			}
		}
		.top{
			height: 500px;
			background: url(../../../static/lrt/prime-banner-speakercenter.jpg) top center no-repeat;
			position: relative;
			.title{
				color: #fff;
				position: absolute;
				top: 50px;
				left: 100px;
				span{
					margin: 0 5px;
					&:hover{
						color: rgb(5,132,169)
					}
				}
			}
			.btn{
				border-radius: 5px;
				margin: 355px 0 0 760px;
				display: inline-block;
				width: 262px;
				height: 55px;
				line-height: 55px;
				text-align: center;
				background: #da4148;
				font-weight: bold;
				color: #fff;
			}
		}
		
		
		.conent{
			display: flex;
			.left.on{
				position: fixed;
				left: 0;
				top: 180px;
			}
			.none.on{
				display: block;
				width: 600px;
			}
			.none{
				display: none;
			}
			.left{
				width: 600px;
				ul{
					margin-left: 10px;
					li{
						font-size: 16px;
						line-height: 35px;
						color: #333;
						padding-left: 112px;
						position: relative;
						text-indent: 10px;
						&:before{
							content: '';
							position: absolute;
							top: 50%;
							left: 0;
							margin-top: -1px;
							width: 0;
							height: 2px;
							background: #ee2d42;
							transition: 0.3s;
						}
						&:hover:before{
							width: 110px;
						}
						&:hover{
							font-weight: bold;
							color: #ee2d42;
							cursor:pointer;
						}
						&.on{
							font-weight: bold;
							color: #ee2d42;
						}
						&.on:before{
							width: 110px;
						}
					}
				}
			}
			
			
			.right{
				position: relative;
				h2{
					font-size: 50px;
					color: #043458;
					font-weight: bold;
				}
				.txt{
					font-size: 16px;
					line-height: 24px;
					margin-top: 10px;
				}
				.con{
					display: flex;
					justify-content: space-between;
					margin-top: 50px;
					width: 850px;
					.item:nth-child(1) i{
						background-position: -1111px -414px;
					}
					.item:nth-child(2) i{
						background-position: -578px -680px;
					}
					.item:nth-child(3) i{
						background-position: -672px -680px;
					}
					.item{
						i{
							display: block;
							margin: 0 auto;
							background-image: url(../../../static/lrt/sprites_img.png);
							width: 71px;
							height: 66px;
						}
						h3{
							font-size: 18px;
							color: #002654;
							margin-top: 30px;
						}
						ul{
							margin-top: 10px;
							
							li{
								font-size: 30px;
								height: 22px;
								margin-left: 10px;
								line-height: 22px;
								margin-bottom: 10px;
								list-style: disc;
								span{
									font-size: 16px;
									line-height: 28px;
									color: #272727;
									vertical-align: 4px;
									margin-left: -6px;
								}
							}
						}
					}
				}
				
				.rad{
					height: 600px;
				}
				.how{
					width: 395px;
					height: 395px;
					position: absolute;
					top: 405px;
					left: 15px;
					color: #fff;
					z-index: 10;
					background: #ee2d42;
					border-radius: 100%;
					display: flex;
					div{
						margin: auto;
						width: 200px;
						height: 200px;
						h2{
							width: 290px;
							color: #fff;
							font-size: 27px;
						}
						p{
							width: 130%;
							margin-top: 20px;
							line-height: 28px;
						}
					}
				}
				
				.how-con{
					width: 530px;
					height: 530px;
					border: 3px solid #ee2d42;
					border-radius: 100%;
					position: absolute;
					top: 470px;
					left: 350px;
					img{
						width: 245px;
						height: 245px;
						position: absolute;
						left: -150px;
						bottom: 25px;
						z-index: 999;
					}
					.nav{
						position: absolute;
						right: 30px;
						bottom: -160px;
						z-index: 99;
						transform: translate(-30%, -91%);
						width: 136px;
						height: 136px;
						background: rgba(4, 52, 88, 0.58);
						box-shadow: 0 18px 25px 10px rgba(4, 52, 88, 0.58);
						border-radius: 100%;
						&:before{
							content: '';
							position: absolute;
							top: 50%;
							left: 50%;
							margin-left: -1px;
							margin-top: -68px;
							width: 3px;
							height: 136px;
							background: #fff;
							z-index: 10;
						}
						.left{
							width: 50%;
							height: 100%;
							display: block;
							float: left;
							position: relative;
							font-size: 0;
							background: #ee2d42;
							border-radius: 200px 0px 0px 200px;
							text-align: center;
							&:before{
								content: '';
								background-image: url(../../../static/lrt/sprites_img.png);
								background-position: -962px -776px;
								width: 18px;
								height: 31px;
								display: block;
								position: absolute;
								top: 50%;
								left: 50%;
								margin-left: -9px;
								margin-top: -15px;
							}
						}
						.right{
							width: 50%;
							height: 100%;
							display: block;
							float: left;
							position: relative;
							font-size: 0;
							background: #ee2d42;
							border-radius: 0px 200px 200px 0px;
							text-align: center;
							&:before{
								content: '';
								background-image: url(../../../static/lrt/sprites_img.png);
								background-position: -1202px -776px;
								width: 18px;
								height: 31px;
								display: block;
								position: absolute;
								top: 50%;
								left: 50%;
								margin-left: -9px;
								margin-top: -15px;
							}
						}
					}
					.con1{
						width: 300px;
						height: 300px;
						margin: 120px auto;
						>p{
							margin-top: 50px;
							line-height: 26px;
							border-bottom: 2px solid #eb2d41;
							display: inline-block;
							cursor: pointer;
							color: #eb2d41;
						}
					}
					.banner{
						width: 300px;
						height: 200px;
						overflow: hidden;
						position: relative;
						ul{
							display: flex;
							width: 200%;
							position: absolute;
							left: 0;
							transition: all .5s;
							h4{
								font-size: 20px;
								line-height: 40px;
								margin-bottom: 12px;
								color: #ee2d42;
								font-weight: bold;
							}
							p{
								font-size: 16px;
								    line-height: 24px;
							}
						}
					}
					
					.btn{
						display: flex;
						li{
							cursor: pointer;
							position: relative;
							display: block;
							text-align: center;
							line-height: 33px;
							width: 33px;
							height: 33px;
							border-radius: 50%;
							background: #fff;
							margin: 0 5px 0 0;
							border: 3px solid #333;
							&.on{
								border: 3px solid #ee2d42;
								color: #ee2d42;
							}
						}
					}
				}
				
				
			}
		}
		
		
	}
</style>

<template>
	<div class="curriculum">
		<div class="top">
			<router-link to='index' tag='span'>首页</router-link>
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
		
		
		<div class="conent2">
			<div class="level">
				<div class="box">
					<h3>找到适合你的课程</h3>
					<div>
						<p>我们很乐意为你找到适合你的英语水平的课程</p>
						<p class='txt'>英语测试</p>
						<p class='txt'>免费课程</p>
						<p class='txt'>立即咨询</p>
					</div>
				</div>
			</div>
			<div class="wrap">
				<div class="txt">
					<h3>欢迎来到学习中心</h3>
					<p>华尔街英语在中国拥有75家学习中心。我们为你提供优良的学习环境，让学生能够享乐其中，参与丰富的活动、结识新的朋友。</p>
					<p class='btn'> 最近学习中心</p>
				</div>
				<div class="banner">
					<ul :style='{left: left+"px"}' :class='{on}'>
						<li><img src="../../../static/lrt/item3.png" alt=""></li>
						<li><img src="../../../static/lrt/item1.png" alt=""></li>
						<li><img src="../../../static/lrt/item2.png" alt=""></li>
						<li><img src="../../../static/lrt/item3.png" alt=""></li>
						<li><img src="../../../static/lrt/item1.png" alt=""></li>
					</ul>
				</div>
				<div class="nav">
					<div class='left' @click='add'></div>
					<div class='right' @click='plus'></div>
				</div>
				<div class="red">
					<p>咨询我们</p>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				left: -572,
				on: true
			}
		},
		methods:{
			add(){
				this.left -= 572;
				if(this.left == -2288){
					setTimeout(() => {
						this.on = false;
						this.left = -572;
						setTimeout(() => {
							this.on = true;
						},10)
					},500)
				}
			},
			plus(){
				this.left += 572;
				if(this.left == 0){
					setTimeout(() => {
						this.on = false;
						this.left = -1716;
						setTimeout(() => {
							this.on = true;
						},10)
					},500)
				}
			}
		}
	}
</script>

<style lang='stylus'>
	.curriculum{
		position: relative;
		overflow: hidden;
		width: 1423px;
		margin: 0 auto;
		padding-top: 30px;
		.top{
			box-sizing: border-box;
			padding: 0 200px;
			& span:nth-child(2){
				color: red;
				font-weight: bold;
			}
			& span:nth-child(1){
				&:hover{
					color: rgb(0,130,169);
				}
			}
		}
		
		.conent2{
			position: relative;
			padding-top: 189px;
			&:before{
				content: '';
				position: absolute;
				top: 347px;
				left: -556px;
				z-index: 0;
				width: 1491px;
				height: 1491px;
				border-radius: 100%;
				border: 3px solid #043458;
			}
			.wrap{
				margin-top: 100px;
				margin-left: 200px;
				display: flex;
				height: 900px;
				position: relative;
				.red{
					position: absolute;
					top: 60%;
					width: 136px;
					height: 136px;
					background: #ee2d42;
					box-shadow: 0px 18px 25px 10px rgba(238, 45, 66, 0.48);
					border-radius: 50%;
					content: '';
					transform: scale(1);
					transition: transform 0.3s linear;
					text-align: center;
					color: #fff;
					line-height: 136px;
					right: 670px;
				}
				.nav{
					position: absolute;
					right: 250px;
					z-index: 99;
					top: 65%;
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
					div:hover{
						background: #fff;
					}
					.left:hover:before{
						background-image: url(../../../static/lrt/sprites_img.png);
						background-position: -1106px -776px;
						width: 18px;
						height: 31px;
					}
					.right:hover:before{
						background-image: url(../../../static/lrt/sprites_img.png);
						background-position: -1154px -776px;
						    width: 18px;
						    height: 31px;
					}
					.left{
						width: 50%;
						height: 100%;
						display: block;
						float: left;
						position: relative;
						font-size: 0;
						background: #043458;
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
						background: #043458;
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
				.txt{
					width: 400px;
					h3{
						font-size: 40px;
						line-height: 50px;
						color: #043458;
						padding-bottom: 15px;
						font-weight: bold;
					}
					p{
						font-size: 16px;
						line-height: 24px;
						font-weight: normal;
						padding-left: 60px;
					}
					.btn{
						font-weight: bold;
						color: red;
						margin-top: 30px;
						text-decoration:underline;
						&:hover{
							color: #0082a9;
						}
					}
				}
				.banner{
					width: 100%;
					height: 572px;
					max-width: 570px;
					overflow: hidden;
					position: relative;
					z-index: 10;
					ul{
						position: absolute;
						left: 0;
						display: flex;
					}
					ul.on{
						transition: all .5s;
					}
				}
			}
			.level{
				    width: 100%;
				    max-width: 451px;
				    position: relative;
				    margin-left: 176px;
					width: 100%;
					height: 451px;
					border-radius: 100%;
					background: #ee2d42;
					position: relative;
					.box{
						width: 100%;
						position: absolute;
						top: 50%;
						left: 50%;
						max-width: 300px;
						font-size: 18px;
						color: #fff;
						transform: translate(-50%, -51%);
						h3{
							font-size: 30px;
							line-height: 36px;
							padding-bottom: 3px;
							font-weight: bold;
						}
						div{
							box-sizing: border-box;
							padding-left: 20px;
							p{
								font-size: 16px;
								line-height: 24px;
								font-weight: normal;
								margin-top: 10px;
							}
							.txt{
								text-decoration:underline;
								font-weight: bold;
								color: #fff;
								&:hover{
									color: rgb(0,130,169)
								}
							}
						}
					}
			}
		}
		
		.conent{
			display: flex;
			margin-top: 100px;
			box-sizing: border-box;
			padding: 0 50px;
			position: relative;
			&:before{
				content: '';
				position: absolute;
				bottom: 50px;
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
					margin-top: 150px;
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

<template>
	<div class="learningjourney">
		<div class="learningjourneyBox">
			<div class="learTop">
				<ul>
					<li>首页</li>
					<li>学习之旅</li>
				</ul>
				<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/learn-bg.png" alt="">
				<div>
					<h2>和华尔街英语一起学习</h2>
					<p>华尔街英语的“多元法<sup>®</sup>”学习体系和结构化的学习方法，确保你无论是参与我们的在线课程，还是学习中心课堂，都能拥有快速有效的学习体验。</p>
				</div>
			</div>
			<diV class="learCon">
				<div class="lCenter">
					<div class="lCenLine">
						<div :class="item.b?'lCdot lCdot'+item.a+' lCdot-active':'lCdot lCdot'+item.a" v-for="(item,index) in dotArr" :key="index">
							<div>{{item.a}}</div>
						</div>
						<!-- <div class="lCdot lCdot1 lCdot-active">
							<div>1</div>
						</div>
						<div class="lCdot lCdot2" ref="lCdot2">
							<div>2</div>
						</div> -->
						
						
						<div class="lCenLine-active" :style="'height:'+linkHeight+'px'"></div>
					</div>
					
					
				</div>
				<div class="lear-items">
					<div class="lear-item1 lear-item">
						<div class="lItem-img">
							<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T8/desktop/T8_01.png" alt="">
						</div>
						<div class="lItem-text">
							<h3>你的第一堂入门课 </h3>
							<p class="lItemTp-red">和你的学习顾问一起参加入门课</p>
							<p class="lItemTp-ccc">我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。</p>
							<p class="lItemTp-red">预约你接下来的课程</p>
							<p class="lItemTp-ccc">你的学习顾问会根据你的日程安排， 帮你预约课程。</p>
							<p class="lItemTp-red">与你的课程顾问面谈</p>
							<p class="lItemTp-ccc">入门课程后，课程顾问将与你会面并进行后续跟进。</p>
						</div>
					</div>
					<div class="lear-item2 lear-item">
						<div class="lItem-text lItem-text-blue">
							<h3>新学员讨论会  </h3>
							<p class="lItemTp-red">你会更多了解学习中心和华尔街英语的“多元法<sup>®</sup>”学习体系</p>
							<p class="lItemTp-ccc">在充满乐趣的活动中，你的学习顾问和服务经理会把你介绍给学习中心的教育团队，他们将在你随后的学习旅程中提供全程支持与指导。</p>
							<p class="lItemTp-red">你的线上和线下学习工具</p>
							<p class="lItemTp-ccc">学习顾问将为你介绍功能强大的线上线下学习工具。我们全新升级的多媒体课程将“听、说、读、写”融入好莱坞式微电影，有趣实用，带动你的学习兴趣的同时，让你在“母语环境”中，更“自然”、更有效全面提升英语水平。同时，这些学习工具适用于多种电子设备，可以让你的英语学习不受时间和空间的限制，尽在“掌控”。</p>
						</div>
						<div class="lItem-img">
							<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T8/desktop/T8_02.png" alt="">
						</div>
					</div>
					<div class="lear-item3 lear-item">
						 <div class="lItem-video">
							 <video src="https://wse.com.cn/_ui/responsive/theme-alpha/video/Digtal-Books.mp4" controls></video>
						 </div>
						 <div class="lItem-text">
						 	<h3>使用华尔街英语电子互动学生手册开始学习</h3>
						 	<p class="lItemTp-ccc">在我们的电子互动学生手册上，你可以使用各种各样的在线学习材料，强化阅读和写作技巧、掌握关键语法点，随时随地进行有针对性的学习。</p>
						 	
						 </div>
					</div>
					<div class="lear-item4 lear-item">
						<div class="lItem-text lItem-text-blue">
							<h3>欢迎来到英语角  </h3>
							<p class="lItemTp-ccc">通过参加英语角的活动，迅速提高你的英语口语水平。你可以用英语表达你的见解，并在外教的带领下了解全球文化，结识许多新朋友，扩大社交圈。</p>
							
						</div>
						<div class="">
							<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T8/desktop/T8_03.png" alt="">
						</div>
					</div>
					<div class="lear-item5 lear-item">
						<div class="lItem-video">
							<video src="https://wse.com.cn/_ui/responsive/theme-alpha/video/Digtal-Books.mp4" controls></video>
						</div>
						<div class="lItem-text">
							<h3>你的第一节外教<br>小班辅导课</h3>
							<p class="lItemTp-red">与外教老师见面</p>
							<p class="lItemTp-ccc">华尔街英语的外教小班辅导课非常重要。通过外教带领的各种互动活动，可以加强巩固你在多媒体部分学习到的重点同时得到许多有助于你实现英语学习目标的有益建议。</p>
							<p class="lItemTp-red">与学习顾问面谈</p>
							<p class="lItemTp-ccc">在你第一节外教小班辅导课之后，你的学习顾问和课程顾问将会与你见面，根据你的表现和老师的反馈，帮助你规划接下来的课程。</p>
							
						</div>
					</div>
					<div class="lear-item6 lear-item">
						<div class="lItem-text lItem-text-blue">
							<h3>参加外教补充课</h3>
							<p class="lItemTp-ccc">在外教补充课上，你可以进一步和外教老师以及其他几名学员进行场景对话练习，提升你的英语沟通能力。</p>
							
						</div>
						<div class="">
							<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T8/desktop/T8_04.png" alt="">
						</div>
					</div>
					<div class="lear-item7 lear-item">
						<div class="lItem-video">
							<video src="https://wse.com.cn/_ui/responsive/theme-alpha/video/Digtal-Books.mp4" controls></video>
						</div>
						<div class="lItem-text">
							<h3>加入社交俱乐部</h3>
							<p class="lItemTp-ccc">在华尔街英语，我们相信，学习应该是有趣的。我们的社交俱乐部让你在结交朋友、接触新文化的同时，练习各种实用的口语话题。</p>
							
						</div>
					</div>
					<div class="lear-item8 lear-item">
						<div class="lItem-text lItem-text-blue">
							<h3>课程回顾</h3>
							<p class="lItemTp-ccc">课程结束后，你将再次与你的学习顾问和课程顾问见面，以确保你经历了一次愉快的学习之旅！</p>
							
						</div>
						<div class="lItem-img">
							<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/learn-bg-bot.png" alt="">
						</div>
					</div>
				</div>
			</diV>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'learningjourney',
		data() {
			return {
				linkHeight:204,
				dotArr:[
					{
						a:1,
						b:true
					},{
						a:2,
						b:false
					},{
						a:3,
						b:false
					},{
						a:4,
						b:false
					},{
						a:5,
						b:false
					},{
						a:6,
						b:false
					},{
						a:7,
						b:false
					},{
						a:8,
						b:false
					}
				]
			}
		},
		mounted() {
			window.onscroll=(ev)=>{
				console.log(document.documentElement.scrollTop)
				this.linkHeight=document.documentElement.scrollTop+204
				if(document.documentElement.scrollTop>3099) {
					// this.dotArr[1].b=true
					for(var i=0;i<this.dotArr.length;i++){
						if (i<8) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
					
				}else if(document.documentElement.scrollTop>2570) {
					// this.dotArr[1].b=true
					for(var i=0;i<this.dotArr.length;i++){
						if (i<7) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
					
				}else if(document.documentElement.scrollTop>2250) {
					// this.dotArr[1].b=true
					for(var i=0;i<this.dotArr.length;i++){
						if (i<6) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
					
				}else if(document.documentElement.scrollTop>1728) {
					// this.dotArr[1].b=true
					for(var i=0;i<this.dotArr.length;i++){
						if (i<5) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
					
				}else if(document.documentElement.scrollTop>1335) {
					// this.dotArr[1].b=true
					for(var i=0;i<this.dotArr.length;i++){
						if (i<4) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
					
				}else if(document.documentElement.scrollTop>900) {
					// this.dotArr[1].b=true
					for(var i=0;i<this.dotArr.length;i++){
						if (i<3) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
					
				}else if(document.documentElement.scrollTop>356){
					for(var i=0;i<this.dotArr.length;i++){
						if (i<2) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
				}else if(document.documentElement.scrollTop<356){
					for(var i=0;i<this.dotArr.length;i++){
						if (i<1) {
							this.dotArr[i].b=true
						} else{
							this.dotArr[i].b=false
						}
					}
				}
			}
		}
	}
	
</script>

<style lang="stylus">
.learningjourney{
	li{list-style:none;}
	.learningjourneyBox{
		width 1181px;
		margin 0 auto;
		.learTop{
			width 100%;
			height 404px;
			position relative;
			ul {
				width 1181px;
				height 71px;
				display flex;
				align-items: center;
				padding 17px 20px 0;
				color #333;
				li {
					// color #fff;
					font-size 16px;
					padding 0 10px
				}
			
				li:nth-child(2) {
					color #ee2d42;
					font-weight bold;
					border-left 1px solid #333
				}
			}
			img{
				position: absolute;
				right -80px;
				top 0
			}
			div{
				max-width: 940px;
				margin: auto;
				min-height: 350px;
				padding-top: 40px;
				h2{
					font-weight: bold;
					color: #043458;
					max-width: 415px;
					font-size: 50px;
					line-height: 60px;
					margin-left: 35px;
				}
				p{
					max-width: 459px;
					line-height: 28px;
					margin-left: 35px;
					color: #333333;
				}
			}
		}
		.learCon{
			width 940px;
			height 3460px;
			margin 100px auto;
			position: relative;
			.lCenter{
				width 940px;
				height 3260px;
				.lCenLine{
					background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/line.png) center 0 no-repeat;
					position: absolute;
					z-index: 0;
					top: 50px;
					left: 50%;
					width: 190px;
					height 100%
					margin-left: -85px;
					.lCdot{
						position: absolute;
						width: 34px;
						height: 34px;
						background: #c5c5c5;
						z-index: 10;
						border-radius: 50%;
						transition .3s
						div{
							position: absolute;
							top: 50%;
							margin-top: -38px;
							width: 75px;
							height: 75px;
							text-align: center;
							font-size: 40px;
							color: #fff;
							line-height: 75px;
							font-weight: bold;
							border-radius: 100%;
							
						}
						div:before{
							content: '';
							position: absolute;
							top: 50%;
							margin-top: -8px;
						}
					}
					.lCdot-active{
						background: #ee2d42;
					}
					.lCdot-active:before{
						content: "";
						width: 18px;
						height: 18px;
						background: #fff;
						position: absolute;
						left: 50%;
						top: 50%;
						margin: -9px 0 0 -9px;
						border-radius: 50%;
					}
					.lCdot1{
						top: -5px;
						left: -12px;
						div{
							background: #ee2d42;
							left: 100%;
							margin-left: 20px;
						}
						div:before{
							right: 100%;
							margin-right: -1px;
							border-top: 8px solid transparent;
							border-bottom: 8px solid transparent;
							border-right: 10px solid #ee2d42;
						}
					}
					.lCdot2{
						top: 558px;
						    right: 8px;
						div{
							background: #043458;
							    right: 100%;
							    margin-right: 20px;
						}
						div:before{
							left: 100%;
							    margin-left: -1px;
							    border-top: 8px solid transparent;
							    border-bottom: 8px solid transparent;
							    border-left: 10px solid #043458;
						}
					}
					.lCdot3{
						top: 1088px;
						    left: 39px;
						div{
							background: #ee2d42;
							left: 100%;
							    margin-left: 20px;
						}
						div:before{
							right: 100%;
							    margin-left: -1px;
							        border-top: 8px solid transparent;
							        border-bottom: 8px solid transparent;
							        border-right: 10px solid #ee2d42;
						}
					}
					.lCdot4{
						top: 1541px;
						    left: 21px;
						div{
							background: #043458;
							    right: 100%;
							    margin-right: 20px;
						}
						div:before{
							left: 100%;
							    margin-left: -1px;
							    border-top: 8px solid transparent;
							    border-bottom: 8px solid transparent;
							    border-left: 10px solid #043458;
						}
					}
					.lCdot5{
						top: 1918px;
						    right: -7px;
						div{
							background: #ee2d42;
							    left: 100%;
							    margin-left: 20px;
						}
						div:before{
							right: 100%;
							    margin-right: -1px;
							    border-top: 8px solid transparent;
							    border-bottom: 8px solid transparent;
							    border-right: 10px solid #ee2d42;
						}
					}
					.lCdot6{
						top: 2455px;
						    left: 13px;
						div{
							background: #043458;
							    right: 100%;
							    margin-right: 20px;
						}
						div:before{
							left: 100%;
							    margin-left: -1px;
							    border-top: 8px solid transparent;
							    border-bottom: 8px solid transparent;
							    border-left: 10px solid #043458;
							}
							

					}
					.lCdot7{
						top: 2773px;
						    left: 9px;
						div{
							    background: #ee2d42;
							    left: 100%;
							    margin-left: 20px;
						}
						div:before{
							right: 100%;
							    margin-right: -1px;
							    border-top: 8px solid transparent;
							    border-bottom: 8px solid transparent;
							    border-right: 10px solid #ee2d42;
						}
					}
					.lCdot8{
						top: 3305px;
						    right: -13px;
						div{
							background: #043458;
							    right: 100%;
							    margin-right: 20px;
						}
						div:before{
							left: 100%;
							    margin-left: -1px;
							    border-top: 8px solid transparent;
							    border-bottom: 8px solid transparent;
							    border-left: 10px solid #043458;
						}
					}
					
					
					.lCenLine-active{
						position: absolute;
						    top: 0;
						    left: 0;
							// margin-left: -85px;
						    width: 190px;
							height 204px;
						    background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/line-active.png) center 0 no-repeat;
					}
				}
				
			}
			.lear-items{
				position: absolute;
				top 0
				width 100%;
				height 100%
				.lear-item{
					height 560px
					.lItem-img{
						margin-top: 134px;
					}
					.lItem-text{
						h3{
							font-size: 30px;
							font-weight: bold;
							line-height: 40px;
							margin-bottom: 1px;
							margin-top 20px;
							max-width: 300px;
							position: relative;
							color: #ee2d42;
							margin-bottom 20px;
						}
						.lItemTp-red{
							font-weight: bold;
							letter-spacing: -1px;
							padding-top: 18px;
							color: #ee2d42;
							font-size: 18px;
							line-height: 28px;
						}
						.lItemTp-ccc{
							color #333;
							font-size: 18px;
							line-height: 28px;
							margin-bottom: 10px;
						}
					}
					.lItem-text-blue{
						h3,.lItemTp-red,.lItemTp-ccc{
							color #043458 !important;
						}
						
					}
					.lItem-video{
						margin-top 150px
					}
				}
				.lear-item{
					display flex;
					justify-content space-between;
					.lItem-text{
						width 380px
					}
				}
				.lear-item3{
					height 475px;
				}
				.lear-item4{
					height 333px;
				}
				.lear-item5{
					height 578px;
					.lItem-video{
						margin-top 100px
					}
					.lItem-text{
						h3{
							margin-left 125px
						}
						p{
							margin-left: 40px;
						}
					}
				}
				.lear-item6{
					height 388px;
					.lItem-text{
						width 288px;
					}
				}
				.lear-item7{
					height 360px;
					.lItem-video{
						margin-top 0
					}
					.lItem-text{
						margin-top -90px
					}
				}
				.lear-item8{
					height 144px;
					// position: relative;
					// background: #000;
					.lItem-img{
						margin-top: -277px;
						    margin-right: -143px;
						    z-index: -1;
					}
				}
				
				
			}
		
		}
	
	}
}
</style>

<template>
	<div class="enterprise">
		<div class="ent-con">
			<div class="ent-con1">
				<div class="ent-con1Box">
					<ul>
						<li>首页</li>
						<li>企业培训</li>
					</ul>
					<div>
						<h1>
							量身定制解决方案，
							<br>
							让您更具全球竞争力
						</h1>
					</div>
					<ol>
						<li>企业解决方案</li>
						<li>行政管理人员解决方案</li>
					</ol>
				</div>
				
			</div>
		</div>
		<div class="ent-con"></div>
		<div class="ent-con"></div>
		<div class="ent-con"></div>
		<div class="ent-con"></div>
		<div class="ent-con"></div>
		
	</div>
</template>

<script>
	export default {
		name: 'enterprise',
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="stylus">
.enterprise{
	li{list-style:none;}
	.ent-con{
		width 100%;
		display flex;
		align-items: center;
		justify-content center;
		.ent-con1{
			width 100%;
			height 996px;
			background url(https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T26/Desktop/T22_01.jpg);
			background-size 100% 100%
			display flex;
			align-items: center;
			justify-content center;
			.ent-con1Box{
				width 1181px;
				height 996px;
				display flex;
				flex-direction column;
				align-items: center;
				// justify-content space-between;
				ul{
					width 1181px;
					height 71px;
					display flex;
					align-items: center;
					padding 17px 20px 0;
					li{
						color #fff;
						font-size 16px;
						padding 0 10px
					}
					li:nth-child(2){
						font-weight bold;
						border-left 1px solid #fff
						
					}
				}
				div{
					width 1181px;
					height 190px;
					margin-top 320px
					display flex;
					justify-content center;
					h1{
						color #fff;
						font-size: 60px;
						    line-height: 70px;
						    padding-bottom: 50px;
						    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
					}
				}
				ol{
					width 100%;
					height 122px;
					margin-top: 160px;
					display flex;
					align-items: center;
					justify-content center;
					li{
						width 110px;
						height 110px;
						margin: 0 20px 0 36px;
						font-size: 16px;
						font-weight: bold;
						color #fff;
						border-radius 50%;
						border 3px solid #ccc;
						text-align: center;
						display flex;
						align-items: center;
						justify-content center
					}
				}
			}
		}
	}
}
</style>

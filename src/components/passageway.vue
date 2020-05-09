<template>
  <div class="ason-student">
    <div class="banner">
      <div class="container">
        <div class="txt txt-cn ason-pc-unids">
          <div class="title">学员专属服务中心</div>
          <p class="detail detail-cn">
            点击链接，
            <br />即可访问学习资源和相关信息。
          </p>

          <p class="ason-pc-unids">
            您还未成为华尔街英语学员？立刻
            <a href="/zh/register/">点击这里</a> ，获取更多信息。期待您的加入！
          </p>
        </div>
        <div class="img-div ason-pc-unids">
          <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/student-banner.png" />
        </div>
      </div>
    </div>
    <div class="services">
      <div class="container">
        <div class="enter">
          <a class="enter-btn" id="enter-url">点击进入</a>
          <a class="n01 blue" id="complaints-url">投诉与意见</a>
          <a class="n02 blue" id="form-url">技术支持</a>
          <a class="n03 blue" id="guides-url">学习指南</a>
          <a class="n04 blue" href="/zh/faq/">常见问题</a>
        </div>
        <div class="tools">
          <div class="title">学员支持专区</div>
          <p>
            您是否需要帮助?
            <br />想进一步了解更多的资源和工具？
            <br />点击左边按钮, 即可获得相关帮助!
          </p>
        </div>
      </div>
    </div>
    <div class="bnt-list">
      <div class="container">
        <div class="col">
          <a class="c01" href="https://learnandwin.wse.com.cn/">登录</a>
          <div class="txt">
            <b>学员积分</b>
            <p class="ason-pc-unids">
              查看你的积分余额，兑换礼物。
              <br />与华尔街英语一起学习，更多精彩礼物等你拿。
            </p>
          </div>
        </div>

        <div class="col">
          <a class="c02" href="http://hmm.wse.com.cn/">登录</a>
          <div class="txt">
            <b>哈佛管理导师</b>
            <p class="ason-pc-unids">
              华尔街英语与哈佛商业出版社合作，
              <br />为您提供行业领先的管理工具，
              <br />优秀高管的见解以及管理技能研究。
            </p>
          </div>
        </div>

        <div class="col">
          <a class="c03" href="https://world.wallstreetenglish.com.cn/login">登录</a>
          <div class="txt">
            <b>核心课程</b>
            <p class="ason-pc-unids">
              以新颖,有趣的故事情节为背景学习新语言，
              <br />遵循华尔街英语独特的学习方法，
              <br />以确保您能够实现目标，具有改变未来的力量!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="app">
      <div class="container">
        <div class="type">
          <a class="tag ason-pc-unids" data-name="m01">学在华尔街英语</a>
          <a class="ason-pc-unids" data-name="m02">电子版学生手册</a>
        </div>

        <div class="m01 pub-rq">
          <div class="app-icon">
            <div class="app-l">
              <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/app-m01.png" />
              <span>学在华尔街英语</span>
            </div>

            <div class="app-r">
              <div class="down">
                <a id="learn-ios">
                  <img
                    src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/app-store.png"
                  />
                </a>
                <a id="learn-app">
                  <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/android.png" />
                </a>
              </div>
              <div class="code">
                <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/m01-code.png" />
              </div>
            </div>
          </div>

          <div class="clear"></div>

          <div class="txt">华尔街英语学员们可以更灵活，更自由地选择在不同移动设备上学习核心课程。通过苹果,安卓系统下载该应用程序. 随时随地学英语, 您值得拥有！</div>

          <div class="img-list ason-pc-unids">
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/m01-s01.png" />
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/m01-s02.png" />
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/student/m01-s03.png" />
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
a {
  text-decoration: none;
}
*:before,
*:after {
  box-sizing: border-box;
}
.ason-student .banner {
  position: relative;
  padding-bottom: 30px;
  overflow: hidden;
}
.container {
  width: 1181px;
  padding: 0;
  margin: 0 240px;
}
.ason-student .banner:after {
  top: -1250px;
  right: -620px;
  position: absolute;
  border-radius: 50%;
  content: "";
  border: 2px solid #023359;
  width: 1500px;
  height: 1500px;
}
.ason-student .banner .txt {
  margin-left: 80px;
  float: left;
  width: 560px;
  padding-top: 70px;
}
.ason-student .banner .txt .title {
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 50px;
  color: #043458;
}
.ason-student .banner .txt p.detail-cn {
  font-weight: bold;
}
.ason-student .banner .txt p.detail {
  line-height: 32px;
  margin-bottom: 30px;
  font-size: 20px;
}
.ason-student .banner .txt p {
  font-size: 16px;
  color: #575757;
}
.ason-student .banner .txt p {
  font-size: 16px;
  color: #575757;
}
.ason-student .banner .txt p a {
  color: #043458;
  padding-bottom: 5px;
  font-weight: bold;
  border-bottom: 2px solid #043458;
}
.ason-student .banner .img-div {
  margin-right: 25px;
  width: 450px;
  position: relative;
  z-index: 10;
  float: right;
}
img {
  max-width: 100%;
}
/*2222222222222222222222222222222222222222222222222*/
.ason-student .services {
  height: 430px;
  background: #f2f1f1;
  overflow: hidden;
}
.ason-student .services .container {
  width: 1020px;
  position: relative;
}
.ason-student .services .container:after {
  top: -90px;
  left: -600px;
  content: "";
  position: absolute;
  background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/student/student-line01.png)
    no-repeat;
  width: 800px;
  height: 371px;
}
.ason-student .services .enter {
  font-size: 16px;
  float: left;
  left: 180px;
  top: 95px;
  width: 230px;
  height: 230px;
  position: relative;
}
.ason-student .services .enter:before {
  animation: sonar 2.5s infinite 1s;
  top: 0;
  left: 0;
  border-radius: 50%;
  position: absolute;
  content: "";
  width: 230px;
  height: 230px;
  border: 1px solid rgba(238, 45, 66, 0.3);
}
.ason-student .services .enter:after {
  animation: sonar 2.5s infinite 2.5s;
  border: 1px solid rgba(238, 45, 66, 0.15);
  top: 0;
  left: 0;
  border-radius: 50%;
  position: absolute;
  content: "";
  width: 230px;
  height: 230px;
  border: 1px solid rgba(238, 45, 66, 0.1);
}
@keyframes sonar {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.7, 1.7);
  }
}
.ason-student .services a.enter-btn {
  box-shadow: 0px 18px 25px 10px rgba(238, 45, 66, 0.48);
  z-index: 10;
  position: relative;
  color: #fff;
  font-weight: bold;
  text-align: center;
  width: 230px;
  padding-top: 130px;
  height: 100px;
  background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/student/enter-btn-icon.png)
    center 70px no-repeat #ee2d42;
  border-radius: 50%;
  display: block;
  color: #fff;
  font-size: 26px;
}
.ason-student .services .n01 {
  z-index: 11;
  position: absolute;
  top: -30px;
  left: -120px;
  width: 200px;
  text-align: center;
  color: #575757;
}
.ason-student .services .n01:after {
  border-radius: 50%;
  content: "";
  width: 22px;
  height: 22px;
  position: absolute;
  top: 30px;
  left: 50%;
  margin-left: -11px;
  background: rgba(238, 45, 66, 0.5);
}
.ason-student .services .n02 {
  z-index: 11;
  position: absolute;
  top: -30px;
  right: -125px;
  width: 200px;
  text-align: center;
  color: #575757;
}
.ason-student .services .n03 {
  z-index: 11;
  position: absolute;
  bottom: -40px;
  right: -125px;
  width: 200px;
  text-align: center;
  color: #575757;
}
.ason-student .services .n04 {
  z-index: 11;
  position: absolute;
  bottom: -40px;
  left: -120px;
  width: 200px;
  text-align: center;
  color: #575757;
}
.ason-student .services .n02:after {
  border-radius: 50%;
  content: "";
  width: 22px;
  height: 22px;
  position: absolute;
  top: 30px;
  left: 50%;
  margin-left: -11px;
  background: rgba(238, 45, 66, 0.5);
}
.ason-student .services .n03:after {
  border-radius: 50%;
  content: "";
  width: 22px;
  height: 22px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -11px;
  background: rgba(238, 45, 66, 0.5);
}
.ason-student .services .n04:after {
  border-radius: 50%;
  content: "";
  width: 22px;
  height: 22px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -11px;
  background: rgba(238, 45, 66, 0.5);
}
.ason-student .services .tools {
  float: right;
  width: 410px;
  margin-right: 20px;
  margin-top: 130px;
}
.ason-student .services .tools .title {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 36px;
  color: #043458;
}
.ason-student .services .tools p {
  color: #575757;
  font-size: 20px;
  line-height: 32px;
}
/*3333333333333333333333333333333333333*/
.ason-student .bnt-list {
  text-align: center;
  height: 650px;
  position: relative;
  overflow: hidden;
}
.ason-student .bnt-list .container {
  width: 1020px;
  margin: 0 320px;
}
.ason-student .bnt-list:after {
  top: 90px;
  left: 50%;
  margin-left: -1000px;
  content: "";
  position: absolute;
  background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/student/student-line02.png)
    no-repeat;
  width: 2000px;
  height: 241px;
}
.ason-student .bnt-list .col {
  position: relative;
  z-index: 20;
  display: inline-block;
  width: 320px;
}
.ason-student .bnt-list .col:nth-child(1) {
  margin-top: 110px;
}
.ason-student .bnt-list .col:first-child {
  float: left;
  margin-left: -30px;
}
.ason-student .bnt-list .col:nth-child(2) {
  margin-top: 200px;
}
.ason-student .bnt-list .col:nth-child(3) {
  margin-top: 110px;
}
.ason-student .bnt-list .col:last-child {
  float: right;
  margin-right: -30px;
}
.ason-student .bnt-list .col a {
  position: relative;
  padding-top: 100px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.48);
  border: 3px solid #023359;
  display: inline-block;
  width: 180px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
}
.ason-student .bnt-list .col a.c01 {
  background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/student/ason-col-i01.png)
    center 70px no-repeat #fff;
}
.ason-student .bnt-list .col .txt {
  margin-top: 75px;
  font-size: 16px;
}
.ason-student .bnt-list .col .txt b {
  color: #043458;
}
.ason-student .bnt-list .col .txt p {
  font-size: 15px;
  color: #575757;
}
.ason-student .bnt-list .col a.c02 {
  background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/student/ason-col-i02.png)
    center 50px no-repeat #fff;
  padding-top: 110px;
}
.ason-student .bnt-list .col a.c03 {
  background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/student/ason-col-i03.png)
    center 40px no-repeat #fff;
  padding-top: 110px;
}
.ason-student .bnt-list .col a:before {
  animation: sonar 2.5s infinite 1s;
  top: 0;
  left: 0;
  position: absolute;
  content: "";
  border-radius: 50%;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(4, 52, 88, 0.1);
}
.ason-student .bnt-list .col a:after {
  animation: sonar 2.5s infinite 2.5s;
  top: 0;
  left: 0;
  position: absolute;
  content: "";
  border-radius: 50%;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(4, 52, 88, 0.05);
}
/*44444444444444444444444444444444444444444444444*/
.ason-student .app {
  height: 900px;
  background: #f2f1f1;
  overflow: hidden;
}
.ason-student .app .container {
  width: 1020px;
  margin: 0 320px;
}
.ason-student .app .type {
  overflow: hidden;
  height: 72px;
  line-height: 72px;
  border-top: 3px solid #023359;
}
.ason-student .app .type a {
  border-radius: 0 0 10px 10px;
  text-align: center;
  font-size: 20px;
  width: 50%;
  float: left;
  background: #fff;
  color: #575757;
}
.ason-student .app .type a.tag {
  background: #023359;
  color: #fff;
}
.ason-student .app .app-icon {
  padding-top: 70px;
}
.ason-student .app .app-icon .app-l {
  float: left;
  font-size: 30px;
  position: relative;
    
}
.ason-student .app .app-icon .app-l img {
  position: relative;
  z-index: 30;
  margin-right: 20px;
}
.ason-student .app .app-icon .app-l span{
    margin-bottom: 10px;
}.ason-student .app .app-icon .app-l:after {
    position: absolute;
    content: '';
    top: -60px;
    left: -600px;
    background: url(https://wse.com.cn//_ui/responsive/theme-alpha/img/student/student-line03.png) no-repeat;
    width: 624px;
    height: 158px;
}
.ason-student .app .app-icon .app-r {
    width: 310px;

    padding-left: 70px;
    border-left: 1px solid #d9d8d8;
    float: right;
}.ason-student .app .app-icon .app-r .down {
    float: left;
}.ason-student .app .app-icon .app-r .code {
    float: right;
    margin-right: 40px;
}.ason-student .app .app-icon .app-r .down a {
    display: block;
}.ason-student .app .app-icon .app-r .down a:first-child {
    margin-bottom: 12px;
}
.clear {
    clear: both;
}.ason-student .app .txt {
    font-size: 20px;
    line-height: 32px;
    margin: 60px 0;
    color: #575757;
}.ason-student .img-list {
    text-align: center;
    position: relative;
}.ason-student .img-list:after {
    content: '';
    top: 100px;
    left: 50%;
    margin-left: -1000px;
    position: absolute;
    background: url(https://wse.com.cn//_ui/responsive/theme-alpha/img/student/student-line04.png) no-repeat;
    width: 2000px;
    height: 226px;
}.ason-student .img-list img {
    position: relative;
    z-index: 40;
}.ason-student .img-list img:first-child {
    float: left;
}.ason-student .img-list img {
    position: relative;
    z-index: 40;
}.ason-student .img-list img:last-child {
    float: right;
}.ason-student .img-list img {
    position: relative;
    z-index: 40;
}
</style>
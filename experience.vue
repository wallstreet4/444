<template>
  <div class="experience free_trial_page">
    <div class="main-content">
      <div class="container">
        <div class="container-xs">
          <div class="breadcrumb-section">
            <ol class="breadcrumb">
              <li>
                <a href="/zh/" title="网站导览">网站导览</a>
              </li>
              <li class="active">免费体验</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="container-xs">
          <div class="content_item">
            <h1>
              我们提供
              <br class="line-break-hide show-mobile-zh" />两种免费
              <br class="line-break-hide show-mobile-zh" />课程体验
            </h1>
            <div class="des">我们提供两种课程体验。你可以试学我们功能强大的多媒体课件，或与我们的外教在线面对面上课。</div>
          </div>
          <img
            class="img_free_trial hidden-xs"
            src="https://wse.com.cn/_ui/responsive/theme-alpha/img/Free_Trial-1.png"
            alt="free trials"
          />
        </div>
      </div>
    </div>
    <div class="wrapper_freetrail">
      <div class="main-content clearfix">
        <div class="bg_freetrail">
          <div class="container">
            <div class="container-xs clearfix">
              <div class="freetial_left">
                <div class="freetrial_content">
                  <div class="content_content">
                    <h3>多媒体课程试学</h3>
                    <div class="des">在线课程全新升级， 7天免费学习，尽享英语学习的美丽。</div>
                    <div class="content_item_more more_style info hidden-xs">
                      <a href="/contact/" title="现在就来试试吧">
                        <span class="icon icon-icon-trynow">&nbsp;</span>现在就来试试吧
                      </a>
                    </div>
                    <div
                      class="content_item_more more_style info info hidden_sm hidden-md hidden-lg"
                    >
                      <a
                        id="callHotlineMobile"
                        href="tel:40085 40085"
                        title="Call:40085 40085"
                      >现在就来试试吧</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="freetial_right">
                <div class="freetrial_content">
                  <div class="content_content">
                    <h3>
                      与我们的外教
                      <br class="line-break-hide show-mobile-zh" />一对一在线上课
                    </h3>
                    <div class="des">免费参加外教在线课程</div>
                    <div class="content_item_more">
                      <a id="freeTrailPageChat" href onclick="return false;" title="联系我们">
                        <span class="icon icon-icon-consult">&nbsp;</span>联系我们
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experience"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}
.main-content .container:nth-child(1) {
  height: 80px;
  margin: 0 110px;
}
.container {
  width: 1181px;
  padding: 0;
}
.container {
  margin-right: auto;
  margin-left: auto;
}
.breadcrumb-section {
  margin-top: 26px;
  margin-left: 5px;
  background: none;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
}
.breadcrumb-section .breadcrumb {
  background: none;
  padding: 15px 0;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  list-style: none;
}
.breadcrumb-section .breadcrumb li {
  text-transform: none;
  font-size: 16px;
  line-height: 18px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb-section .breadcrumb li a {
  color: #333333;
  font-size: 16px;
  border-right: 1px solid #333333;
  padding-right: 10px;
  line-height: 18px;
  text-transform: capitalize;
  text-decoration: none;
}
.breadcrumb-section .breadcrumb li.active {
  color: #ee2d42;
  border-right: 0;
  font-weight: bold;
}

.experience .content_item {
  width: 45%;
  padding-bottom: 49px;
  min-height: 390px;
}
.experience .main-content .content_item h1 {
  font-size: 60px;
  line-height: 70px;
}
.line-break-hide {
  display: none;
}
.experience .content_item h1 {
  color: #043458;
  padding-right: 145px;
  margin-bottom: 18px;
  margin-left: 60px;
}
.experience .main-content .content_item .des {
  font-size: 16px;
  line-height: 24px;
  margin-left: 105px;
  color: #575757;
  margin-bottom: 20px;
}
.experience .img_free_trial {
  position: absolute;
  top: 0;
  right: 0;
}

.free_trial_page .main-content {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}
.clearfix:before {
  content: " ";
  display: table;
}
*:before {
  box-sizing: border-box;
}
*:after {
  box-sizing: border-box;
}
.clearfix:after {
  width: 0;
  height: 0;
  content: "";
  display: block;
  clear: both;
}
.free_trial_page .bg_freetrail {
  position: relative;
  padding-bottom: 93px;
}
.free_trial_page .bg_freetrail:before {
  content: "";
  position: absolute;
  border: 3px solid #043458;
  width: 2100px;
  height: 2100px;
  left: -50%;
  top: 15%;
  border-radius: 50%;
}
.container {
  width: 1181px;
  padding: 0;
}
.container:before {
  content: " ";
  display: table;
}
.container:after {
  width: 0;
  height: 0;
  content: "";
  display: block;
  clear: both;
}
.clearfix:before {
  content: " ";
  display: table;
}
.clearfix:after {
  width: 0;
  height: 0;
  content: "";
  display: block;
  clear: both;
}
.free_trial_page .wrapper_freetrail .freetial_left {
  float: left;
  padding-bottom: 50px;
}
.free_trial_page .wrapper_freetrail .freetial_left .freetrial_content {
  margin-left: 137px;
  position: relative;
  width: 415px;
  height: 415px;
  background: #ee2d42;
  color: #ffffff;
  display: table;
  vertical-align: middle;
  border-radius: 50%;
}
.free_trial_page .wrapper_freetrail .freetrial_content .content_content {
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  padding-left: 72px;
  padding-right: 72px;
}
.free_trial_page .wrapper_freetrail .freetrial_content h3 {
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 15px;
}
.free_trial_page .wrapper_freetrail .freetrial_content .des {
  margin-bottom: 20px;
  padding-left: 32px;
  padding-right: 12px;
  font-size: 16px;
  line-height: 24px;
}
.free_trial_page .wrapper_freetrail .freetrial_content .content_item_more {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  box-sizing: border-box;
  outline: none;
  display: table;
  vertical-align: middle;
  position: absolute;
  right: 6px;
  bottom: -6px;
  width: 136px;
  height: 136px;
  border-radius: 50%;
}
.content_item_more.more_style:before {
    background: #043458;
    box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.58);
}
.content_item_more:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ee2d42;
    box-shadow: 0px 18px 25px 10px rgba(238, 45, 66, 0.48);
    border-radius: 50%;
    content: '';
    transform: scale(1);
    transition: transform 0.3s linear;
}
.free_trial_page .wrapper_freetrail .freetrial_content .content_item_more a {
    width: 136px;
    height: 136px;
    padding: 0 30px;
    font-size: 14px;
    line-height: 1.5;
}
a{
  text-decoration: none;
}
.content_item_more a {
    position: relative;
    z-index: 1;
    width: 120px;
    height: 120px;
    font-size: 16px;
    line-height: 24px;
    padding: 0 10px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 50%; 
}

.free_trial_page .wrapper_freetrail .freetial_right {
    float: right;
    padding-bottom: 50px;
    padding-top: 82px;
    padding-right: 60px;
}
.free_trial_page .wrapper_freetrail .freetial_right .freetrial_content {
    width: 500px;
    height: 500px;
    background: #043458;
    border-radius: 50%;
}
.free_trial_page .wrapper_freetrail .freetial_right .freetrial_content .content_content {
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    padding-left: 80px;
    padding-right: 72px;
    margin-top: 100px;
}
.free_trial_page .wrapper_freetrail .freetial_right .freetrial_content .content_content h3 {
    margin-bottom: 20px;
    margin-top: 5px;
    font-size: 40px;
    line-height: 50px;
    color: #fff;
}
.line-break-hide {
    display: none;
}
</style>

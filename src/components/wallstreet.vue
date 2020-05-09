<template>
  <div class="wallstreet">
    <div class="content_header">
      <div class="header_dis">
        <div class="title">
          <p>首页</p>
          <p>|</p>
          <p>关于华尔街英语</p>
        </div>
      </div>
      <img src="@/assets/wallstreet/banner.png" class="banner_img" alt />
      <div class="slideshow_text">
        <h1>改变未来力量</h1>
      </div>
    </div>

    <div class="content_item">
      <h2>45年的成功经验</h2>
      <p>华尔街英语拥有45年的专业英语教学经验。我们已先后帮助了全球超过300万学员学习和提升自身的英语能力。2000年，我们在中国成立了第一家学习中心。今天，我们已经在中国11座城市拥有了75个学习中心。 就从今天起，来华尔街英语开始你的学习之旅吧！</p>
    </div>

    <div class="fixed_img">
      <img src="@/assets/wallstreet/content.png" alt />
    </div>
    <div class="about_mission">
      <h2>我们的使命与价值观</h2>
      <div class="mission_size">
        <p class="title_one">我们每天都会遇到来自各行各业的学习者，是他们用努力让我们坚信：每个人都拥有改变未来的力量！</p>
        <h3>我们的价值观</h3>
        <p>我们的核心价值观是尊重，诚实和责任心。它影响着我们做每一件事情的态度，让我们有热情来欢迎和对待我们的每一位学员，让我们的员工们用心去开展每一项教学工作。</p>
        <h3>我们全力以赴，为你提供鼎力支持</h3>
        <p>
          我们是一个国际化的、充满热情和趣味的英语学习中心。在这里，你可以学习、交流，并收获友谊。当你和我们一起学习时，你将会得到我们全面的帮助与支持，并且我们会为你提供优质的学习体验。
          我们随时欢迎你加入华尔街英语的大家庭！
        </p>
      </div>
    </div>

    <div class="about_recognised">
      <div class="recognised_title">
        <h2>享誉全球</h2>
      </div>
      <div class="recognised_banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper_box" v-for="(item,index) in bannerBox" :key="index">
                <p class="swiper_box_img">
                  <img :src="item.img" alt />
                </p>
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper_box" v-for="(item,index) in bannerBox2" :key="index">
                <p class="swiper_box_img">
                  <img :src="item.img" alt />
                </p>
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev" id="arrow"></div>
        <div class="swiper-button-next" id="arrow"></div>
      </div>
      <div class="fixed_banner_img">
        <img src="@/assets/wallstreet/banner3.png" alt />
      </div>
    </div>

    <div class="about_slider">
      <h2 class="hover_title">最新消息</h2>
      <div class="slider_box">
        <div class="swiper-container2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class='slide_wrap' v-for='(item,index) in bannerBox3' :key='index'>
                <p class='wrap_img'><img :src="item.img" alt=""></p>
                <h3>{{item.name}}</h3>
                <p class='wrap_time'>{{item.time}}</p>
                <p>{{item.content}}</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class='slide_wrap' v-for='(item,index) in bannerBox4' :key='index'>
                <p class='wrap_img'><img :src="item.img" alt=""></p>
                <h3>{{item.name}}</h3>
                <p class='wrap_time'>{{item.time}}</p>
                <p>{{item.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "wallstreet",
  data() {
    return {
      bannerBox: [
        {
          img: require("@/assets/wallstreet/banner2.png"),
          title: "腾讯网",
          description: "影响力外语教育品牌"
        },
        {
          img: require("@/assets/wallstreet/banner2.png"),
          title: "网易",
          description: "年度最具影响力外语培训品牌"
        },
        {
          img: require("@/assets/wallstreet/banner2.png"),
          title: "新华网",
          description: "品牌知名度教育机构"
        },
        {
          img: require("@/assets/wallstreet/banner2.png"),
          title: "新浪教育",
          description: "品牌知名度教育机构"
        }
      ],
      bannerBox2: [
        {
          img: require("@/assets/wallstreet/banner2.png"),
          title: "新华网",
          description: "品牌知名度教育机构"
        },
        {
          img: require("@/assets/wallstreet/banner2.png"),
          title: "新浪教育",
          description: "品牌知名度教育机构"
        },
        {
          img: require("@/assets/wallstreet/banner2.png"),
          title: "中国好教育",
          description: "品牌知名度教育机构"
        }
      ],
      bannerBox3:[
        {
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 华尔街英语广州线上活动火热进行中",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        },{
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 活动火热进行中",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        },{
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 线上活动火热进行中",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        },{
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 华尔街英语广",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        }
      ],
      bannerBox4:[
        {
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 华尔街英语广州",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        },{
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 华尔街英语火热进行中",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        },{
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 华尔进行中",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        },{
          img: require("@/assets/wallstreet/banner4.jpg"),
          name: "英语学习兴趣不减 华尔街英语广中",
          time: "2020年3月7日",
          content:'自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。'
        }
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      // loop: true,
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev"
    });
    new Swiper(".swiper-container2", {
      // loop: true,
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next2",
      prevButton: ".swiper-button-prev2"
    });
  }
};
</script>


<style  lang='stylus'>
.wallstreet {
  width: 100%;
  background: #fff;
  height: 4000px;
}

.content_header {
  height: 900px;
  width: 100%;
  position: relative;

  .header_dis {
    width: 1181px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 19%;

    .title {
      width: 160px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
  }

  .banner_img {
    width: 100%;
    height: 100%;
  }

  .slideshow_text {
    width: 100%;
    height: auto;
    position: absolute;
    top: 46%;
    color: #fff;
    text-align: center;

    h1 {
      font-size: 60px;
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.content_item {
  width: 735px;
  height: 145px;
  margin: 50px 0 23px 600px;

  h2 {
    color: #043458;
    margin-bottom: 23px;
    text-align: center;
    margin-left: 0;
    font-size: 40px;
  }

  p {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.fixed_img {
  width: 555px;
  height: 1125px;
  position: absolute;
  top: 927px;
  left: 244px;
  overflow: hidden;
}

.about_mission {
  width: 588px;
  height: 900px;
  margin-left: 863px;
  margin-top: 110px;

  h2 {
    width: 240px;
    font-size: 40px;
    color: #ee2d42;
  }

  .mission_size {
    width: 553px;
    height: 400px;
    margin-left: 35px;
    margin-top: 15px;

    p {
      margin-bottom: 15px;
    }

    h3 {
      font-size: 30px;
      color: #ee2d42;
    }
  }
}

.about_recognised {
  width: 1400px;
  height: 914px;
  margin: 0 auto;
  position: relative;

  .fixed_banner_img {
    width: 308px;
    height: 308px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .recognised_title {
    color: #043458;
    font-size: 20px;
    margin-left: 457px;
  }

  .recognised_banner {
    width: 874px;
    height: 874px;
    background: #043458;
    border-radius: 50%;
    margin-left: 400px;
    position: relative;

    .swiper-container {
      width: 634px;
      height: 254px;
      position: absolute;
      top: 341px;
      left: 125px;

      .swiper-slide {
        display: flex;
        justify-content: space-around;

        .swiper_box {
          width: 126px;
          height: 194px;
          text-align: center;
          color: #fff;

          h3 {
            margin-top: 30px;
          }

          .swiper_box_img {
            width: 100%;
            height: 100px;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}

.about_slider {
  width: 1310px;
  height: 648px;
  margin: 0 auto;

  .hover_title {
    color: red;
    font-size: 30px;
  }

  .slider_box {
    width: 1100px;
    height: 607px;
    margin: 0 auto;
    overflow: hidden;
    position relative
    .swiper-container2 {
      width: 1100px;
      height: 607px;
      .swiper-slide{
        display flex
        justify-content space-between
      }
      .slide_wrap{
        width 250px
        height 607px
        .wrap_img{
          width 250px 
          height 250px
          border-radius 50%
          overflow hidden
          img{
            width 100%
            height 100%
          }
        }
        h3{
          margin 20px 0
          font-size 30px
        }
        .wrap_time{
          margin-bottom 20px
        }
      }
    }
  }
}
</style>
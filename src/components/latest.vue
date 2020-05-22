<template>
  <div class="latest">
    <div class="href_head">
      <div class="head_name">
        <p>首页</p>
        <p>|</p>
        <p class="activity">精彩活动</p>
      </div>
    </div>

    <div class="content_dis">
      <h1>精彩活动</h1>
      <div class="content_bottom">
        <div class="content_left">
          <img src="@/assets/1.png" alt />
        </div>
        <div class="content_right">
          <p class="new_dis">最新活动</p>
          <h3>梦幻的圣诞惊喜派对</h3>
          <p class="time">2018年12月22日</p>
          <p
            class="size"
          >不知不觉一年就要结束了，圣诞老人也悄悄来临，华尔街英语各大学习中心再次为大家精心准备了梦幻的圣诞惊喜。圣诞气氛逐渐浓厚，学员们和外教老师将会一起度过怎样愉快的夜晚呢？来华尔街英语，这里有与众不同的party即将开始，一起来报名感受一下吧！</p>
        </div>
      </div>
    </div>
    <div class="scroll">
      <h2>近期中心活动</h2>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper_box" v-for="(item,index) in swiperContent" :key="index">
              <p class="swiper_box_img">
                <img :src="item.img" alt />
              </p>
              <h3>{{item.name}}</h3>
              <p class="swiper_time">{{item.time}}</p>
              <p>{{item.size}}</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper_box" v-for="(item,index) in swiperContent2" :key="index">
              <p class="swiper_box_img">
                <img :src="item.img" alt />
              </p>
              <h3>{{item.name}}</h3>
              <p class="swiper_time">{{item.time}}</p>
              <p>{{item.size}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要导航按钮 -->
      </div>
      <div class="swiper-button-prev" id='arrow'></div>
      <div class="swiper-button-next" id='arrow'></div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
export default {
  name: "latest",
  data() {
    return {
      swiperContent: [
        {
          img: require("@/assets/swiper1.png"),
          name: "感恩的幸福时光",
          time: "2018年11月29日",
          size:
            "Thanksgiving Party由外教Alastor主持,在浓浓的感恩氛围里，学员们用自己的方式表达了感恩之情，学到了很多关于感恩节的英文词汇。"
        },
        {
          img: require("@/assets/swiper2.png"),
          name: "欢乐的公开演讲",
          time: "2018年11月26日",
          size:
            "为VIP学员准备了一场特别的主题派对——Public Speaking Party .中心的教学服务主管Alice和现场的VIP学员们一起进行了一次关于公共演讲的“学术研讨"
        },
        {
          img: require("@/assets/swiper3.png"),
          name: "神奇的魔法世界",
          time: "2018年11月22日",
          size:
            "为了能让J.K. Rowling的书迷和影迷们过足瘾，华尔街英语天津友谊精品广场中心举办了一场特别的Harry Potter Party。"
        }
      ],
      swiperContent2: [
        {
          img: require("@/assets/swiper4.png"),
          name: "感恩的幸福时光",
          time: "2018年11月29日",
          size:
            "Thanksgiving Party由外教Alastor主持,在浓浓的感恩氛围里，学员们用自己的方式表达了感恩之情，学到了很多关于感恩节的英文词汇。"
        },
        {
          img: require("@/assets/swiper5.png"),
          name: "感恩的幸福时光",
          time: "2018年11月29日",
          size:
            "Thanksgiving Party由外教Alastor主持,在浓浓的感恩氛围里，学员们用自己的方式表达了感恩之情，学到了很多关于感恩节的英文词汇。"
        },
        {
          img: require("@/assets/swiper6.png"),
          name: "感恩的幸福时光",
          time: "2018年11月29日",
          size:
            "Thanksgiving Party由外教Alastor主持,在浓浓的感恩氛围里，学员们用自己的方式表达了感恩之情，学到了很多关于感恩节的英文词汇。"
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
  }
};
</script>

<style lang='stylus'>
* {
  margin: 0;
  padding: 0;
}

.href_head {
  width: 1181px;
  height: 50px;
  margin: 0 auto;

  .activity {
    color: red;
  }
}

.head_name {
  width: 117px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content_dis {
  width: 1181px;
  height: 652px;
  margin: 0 auto;

  h1 {
    font-size: 70px;
    line-height: 80px;
    margin-left: 60px;
    color: #ee2d42;
    margin-bottom: 40px;
    font-weight: bold;
  }

  .content_bottom {
    width: 1181px;
    height: auto;
    display: flex;

    .content_left {
      width: 462px;
      height: 462px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content_right {
      width: 500px;
      height: 100%;
      margin: 80px 0px 0px 100px;

      .new_dis {
        margin-bottom: 15px;
      }

      h3 {
        font-size: 30px;
        line-height: 40px;
        margin-top: 10px;
        padding-right: 130px;
        color: #043458;
        font-weight: bold;
      }

      .time {
        margin: 20px 0;
      }

      .size {
        padding-left: 37px;
      }
    }
  }
}

.scroll {
  width: 1180px;
  height: 695px;
  margin: 0 auto;
  position: relative;

  h2 {
    font-size: 40px;
    margin-left: 70px;
  }

  .swiper-container {
    width: 870px;
    height: 505px;
    margin-top: 50px;
  }

  .swiper-slide {
    display: flex;
    justify-content: space-between;

    .swiper_box {
      width: 250px;
      height: 465px;

      .swiper_box_img {
        width: 250px;
        height: 250px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      h3 {
        font-size: 30px;
        line-height: 40px;
        color: #043458;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
        max-height: 120px;
        overflow: hidden;
      }

      .swiper_time {
        margin-bottom: 15px;
      }
    }
  }

  .swiper-button-prev {
    position: absolute;
    left: 81px;
  }
  .swiper-button-next{
    position: absolute;
    right: 81px;
  }
}
</style>
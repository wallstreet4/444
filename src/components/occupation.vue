<template>
  <div class="occupation">
    <p class="bigTitle">职业生涯</p>
    <div class="occTopBox">
      <div class="occEveryBox">
        <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/career/ason-hr-img01.png" alt="" class="occTopImg">
        <p class="occTitle">企业客户职位</p>
        <p class="occLittleInfo">工作<br>机会</p>
      </div>
      <div class="occEveryBox">
        <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/career/ason-hr-img02.png" alt="" class="occTopImg">
        <p class="occTitle">学习中心职位</p>
        <p class="occLittleInfo">工作<br>机会</p>
      </div>
      <div class="occEveryBox">
        <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/career/ason-hr-img03.png" alt="" class="occTopImg">
        <p class="occTitle">外籍英语教师</p>
        <p class="occLittleInfo">工作<br>机会</p>
      </div>
    </div>
    <p class="bigTitle">我们的团队</p>
    <div class="videoWrapBox">
      <div class="videoBox">
        <video id="videoI" controls="controls" poster="https://wse.com.cn/_ui/responsive/theme-alpha/img/career/ason-hr-video02.jpg"
          src="https://wse.com.cn/_ui/responsive/theme-alpha/video/teacherDay_1.mp4"></video>
      </div>
      <div class="videoRightBox">
        <p class="vP1">外教的一天</p>
        <p class="vP2">通过学习英语，人们可以改变自己的未来。在华尔街英语，我们通过教学英语，帮助学员更好地掌控他们的人生。来和我们一起工作，帮助这群有梦想的学员们实现他们的目标和梦想吧！ </p>
        <p class="vP3" @click="openMusic">播放</p>
      </div>
    </div>
    <div class="infoBox">
      <div class="infoBoxFont">
        <p class="infoTitle">外籍培训师面试：</p>
        <p class="infoFont">我们的人力资源团队一直在寻找高质量的教师队伍。为了在这个竞争激烈的环境中脱颖而出，我们建议你在面试中展现真实的自己。让我们了解你的动机，你的激情以及你能创造的价值。请给我们讲讲你在课堂上的经历，以及你将如何利用它来丰富我们学生的生活。此外，让我们知悉你对学习新技能和实现新方法的渴望。</p>
        <p class="infoFont">在面试过程中，一个很好的建议是仔细听取招聘人员的提问，确保遵循指示，并给出详细而简洁的回答。正如一个好老师所需表现的。</p>
        <p class="infoFont">最重要的是，向我们展示和你一起工作有多棒。因为除了顶尖人才，我们还在寻找适合我们华尔街英语团队的人才!</p>
        <p class="infoTitle">学习顾问面试：</p>
        <p class="infoFont">我们的学习顾问是我们运营系统中的重要组成部分。他们在学生最需要的时候与之保持联系。他们随时待命解答有关语言、系统和整体学习习惯的问题。这就是为什么在面试中，我们的团队正在寻找那些乐于助人、有见地和渴望帮助学生提高英语的人。</p>
        <p class="infoFont">为了增加你面试成功的机会，让我们了解你对教学以及帮助他人实现目标的热情。请谈谈你将如何丰富学生的经验，并向我们展示你卓越的客户服务经验。</p>
        <p class="infoFont">此外，我们希望看到独立、适应力强、乐于合作的员工。</p>
        <p class="infoTitle">课程顾问面试：</p>
        <p class="infoFont">我们的课程顾问负责向潜在的学生介绍华尔街英语产品，同时他们也需要跟进现有学生的学习状况，与学生之间保持积极的互动，激励学生学习和参加华尔街英语组织的活动。</p>
        <p class="infoFont">优秀的课程顾问是擅长自我激励的，能同时有效地完成多项任务，善于发现学生的需求和愿望，从而带领自己和学生一起进步。</p>
        <p class="infoFont">请有意向成为华尔街英语一员的你，向我们展示你洞察痛点并发掘出正确的解决方案的能力;向我们展示你是一个优秀的团队成员，能够在帮助团队达成目标的同时实现个人目标的能力。</p>
        <p class="infoFont">总体来说，我们的课程顾问需要有求知欲，并对我们的产品和服务充满信心。</p>
      </div>
    </div>
    <div class="bannerWrap">
      <swiper :options="swiperOption" style="width: 998px;height: 320px;margin-top: 60px;">
        <swiper-slide class="swiper-slide">
          <img src="http://pic.yupoo.com/jruigg/79813dfb/b57ce0a5.png" style="width: 100%;height: 100%;" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="http://pic.yupoo.com/jruigg/10ccd15e/ec442cec.png" style="width: 100%;height: 100%;" />
        </swiper-slide>
        <!-- 分页器 -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- 左右箭头 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
  </div>
  <!-- 职业生涯 -->
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          //显示分页
          pagination: {
            el: '.swiper-pagination'
          },
          //设置点击箭头
          /* navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }, */
          //自动轮播
          autoplay: {
            delay: 2000,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false,
          },
          //开启循环模式
          loop: true
        }
      }
    },
    methods: {
      openMusic() {
        document.getElementById('videoI').play()
      }
    }
  }
</script>

<style lang="stylus">
  .occupation {
    * {
      margin: 0;
      padding: 0;
    }

    .bigTitle {
      font-size: 40px;
      color: #ee2d42;
      display: block;
      font-weight: bold;
      margin: 0px 0px 0px 232px;
    }

    .occTopBox {
      width: 1138px;
      height: 628px;
      // border: 1px solid red;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .occEveryBox {
        width: 317px;
        height: 474px;
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .occTitle {
          font-size: 24px;
          color: #043458;
          font-weight: bold;
        }

        .occLittleInfo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #EE2D42;
          font-size: 16px;
          color: #fff;
          text-align: center;
          box-sizing: border-box;
          padding-top: 35px;
          font-weight: bold;
          line-height: 25px;
        }
      }
    }

    .videoWrapBox {
      width: 1000px;
      height: 320px;
      margin: 0 auto;
      // border: 1px solid red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;

      .videoBox {
        width: 495px;
        height: 280px;

        video {
          width: 100%;
          height: 100%;
        }
      }

      .videoRightBox {
        width: 400px;
        height: 210px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-end;

        .vP1 {
          font-size: 26px;
          color: #043458;
          font-weight: bold;
        }

        .vP2 {
          font-size: 16px;
          color: #666;
          text-align: right;
        }

        .vP3 {
          height: 50px;
          line-height: 50px;
          border-radius: 50px;
          width: auto;
          padding: 0 60px;
          background: #EE2D42;
          color: #fff;
          box-shadow: 0px 5px 10px 5px rgba(238, 45, 66, 0.48);
        }
      }
    }

    .infoBox {
      width: 100%;
      height: 606px;
      background: url('https://wse.com.cn/_ui/responsive/theme-alpha/img/career/ason-hr-community-bg.jpg') center no-repeat;
      display: flex;
      align-items: center;
      margin-top: 90px;

      .infoBoxFont {
        width: 600px;
        height: 460px;
        margin-left: 700px;
        background: #fff;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 50px 30px;
        overflow: auto;

        .infoTitle {
          font-size: 22px;
          color: #043458;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .infoFont {
          color: #575757;
          line-height: 22px;
          margin-bottom: 20px;
        }
      }
    }

    .bannerWrap {
      width: 1000px;
      height: 462px;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 100px;
    }
  }
</style>

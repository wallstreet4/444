<template>
  <!-- 优质师资 -->
  <div class="teachers">
    <img src="http://pic.yupoo.com/jruigg/9d665e54/8821f2ad.jpg" alt="" class="headImg">
    <p class="Ftitle">与教学团队会面</p>
    <div class="threeImg">
      <p class="prev" @click="prevFn()" :style="!classFlag?'opacity:0;':'opacity:1;'">&lt;</p>
      <div class="centerBox">
        <div :class="classFlag?'fiveBox nextActive':'fiveBox'">
          <div class="fEveryBox">
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_CC.png"
              alt="" class="fiveImg">
            <p class="fiveTitle">课程顾问</p>
            <p class="fiveInfo">根据你的专业和个人需求，帮助你制定适合的学习计划，并为你全程提供支持。</p>
          </div>
          <div class="fEveryBox">
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_SM.png"
              alt="" class="fiveImg">
            <p class="fiveTitle">服务经理</p>
            <p class="fiveInfo">根据你的专业和个人需求，帮助你制定适合的学习计划，并为你全程提供支持。</p>
          </div>
          <div class="fEveryBox">
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_CSA.png"
              alt="" class="fiveImg">
            <p class="fiveTitle">客服经理</p>
            <p class="fiveInfo">根据你的专业和个人需求，帮助你制定适合的学习计划，并为你全程提供支持。</p>
          </div>
          <div class="fEveryBox">
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_FT.png"
              alt="" class="fiveImg">
            <p class="fiveTitle">外教师资</p>
            <p class="fiveInfo">根据你的专业和个人需求，帮助你制定适合的学习计划，并为你全程提供支持。</p>
          </div>
          <div class="fEveryBox">
            <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_SA.png"
              alt="" class="fiveImg">
            <p class="fiveTitle">学习顾问</p>
            <p class="fiveInfo">根据你的专业和个人需求，帮助你制定适合的学习计划，并为你全程提供支持。</p>
          </div>
        </div>
      </div>
      <p class="next" @click="nextFn()" :style="classFlag?'opacity:0;':'opacity:1;'">&gt;</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        classFlag: false
      }
    },
    methods: {
      prevFn() {
        this.classFlag = false
      },
      nextFn() {
        this.classFlag = true
      }
    }
  }
</script>

<style lang="stylus">
  .teachers {

    * {
      margin: 0;
      padding: 0;
    }

    .Ftitle {
      width: 60%;
      height: 120px;
      margin: 0 auto;
      font-size: 40px;
      color: #043458;
      font-weight: bold;
      line-height: 120px;
      margin-bottom: 60px;
    }

    .headImg {
      width: 100%;
    }

    .threeImg {
      width: 1181px;
      height: 402px;
      // border: 1px solid red;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .prev,
      .next {
        font-size: 70px;
        font-weight: bold;
        color: #043458;
        cursor: pointer;
      }

      .centerBox {
        width: 870px;
        height: 100%;
        // border: 1px solid #000;
        overflow: hidden;

        .nextActive {
          transform: translateX(-580px);
        }

        .fiveBox {
          width: 1450px;
          height: 100%;
          // border: 1px solid #007AFF;
          display: flex;
          align-items: center;
          justify-content: space-around;
          transition: 2s;

          .fEveryBox {
            width: 250px;
            height: 402px;
            // background: #2e2;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            .fiveImg {
              width: 250px;
            }

            .fiveTitle {
              font-size: 30px;
              line-height: 40px;
              color: #043458;
              font-weight: bold;
              margin-top: 20px;
              margin-bottom: 10px;
              max-height: 120px;
              overflow: hidden;
            }

            .fiveInfo {
              font-size: 16px;
              line-height: 24px;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>

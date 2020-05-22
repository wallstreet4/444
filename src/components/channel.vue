<template>
  <!-- 渠道合作 -->
  <div class="channel">
    <div class="bannerBg">
      <div class="bbFont">
        <p class="wecTitle">欢迎渠道洽谈</p>
        <p class="wecInfo">当您选择成为华尔街英语的特许经营伙伴，您就步入了一个正在持续增长的市场。全球现有17.5亿位英语学习者， 截止到2020年，
          学习英语的人数将到达20亿。这是一个规模近500亿美元的产业。欢迎加入我们！</p>
        <p class="isOkshop">特许经营权资质：</p>
        <ul type="square">
          <li>尊重和认同华尔街英语品牌和管理理念</li>
          <li>对教育行业抱有积极的长期前景</li>
          <li>了解当地市场</li>
        </ul>
      </div>
    </div>

    <div class="mapBox">
      <div class="mapLeft">
        <p class="mapTitle">关于华尔街英语</p>
        <p class="mapInfo">自创建以来，华尔街英语已在全球28个国家和地区拥有逾400家中心，在过去47年教学经验中，累计帮助全球300万+学员成功提升英语，全球有135个特许经营伙伴，每年提供超过106万+节课时并持续增长。</p>
      </div>
      <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-map.jpg" alt="" class="mapRight">
    </div>

    <div class="tabBox">
      <p class="tabTitle">合作支持</p>
      <p class="tabInfo">选择华尔街英语的4大理由</p>
      <div class="tabMuchBox">
        <p class="redRadius" v-for="(item,index) in tabData" :key="index">{{item.title}}</p>
      </div>
      <div class="tabBomBox">
        <div class="tabBomLeft">
          <p v-html="tabData[0].info"></p>
          <ul>
            <li v-for="(item,index) in tabData[0].li">{{item}}</li>
          </ul>
        </div>
        <div class="tabBomRight">
          <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-col01.png" alt="">
        </div>
      </div>
    </div>

    <div class="endBox">
      <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-kf.png" alt="" class="endImg">
      <div class="engBox">
        <p class="ep1">联系我们</p>
        <p class="ep2">留下您的联系方式，我们会尽快联系您</p>
        <input type="text" placeholder="请输入姓名" class="ei">
        <input type="text" placeholder="请输入手机号" class="ei">
        <div class="iptTwo">
          <input type="text" placeholder="请输入验证码">
          <p>获取验证码</p>
        </div>
        <input type="text" placeholder="请输入目标城市" class="ei">
        <p class="getBtn">提交</p>
        <div class="muchP">
          <p>您也可直接发送合作需求至邮箱：</p>
          <p>WSEfranchise@wallstreetenglish.com</p>
          <p>官方客服电话：400-852-7600</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabData: [{
          title: '产品',
          info: '自主研发课程，多种差异化产品<br>验证有效的专利学习方法及多维度辅助教学',
          li: ['系统研发课程——尊重个体差异的小班化教学', '个性化学习课程适合忙碌生活的灵活方案'],
          src: 'https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-col01.png'
        }, {
          title: '服务',
          info: '100%英语为母语的外籍教师授课完善的客户学习追踪系统',
          li: ['有保证的教学结果全球学员在线社区', '浸入式母语教学法'],
          src: 'https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-col02.png'
        }, {
          title: '品牌',
          info: '知名度高，竞争力强，全球品牌认知',
          li: ['精准定位英语级别', '国际权威认证'],
          src: 'https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-col03.png'
        }, {
          title: '管理',
          info: '稳定的高级管理团队可复制化流程确保服务质量',
          li: ['被超过三百万人证明过的学习方法'],
          src: 'https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-col04.png'
        }]
      }
    },
    methods: {}
  }
</script>

<style lang="stylus">
  .channel {
    * {
      margin: 0;
      padding: 0;
    }

    .bannerBg {
      height: 514px;
      background: url('https://wse.com.cn/_ui/responsive/theme-alpha/img/cooperation/cooperation-banner.jpg') top center no-repeat;
      position: relative;

      .bbFont {
        width: 440px;
        height: 336px;
        position: absolute;
        top: 50px;
        right: 220px;

        .wecTitle {
          font-size: 36px;
          color: #043458;
          display: block;
          font-weight: bold;
        }

        .wecInfo {
          padding-bottom: 30px;
          margin-bottom: 30px;
          line-height: 30px;
          font-size: 18px;
          color: #333;
          border-bottom: 1px solid #ccc;
        }

        .isOkshop {
          margin-bottom: 10px;
          font-size: 20px;
          color: #043458;
          display: block;
          font-weight: bold;
        }

        &>ul {
          padding-left: 20px !important;
        }

        &>ul>li {
          // display: block;
          font-size: 16px;
        }
      }
    }

    .mapBox {
      width: 1020px;
      height: 362px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      .mapLeft {
        .mapTitle {
          font-size: 36px;
          color: #043458;
          display: block;
          margin-bottom: 25px;
        }

        .mapInfo {
          padding-bottom: 30px;
          margin-bottom: 30px;
          line-height: 30px;
          font-size: 18px;
          color: #333;
        }
      }

      .mapRight {
        width: 500px;
        height: 312px;
      }
    }

    .endBox {
      width: 1020px;
      height: 585px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .endImg {
        width: 661px;
        display: block;
        height: 485px;
      }

      .engBox {
        width: 370px;
        height: 521px;

        .ep1 {
          color: #043458;
          padding: 20px 0 20px;
          display: block;
          font-size: 36px;
        }

        .ep2 {
          display: block;
          margin-bottom: 25px;
          font-size: 16px;
        }

        &>.ei {
          background: none;
          padding: 0 15px;
          font-size: 16px;
          width: 100%;
          border: 0;
          display: block;
          border-radius: 5px;
          background: #f2f1f1;
          border: 1px solid #ccc;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          margin-bottom: 10px;
          outline: none;
        }

        .iptTwo {
          margin-bottom: 10px;
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          input {
            background: #f2f1f1;
            border-radius: 5px;
            width: 175px;
            border: 1px solid #ccc;
            height: 40px;
            line-height: 40px;
            border-radius: 5px;
            padding: 0 15px;
            font-size: 16px;
            display: block;
            box-sizing: border-box;
          }

          p {
            border-radius: 5px;
            text-align: center;
            width: 168px;
            height: 38px;
            background: #043458;
            color: #fff;
            line-height: 20px;
            font-size: 16px;
            border: 0;
            box-sizing: border-box;
            line-height: 40px;
            font-weight: bold;
          }
        }

        .getBtn {
          display: block;
          background: #EE2D42;
          color: #fff;
          font-size: 20px;
          margin-top: 20px;
          margin-bottom: 10px;
          height: 46px;
          line-height: 46px;
          width: 100%;
          text-align: center;
        }

        .muchP {
          font-size: 16px;
          margin-top: 20px;
        }
      }
    }

    .tabBox {
      width: 100vw;
      height: 815px;
      background: #f2f1f1;
      overflow: hidden;

      .tabTitle {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #043458;
        margin: 60px 0 40px 0px;
        font-size: 36px;
        font-weight: bold;
      }

      .tabInfo {
        width: 100%;
        text-align: center;
        font-size: 22px;
        color: #333;
        font-weight: bold;
      }

      .tabMuchBox {
        width: 900px;
        height: 270px;
        margin: 0 auto;
        // border: 1px solid #000;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .redRadius {
          width: 135px;
          height: 135px;
          border-radius: 50%;
          background: #ee2d42;
          text-align: center;
          line-height: 135px;
          color: #fff;
          font-size: 28px;

          &::before {
            content: "";
            width: 135px;
            height: 135px;
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(238, 45, 66, 0.15);
            transform: scale(1);
            animation: warn1 1s ease-out infinite;
            display: block;
          }

          &::after {
            content: "";
            width: 135px;
            height: 135px;
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(238, 45, 66, 0.15);
            transform: scale(1.3) translateX(-75px);
            animation: warn2 1s ease-out infinite;
          }
        }
      }

      .tabBomBox {
        width: 1020px;
        height: 393px;
        // border: 1px solid #000;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .tabBomLeft {
          width: 420px;

          &>p {
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #ccc;
            color: #043458;
            font-size: 22px;
            color: #043458;
            line-height: 32px;
          }

          &>ul>li {
            margin-bottom: 5px;
            // display: block;
            font-size: 16px;
            margin-left:20px;
          }
        }
        .tabBomRight{
          width: 631px;
          height: 631px;
          border-radius:50%;
          background: #ccc;
          margin-top: 300px;
        }
      }
    }

    @keyframes warn1 {
      0% {
        transform: scale(0.9);
        opacity: 0;
      }

      50% {
        transform: scale(1.2);
        opacity: 0.5;
      }

      100% {
        transform: scale(1.3);
        opacity: 1;
      }

    }

    @keyframes warn2 {
      0% {
        transform: scale(1.3) translateX(-70px);
        opacity: 1;
      }

      50% {
        transform: scale(1.5) translateX(-65px);
        opacity: 0.5;
      }

      100% {
        transform: scale(1.7) translateX(-55px);
        opacity: 0;
      }
    }

  }
</style>

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
  </div>
</template>

<script>
</script>

<style lang="stylus">
  .channel {
    height: 1000px;

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
  }
</style>

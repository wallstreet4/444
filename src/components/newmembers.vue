
<template>
  <div class="newmembers">
    <div class="main">
      <h1 class="title">新会员注册</h1>
      <div class="bottom">
        <div class="left">
          <h2>免费成为华尔街英语会员</h2>
          <p>*必填</p>
          <div class="list">
            <div>
              <div>真实姓名*</div>
              <div class="one">
                <input type="text" placeholder="姓氏" />
                <input type="text" placeholder="名字" />
              </div>
            </div>
            <div>
              <div>手机号码*</div>
              <div class="two">
                <input type="text" placeholder="+86" />
              </div>
            </div>
            <div class="code">获取短信验证码</div>
            <div>
              <div>验证码*</div>
              <div class="two">
                <input type="text" placeholder="验证码" />
              </div>
            </div>
            <div>
              <div>电子邮件地址*</div>
              <div class="two">
                <input type="text" placeholder="电子邮件地址" />
              </div>
            </div>
            <div>
              <div>密码*</div>
              <div class="two">
                <input type="text" placeholder="密码" />
              </div>
            </div>
            <p style="padding-right: 34px;color: #333;">密码必须至少包含8个字符</p>
            <div>
              <div>确认密码*</div>
              <div class="two">
                <input type="text" placeholder="确认密码" />
              </div>
            </div>
            <div>
              <div>省份*</div>
              <div class="two">
                <input type="text" list="Shenge" placeholder="确认密码" />
                <datalist id="Shenge">
                  <option>男</option>
                  <option>女</option>
                </datalist>
              </div>
            </div>
            <div>
              <div>所在城市*</div>
              <div class="two">
                <input type="text" list="city" placeholder="确认密码" />
                <datalist id="city">
                  <option>男</option>
                  <option>女</option>
                </datalist>
              </div>
            </div>
            <div class="read">
              <div :class="isRead?'active':''" @click="isReadBtn"></div>
              <p>我已阅读并同意使用条款和隐私协议</p>
            </div>
            <div class="registerBtn">
              <i class="iconfont icon-icon-test"></i>
              <p>注册</p>
            </div>
          </div>
        </div>
        <div class="right">
          <p>注册会员的专享权利：</p>
          <div>
            <i class="iconfont icon-iconset0126"></i>
            <p>咨询课程价格</p>
          </div>
          <div>
            <i class="iconfont icon-iconset0126"></i>
            <p style="font-weight: bold;">
              查看你的英语测试结果
              <br />马上测试.
            </p>
          </div>
          <div>
            <i class="iconfont icon-iconset0126"></i>
            <p>查看你的购买记录</p>
          </div>
          <div>
            <i class="iconfont icon-iconset0126"></i>
            <p>获取报价和最新消息</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newmembers",
  data() {
    return {
      isRead: false
    };
  },
  methods: {
    isReadBtn() {
      this.isRead = !this.isRead;
    }
  }
};
</script>

<style lang='stylus'>
*{
  margin 0
  padding 0
}
.newmembers {
  h1 {
    color: green;
  }

  .main {
    width: 1182px;
    padding: 0 82px;
    box-sizing: border-box;
    margin: 0 auto;

    .title {
      font-size: 60px;
      color: #043458;
    }

    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .left {
        width: 620px;
        background-color: #d7dfe5;
        padding: 60px 80px;
        box-sizing: border-box;
        position: relative;

        h2 {
          font-size: 28px;
          color: #043458;
        }

        p {
          text-align: right;
        }

        .list>div {
          height: 33px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .list>div>div {
          height: 100%;
          line-height: 33px;
        }

        .list>div>.one {
          width: 220px;
          display: flex;
          justify-content: space-between;
        }

        .list>div>.one input {
          width: 40%;
          height: 100%;
          border: none;
          outline: none;
          box-sizing: border-box;
          padding-left: 4px;
        }

        .list>div>.two {
          width: 220px;
        }

        .list>div>.two input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          box-sizing: border-box;
          padding-left: 4px;
        }

        .list .code {
          width: 220px;
          height: 33px;
          background-color: #043458;
          color: #fff;
          text-align: center;
          line-height: 33px;
          font-size: 14px;
          font-weight: bold;
          transform: translateX(240px);
        }

        .list .read {
          height: 37px;
          justify-content: space-evenly;
        }

        .list .read>div:nth-child(1) {
          width: 22px;
          height: 22px;
          border: 12px solid #fff;
          background-color: #fff;
        }

        .list .read>div:nth-child(1).active {
          background-color: #043458;
        }

        .list .registerBtn {
          width: 136px;
          height: 136px;
          background-color: #ee2d42;
          position: absolute;
          z-index: 1;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          justify-content: center;
          box-shadow: 0 10px 30px #ee2d42;
          left: 50%;
          margin-left: -68px;
          bottom: -118px;

          i {
            font-size: 40px;
          }

          p {
            font-size: 14px;
            margin: 10px;
          }
        }

        .list .registerBtn:hover {
          opacity: 0.8;
        }
      }

      .left::after {
        content: '';
        background-color: #d7dfe5;
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: -50px;
        left: 0;
        border-radius: 50%;
      }

      .right {
        padding-top: 60px;

        >p {
          font-size: 14px;
          font-weight: bold;
          color: #023359;
        }

        >div {
          display: flex;
          align-items: center;
          color: #023359;

          i {
            font-size: 30px;
            font-weight: bold;
          }

          p {
            margin: 10px 0;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>

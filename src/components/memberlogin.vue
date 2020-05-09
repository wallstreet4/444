<template>
  <div class="memberlogin">
    <div class="mLogin">
      <h1>会员登录</h1>
      <p>如果你已经是会员，请选择以下登录方式。</p>
      <div class="content">
        <div class="left">
          <div class="changeTop">
            <div :class="isShow?'active':''" @click="isShowBtn(true)">手机号码</div>
            <div :class="isShow?'':'active'" @click="isShowBtn(false)">账号登录</div>
          </div>
          <div class="one" v-if="isShow">
            <div>
              <div>手机号码*</div>
              <div>
                <input type="text" placeholder="+86" />
              </div>
            </div>
            <div>获取短信验证码</div>
            <div>
              <div>验证码*</div>
              <div>
                <input type="text" placeholder="验证码" />
              </div>
            </div>
          </div>
          <div class="two" v-else>
            <div>
              <div>手机号码*</div>
              <div>
                <input type="text" placeholder="+86" />
              </div>
            </div>
            <div>
              <div>密码*</div>
              <div>
                <input type="text" placeholder="密码" />
              </div>
            </div>
            <a href="javascript:;">忘记密码?</a>
          </div>
          <div class="leftBottom">
            <i class="iconfont icon-you"></i>
            <p>登录</p>
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
          <div class="goEnroll">新会员注册</div>
        </div>
      </div>
      <div class="QQ">
        <i class="iconfont icon-qq-copy"></i>
        <p>QQ登录</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "memberlogin",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    isShowBtn(e) {
      this.isShow = e;
    }
  }
};
</script>
<style lang="stylus">
.mLogin {
  width: 1182px;
  padding: 0 82px;
  box-sizing: border-box;
  margin: 0 auto;
  padding-bottom: 180px;
  position relative

  h1, p {
    color: #043458;
  }

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .content {
    display: flex;
    justify-content: space-around;

    .left {
      width: 620px;
      background-color: #d7dfe5;
      padding: 60px 80px;
      box-sizing: border-box;
      position: relative;

      .changeTop {
        height: 33px;
        display: flex;
        background-color: #fff;
        margin-bottom: 40px;

        div {
          width: 230px;
          height: 100%;
          text-align: center;
          line-height: 33px;
          font-weight: bold;
          font-size: 14px;
          color: #043458;
        }

        div.active {
          background-color: #043458;
          color: #fff;
        }

        div:hover {
          background-color: #043458;
          color: #fff;
        }
      }

      .two {
        >div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 33px;
          margin-bottom: 15px;

          div:nth-child(1) {
            line-height: 33px;
            color: #043458;
            font-weight: bold;
          }

          div:nth-child(2) {
            height: 100%;
          }

          div input {
            width: 220px;
            height: 100%;
            border: none;
            box-sizing: border-box;
            padding-left: 4px;
            outline: none;
          }
        }

        a {
          display: block;
          text-align: right;
          color: #043458;
          font-weight: bold;
        }
      }

      .one {
        >div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 33px;
          margin-bottom: 15px;

          div:nth-child(1) {
            line-height: 33px;
            color: #043458;
            font-weight: bold;
          }

          div:nth-child(2) {
            height: 100%;
          }

          div input {
            width: 220px;
            height: 100%;
            border: none;
            box-sizing: border-box;
            padding-left: 4px;
            outline: none;
          }
        }

        >div:nth-child(2) {
          width: 220px;
          height: 33px;
          background-color: #043458;
          color: #fff;
          text-align: center;
          line-height: 33px;
          font-weight: bold;
          font-size: 14px;
          display: block;
          transform: translate(240px);
        }

        >div:nth-child(2):hover {
          background-color: #0082a9;
        }
      }

      .leftBottom {
        width: 136px;
        height: 136px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #ee2d42;
        color: #fff;
        box-shadow: 0 0 20px #ee2d42;
        position: absolute;
        left: 50%;
        margin-left: -68px;
        bottom: -68px;

        i {
          font-size: 40px;
        }

        p {
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          margin: 0;
          margin-top: 8px;
        }
      }
      .leftBottom:hover{
          opacity .8
      }
    }

    .right {
      padding-top: 20px;

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

      div:last-child {
        height: 35px;
        width: 150px;
        display: block;
        text-align: center;
        line-height: 35px;
        background-color: #043458;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        margin-top: 15px;
      }

      div:last-child:hover {
        background-color: #0082a9;
      }
    }
  }
  .QQ{
      position absolute
      bottom 110px
      left 130px
      display flex
      align-items center
      line-height 30px
      font-size 30px
      p{
          margin 0
          font-size 16px
          font-weight bold
          margin-left 15px
      }
      i{
          font-size 50px
          color #17b0fe
      }
  }
}
</style>
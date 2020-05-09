<template>
  <div class="contactus">
    <ul class="contactusBtn">
      <li>
        <a>首页</a>
      </li>
      <li></li>
      <li>联系我们</li>
    </ul>
    <div class="CTT">
      <h1 class="title">联系我们</h1>
      <div class="row">
        <div class="left">
          <div>
            <div>
              <i class="iconfont icon-dianhua"></i>
            </div>
            <div>
              <p>热线电话</p>
              <h1>40085 40085</h1>
            </div>
          </div>
          <div>
            <div>
              <i class="iconfont icon-aite"></i>
            </div>
            <div>
              <p>咨询邮箱</p>
              <a href="javascript:;">info@wallstreetenglish.com</a>
            </div>
          </div>
        </div>
        <div class="enter">
          <h1>其他咨询方式</h1>
          <p>客户支持</p>
          <a href="javascript:;">这里</a>
          <p>合作咨询</p>
          <a href="javascript:;">professional@wallstreetenglish.com</a>
        </div>
        <div class="right">
          <div>
            <h1>我们的学习中心</h1>
            <a href="javascript:;">最近学习中心</a>
          </div>
          <div>
            <h1>工作机会</h1>
            <a href="javascript:;">访问我们的招聘页面</a>
          </div>
          <div>
            <h1>常见问题解答</h1>
            <a href="javascript:;">点击此处，访问常见问题解答</a>
          </div>
        </div>
      </div>
    </div>
    <div class="query">
      <div class="query_btn">
        <i class="iconfont icon-you"></i>
        <p>发送</p>
      </div>
      <h1>还有其它疑问？</h1>
      <p>请填写以下表格，我们将在24小时内与你联系。</p>
      <p>*必填</p>
      <div class="query_box">
        <div class="left">
          <div>
            <p>真实姓名*</p>
            <input type="text" placeholder="姓" />
          </div>
          <div>
            <p></p>
            <input type="text" placeholder="名" />
          </div>
          <div>
            <p>手机号码*</p>
            <input type="text" placeholder="+86" />
          </div>
          <div>
            <p>电子邮箱地址*</p>
            <input type="text" placeholder="电子邮箱地址" />
          </div>
        </div>
        <div class="right">
          <div>
            <p>省份*</p>
            <input type="text" list="city" placeholder="-请选择省份-" />
            <datalist id="city">
              <option>男</option>
              <option>女</option>
            </datalist>
          </div>
          <div>
            <p>所在城市*</p>
            <input type="text" list="city1" placeholder="-请选择城市-" />
            <datalist id="city1">
              <option>男</option>
              <option>女</option>
            </datalist>
          </div>
          <div>
            <p>选择类别*</p>
            <input type="text" list="city2" placeholder="-请选择类别-" />
            <datalist id="city2">
              <option>男</option>
              <option>女</option>
            </datalist>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contactus",
  data() {
    return {};
  }
};
</script>
<style lang="stylus">
.contactus {
  .contactusBtn {
    width: 1182px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    ul, li {
      list-style: none;
    }

    li:first-child:hover {
      color: #0082a9;
      cursor: pointer;
    }

    li:nth-child(2) {
      width: 1px;
      height: 28px;
      margin: 0 8px;
      background-color: #333;
    }

    li:last-child {
      font-weight: bold;
      color: #ee2d42;
    }
  }

  .CTT {
    width: 1182px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 80px;

    .title {
      font-size: 55px;
      color: #ee2d42;
      margin: 50px 0;
    }

    .row {
      display: flex;
      justify-content: space-between;

      .left {
        >div {
          display: flex;
          align-items: center;
          color: #023359;

          div i {
            font-size: 60px;
            color: #023359;
            margin-right: 20px;
          }

          div a {
            color: #023359;
            font-weight: bold;
          }

          div a:hover {
            color: #0082a9;
          }
        }
      }

      .enter {
        h1 {
          font-size: 30px;
          color: #ee2d42;
        }

        p {
          color: #023359;
        }

        a {
          color: #023359;
          font-weight: bold;
        }

        a:hover {
          color: #0082a9;
        }

        p:nth-child(4) {
          margin-top: 30px;
        }
      }

      .right {
        div h1 {
          font-size: 30px;
          color: #ee2d42;
        }

        div a {
          color: #023359;
          font-weight: bold;
        }

        div a:hover {
          color: #0082a9;
        }

        div:nth-child(2) h1, div:nth-child(3) h1 {
          margin-top: 20px;
        }
      }
    }
  }

  .query {
    width: 100%;
    background: #d7dee4;
    position: relative;
    padding 80px 0 220px 0
    
    .query_btn {
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
      bottom: 60px;

      i {
        font-size: 40px;
      }

      p {
        font-size: 14px;
        margin: 10px;
        font-weight bold
      }
    }

    .query_btn:hover {
      opacity: 0.8;
    }

    >h1 {
      text-align: center;
      font-size: 40px;
      color: #043458;
      margin-bottom 6px
    }

    >p {
      font-size: 14px;
      text-align: center;
      color: #043458;
    }

    >p:nth-child(4) {
      text-align: right;
      width: 860px;
      margin: 8px auto;
      margin-bottom 15px
    }

    .query_box {
      width: 860px;
      margin: 0 auto;
      display: flex;

      .left {
        flex: 1;
        padding: 0 40px;

        >div {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          p {
            font-size: 18px;
            font-weight: bold;
            color: #043458;
          }

          input {
            border: none;
            width: 222px;
            height: 33px;
            outline: none;
            box-sizing: border-box;
            padding: 0 10px;
          }
        }
      }

      .right {
        flex: 1;
        padding: 0 40px;

        >div {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          p {
            font-size: 18px;
            font-weight: bold;
            color: #043458;
          }

          input {
            border: none;
            width: 222px;
            height: 33px;
            outline: none;
            box-sizing: border-box;
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>
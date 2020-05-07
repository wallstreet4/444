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
  width: 1182px;
  margin: 0 auto;

  .contactusBtn {
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
        div:nth-child(2) h1 , div:nth-child(3) h1{
            margin-top 20px
        }
      }
    }
  }
}
</style>
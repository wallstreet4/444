<template>
  <div class="learning">
    <div class="header_content">
      <div class="content_box">
        <div class="content_box_href">
          <p>首页</p>
          <p>|</p>
          <p>关于华尔街英语</p>
          <p>|</p>
          <p>华尔街英语在中国</p>
        </div>
        <h1 class="big_title">华尔街英语在中国</h1>
        <div class="select_menu">
          <p>我在</p>
          <div class="menu_address">
            <p>{{arrOne}}</p>
            <p class="down" @click="selectShow()">
              <img src="@/assets/learning/down.png" alt />
            </p>
          </div>
          <ul class="select_list" v-show="show">
            <li
              v-for="(item,index) in arrTwo"
              :key="index"
              @click="addressMenu(item,index)"
              :class="{active:arrIndex==index}"
            >{{item}}</li>
          </ul>
        </div>
        <div class="address_name">
          <p class="address_name_title">{{arrContent[arrIndex].address}}</p>
          <p class="address_more">点击查看地图，寻找更多中心</p>
        </div>

        <div class="about_detail">
          <div class="about_detail_left">
            <div class="detail_left_one">
              <div class="left_one_img">
                <img src="@/assets/learning/address.png" alt />
              </div>
              <div class="left_one_dis">
                <p class="one_dis_title">地址</p>
                <p v-html="arrContent[arrIndex].detailsAddress"></p>
              </div>
            </div>

            <div class="detail_left_two">
              <div class="two_one_img">
                <img src="@/assets/learning/phone.png" alt />
              </div>
              <div class="left_two_dis">
                <p class="two_dis_title">联系电话</p>
                <p>{{arrContent[arrIndex].phone}}</p>
              </div>
            </div>

            <div class="detail_left_three">
              <div class="three_one_img">
                <img src="@/assets/learning/calendar.png" alt />
              </div>
              <div class="left_three_dis">
                <p class="three_dis_title">工作时间</p>
                <p>周一至周五 10:00 - 21:30</p>
                <p>周六至周日 10:00 - 19:00</p>
              </div>
            </div>
          </div>
          <div class="about_detail_right">{{arrContent[arrIndex].shopDis}}</div>
        </div>
      </div>
      <div class="right_top_box">
        <img :src="arrContent[arrIndex].img" alt />
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "learning",
  data() {
    return {
      arrOne: "北京市",
      arrTwo: ["北京市", "上海市", "佛山市"],
      show: false,
      arrIndex: 0,
      arrContent: [
        {
          address: "东方广场中心",
          detailsAddress:
            "北京市东城区<br>东长安街 1 号<br>东方广场 W3 座 2 层<br>邮编：100738<br>（地铁 1 号线王府井站 A 出口）",
          phone: "010-85185058",
          shopDis:
            "位于北京的头号商业街王府井大街和北京最著名的大道长安街的交叉口，交通非常方便。中心服务设施完备，学习气氛浓厚，极具时尚现代风格的环境带给您舒适的学习感受。",
          img: require("@/assets/learning/beijingImg.png")
        },
        {
          address: "金茂中心",
          detailsAddress:
            "上海市浦东新区<br>世纪大道88号<br>金茂大厦3层<br>邮编：200121<br>(地铁2号线陆家嘴站6号出口)",
          phone: "021-50470622",
          shopDis:
            "我们在上海的第一个中心，在某种程度上仍然是我们的旗舰。该中心占了中国最高、最有名气的办公大厦金茂大厦的整整一层，服务于上海迅速成长的极端现代化的浦东地区。",
          img: require("@/assets/learning/shanghaiImg.png")
        },
        {
          address: "东方广场中心",
          detailsAddress:
            "佛山市禅城区<br>文龙街 8 号东方广场内<br>东方书城首层<br>邮编：528000<br>（地铁广佛线普君北路站 C 出口）",
          phone: "0757-88039370",
          shopDis:
            "华尔街英语位于佛山的首家中心，坐落于集购物、休闲、娱乐于一体的禅城区东方广场内东方书城首层。紧邻佛山市著名旅游景点祖庙及全新商圈，地铁和多条公交线路均可抵达，交通十分便利。全新开放的中心将带领您用英语走进传统岭南文化名城，尽情体验全球领先的英语培训机构的国际文化魅力。",
          img: require("@/assets/learning/foshanImg.png")
        }
      ]
    };
  },
  methods: {
    addressMenu(item, index) {
      this.arrOne = item;
      this.show = false;
      this.arrIndex = index;
      console.log(index);
    },
    selectShow() {
      this.show = true;
    }
  }
};
</script>

<style lang='stylus'>
.learning {
  width: 100%;
  height: auto;
  background: #fff;
}

.header_content {
  width: 1400px;
  height: 1030px;
  margin: 0 auto;
  position: relative;

  .content_box {
    width: 1181px;
    height: 970px;
    background: #fff;
    margin: 0 auto;

    .content_box_href {
      width: 350px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .big_title {
      margin: 50px 0;
      color: #ee2d42;
      font-size: 50px;
      margin-left: 80px;
    }

    .select_menu {
      width: 350px;
      height: 45px;
      margin-left: 80px;
      display: flex;
      justify-content: space-between;
      position: relative;

      .menu_address {
        width: 300px;
        height: 32px;
        border-bottom: 2px solid #023359;
        display: flex;
        justify-content: space-between;
      }

      .select_list {
        width: 300px;
        height: 500px;
        background: rgb(255, 255, 255);
        box-shadow: rgb(178, 178, 178) 10px 10px 15px;
        position: absolute;
        top: 34px;
        right: 0;
        box-sizing: border-box;
        overflow hidden
        li {
          width: 290px;
          height: 40px;
          padding: 0 10px;
          line-height: 40px;
          list-style: none;
          
        }
        li:hover{
          background #023359
          color #fff
        }
        .active{
          background #023359
          color #fff
        }
      }
    }

    .address_name {
      margin: 50px 0 50px 80px;

      .address_name_title {
        color: #ee2d42;
        font-size: 18px;
        margin-bottom: 15px;
        font-weight: 800;
      }

      .address_more {
        font-size: 14px;
        color: #0082a9;
      }
    }

    .about_detail {
      width: 1101px;
      height: auto;
      margin-left: 80px;
      display: flex;
      justify-content: space-between;

      .about_detail_left {
        width: 300px;
        height: auto;

        .detail_left_one {
          width: 300px;
          height: auto;
          display: flex;
          justify-content: space-between;

          .left_one_img {
            width: 36px;
            height: 126px;
          }

          .left_one_dis {
            width: 245px;
            height: auto;

            .one_dis_title {
              color: #023359;
              margin-bottom: 10px;
              font-size: 15px;
              font-weight: 600;
            }
          }
        }

        .detail_left_two {
          width: 300px;
          height: auto;
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          border-top: 1px solid #dae1e6;
          border-bottom: 1px solid #dae1e6;
          margin-top: 20px;

          .left_two_img {
            width: 36px;
            height: 126px;
          }

          .left_two_dis {
            width: 245px;
            height: auto;

            .one_two_title {
              color: #023359;
              margin-bottom: 10px;
              font-size: 15px;
              font-weight: 600;
            }
          }
        }

        .detail_left_three {
          width: 300px;
          height: auto;
          display: flex;
          justify-content: space-between;
          margin-top: 20px;

          .left_three_img {
            width: 36px;
            height: 126px;
          }

          .left_three_dis {
            width: 245px;
            height: auto;

            .three_dis_title {
              color: #023359;
              margin-bottom: 10px;
              font-size: 15px;
              font-weight: 600;
            }
          }
        }
      }

      .about_detail_right {
        width: 550px;
        height: 220px;
        margin-top: 60px;
        color: #666;
        font-size: 16px;
      }
    }
  }

  .right_top_box {
    width: 692px;
    height: 464px;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>